'use client'

import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, X } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import io from 'socket.io-client'

interface KanbanItem {
  id: string
  content: string
}

interface KanbanColumn {
  id: string
  title: string
  items: KanbanItem[]
}

const initialData: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    items: [
      { id: 'task-1', content: 'Analyze supplier performance' },
      { id: 'task-2', content: 'Update inventory levels' },
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    items: [
      { id: 'task-3', content: 'Optimize transportation routes' },
    ]
  },
  {
    id: 'done',
    title: 'Done',
    items: [
      { id: 'task-4', content: 'Review quality control reports' },
    ]
  }
]

const socket = io()

export default function KanbanPage() {
  const [columns, setColumns] = useState(initialData)
  const [newColumnTitle, setNewColumnTitle] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    socket.on('kanbanUpdated', (updatedColumns: KanbanColumn[]) => {
      setColumns(updatedColumns)
    })

    return () => {
      socket.off('kanbanUpdated')
    }
  }, [])

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns.find(col => col.id === source.droppableId)
      const destColumn = columns.find(col => col.id === destination.droppableId)
      const sourceItems = [...sourceColumn!.items]
      const destItems = [...destColumn!.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      const newColumns = columns.map(col => {
        if (col.id === source.droppableId) {
          return { ...col, items: sourceItems }
        }
        if (col.id === destination.droppableId) {
          return { ...col, items: destItems }
        }
        return col
      })
      setColumns(newColumns)
      socket.emit('updateKanban', newColumns)
    } else {
      const column = columns.find(col => col.id === source.droppableId)
      const copiedItems = [...column!.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      const newColumns = columns.map(col => {
        if (col.id === source.droppableId) {
          return { ...col, items: copiedItems }
        }
        return col
      })
      setColumns(newColumns)
      socket.emit('updateKanban', newColumns)
    }
  }

  const addNewColumn = () => {
    if (newColumnTitle.trim() === '') {
      toast({
        title: "Error",
        description: "Column title cannot be empty",
        variant: "destructive",
      })
      return
    }
    const newColumn: KanbanColumn = {
      id: `column-${Date.now()}`,
      title: newColumnTitle,
      items: []
    }
    const newColumns = [...columns, newColumn]
    setColumns(newColumns)
    setNewColumnTitle('')
    socket.emit('updateKanban', newColumns)
    toast({
      title: "Success",
      description: "New column added",
    })
  }

  const addNewTask = (columnId: string) => {
    const newTask: KanbanItem = {
      id: `task-${Date.now()}`,
      content: 'New Task'
    }
    const newColumns = columns.map(col => {
      if (col.id === columnId) {
        return { ...col, items: [...col.items, newTask] }
      }
      return col
    })
    setColumns(newColumns)
    socket.emit('updateKanban', newColumns)
    toast({
      title: "Success",
      description: "New task added",
    })
  }

  const deleteTask = (columnId: string, taskId: string) => {
    const newColumns = columns.map(col => {
      if (col.id === columnId) {
        return { ...col, items: col.items.filter(item => item.id !== taskId) }
      }
      return col
    })
    setColumns(newColumns)
    socket.emit('updateKanban', newColumns)
    toast({
      title: "Success",
      description: "Task deleted",
    })
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Kanban Board</h1>
      <div className="flex items-center space-x-2 mb-4">
        <Input
          type="text"
          placeholder="New column title"
          value={newColumnTitle}
          onChange={(e) => setNewColumnTitle(e.target.value)}
          className="max-w-xs"
        />
        <Button onClick={addNewColumn}>Add Column</Button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {columns.map(column => (
            <div key={column.id} className="flex-shrink-0 w-72">
              <Card>
                <CardHeader>
                  <CardTitle>{column.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-2"
                      >
                        {column.items.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white p-2 rounded shadow flex justify-between items-center"
                              >
                                <span>{item.content}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => deleteTask(column.id, item.id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  <Button
                    className="w-full mt-2"
                    variant="outline"
                    onClick={() => addNewTask(column.id)}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Task
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

