import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ChevronsLeftRight, Edit, Trash2 } from 'lucide-react'


interface dataProp {
    id: number,
    examType: string,
      subject: string,
      title: string,
      explanation: string,
      options: string[],
      correct_option: string,
      time: string
}

type Prop = {
    data: dataProp
}
const SubmissionCard = ({data}: Prop) => {

    const [openOptions, setOpenOptions] = useState(false)
  return (
    <Card className='min-h-[120px]'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle>{(`${data.subject}`)}</CardTitle>
            <small className='text-sm text-gray-500'>{data.time}</small>
        </CardHeader>
        <CardContent className='pl-2 px-6 mt-4'>
            <div className='flex flex-col gap-1'>
                <h1>{data.title}</h1>
               <div className='flex items-start justify-between mt-3 w-full'>
               <div className='relative w-[80%]'>
                    <button onClick={() => setOpenOptions(!openOptions)} className='flex items-center gap-2 mb-2 text-lg font-semibold text-gray-500'>
                    <ChevronsLeftRight size={15} />
                    <p>options</p>
                    </button>
                    <ul className={`flex flex-col gap-3 absolute bg-gray-900 w-full py-4 px-3 rounded-lg ${openOptions ? "opacity-100":"opacity-0"} transition-all ease-in-out duration-500 `}>
                        {
                            data.options.map((item) => (
                                <li>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-3 text-gray-500 w-[20%] '>
                    <p className='font-semibold'>Answer</p>
                    <p className='uppercase'>{data.correct_option}</p>
                </div>
               </div>
               <p>{data.explanation}</p>
            </div>
        </CardContent>
        <CardFooter>
            <div className='flex items-center justify-between gap-3 w-full'>
               <div className='flex items-center gap-3'>
                    <button className='text-sm'><Edit size={14} color="gray" /></button>
                    <button className='text-sm'><Trash2 size={14} color="gray" /></button>
               </div>
               <p className='text-gray-500'>{data.examType}</p>
            </div>                   
       </CardFooter>
    </Card>
  )
}

export default SubmissionCard