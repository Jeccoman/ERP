export interface Workflow {
    id: number
    keyword: string
    name: string
  }
  
  export interface WorkflowStep {
    id: string
    workflowId: string
    workflowOrder: number
    status: 'ACTIVE' | 'INACTIVE'
    userGroup: string
    userGroupKeyword: string
    alternativeName?: string
    description?: string
    action: 'CREATE' | 'VERIFY' | 'AUTHORIZE' | 'APPROVE'
  }
  
  export interface WorkflowDetails {
    id: string
    workflowOrder: string
    status: 'ACTIVE' | 'INACTIVE'
    userGroup: string
    userGroupKeyword: string
    alternativeName?: string
    description?: string
    action: string
    steps: WorkflowStep[]
  }
  
  