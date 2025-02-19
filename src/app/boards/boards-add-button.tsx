import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

export default function BoardsAddButton() {
  return (
    <Button size={'sm'} className='rounded-full w-6 h-6'>
      <Plus size={12} strokeWidth={3} className='text-icon' />
    </Button>
  )
}
