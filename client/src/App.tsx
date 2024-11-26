import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
   <div className='text-red-600'>
    <Button variant={"secondary"}>Press me</Button>
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>

   </div>
  )
}

export default App
