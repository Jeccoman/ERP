import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Benefit = {
  id: string
  name: string
  type: 'health' | 'dental' | 'vision' | 'life' | '401k'
  selected: boolean
  options?: string[]
  selectedOption?: string
}

export function BenefitsEnrollment() {
  const [benefits, setBenefits] = useState<Benefit[]>([
    { id: '1', name: 'Health Insurance', type: 'health', selected: false, options: ['Basic', 'Standard', 'Premium'] },
    { id: '2', name: 'Dental Insurance', type: 'dental', selected: false, options: ['Basic', 'Premium'] },
    { id: '3', name: 'Vision Insurance', type: 'vision', selected: false },
    { id: '4', name: 'Life Insurance', type: 'life', selected: false },
    { id: '5', name: '401(k)', type: '401k', selected: false },
  ])

  const handleBenefitToggle = (id: string) => {
    setBenefits(benefits.map(benefit => 
      benefit.id === id ? { ...benefit, selected: !benefit.selected } : benefit
    ))
  }

  const handleOptionSelect = (id: string, option: string) => {
    setBenefits(benefits.map(benefit => 
      benefit.id === id ? { ...benefit, selectedOption: option } : benefit
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Enrolled benefits:', benefits.filter(b => b.selected))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Benefits Enrollment</CardTitle>
        <CardDescription>Select your benefits for the upcoming year</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {benefits.map(benefit => (
            <div key={benefit.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id={benefit.id} 
                  checked={benefit.selected}
                  onCheckedChange={() => handleBenefitToggle(benefit.id)}
                />
                <Label htmlFor={benefit.id}>{benefit.name}</Label>
              </div>
              {benefit.selected && benefit.options && (
                <Select onValueChange={(value) => handleOptionSelect(benefit.id, value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    {benefit.options.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
          {benefits.find(b => b.type === '401k')?.selected && (
            <div className="space-y-2">
              <Label>401(k) Contribution</Label>
              <RadioGroup defaultValue="5">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="r1" />
                  <Label htmlFor="r1">5% of salary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10" id="r2" />
                  <Label htmlFor="r2">10% of salary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15" id="r3" />
                  <Label htmlFor="r3">15% of salary</Label>
                </div>
              </RadioGroup>
            </div>
          )}
          <Button type="submit">Enroll in Selected Benefits</Button>
        </form>
      </CardContent>
    </Card>
  )
}

