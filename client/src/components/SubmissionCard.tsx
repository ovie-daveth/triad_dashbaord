import { Dispatch, SetStateAction, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Activity, ChevronsLeftRight, Edit, Trash2, X } from 'lucide-react'
import { dataProp } from '@/interface/post'
import 'katex/dist/katex.min.css';
import { deletePost } from '@/api/posts';
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"


type Prop = {
    data: dataProp,
    onDelete: (id: number) => void;
}
const SubmissionCard = ({data, onDelete}: Prop) => {

    const { toast } = useToast()
    const [openOptions, setOpenOptions] = useState(false)
    const [loading, setLoading] = useState(false)

    const HandleDeletePost = async(id: number) => {
        setLoading(true)
        const response = await deletePost(id)
        if (response){
            toast({
                duration: 3000,
                title: "Data deleted",
                description: "Succesful",
                action: (
                  <ToastAction altText="cancel"><X /></ToastAction>
                ),
              })
        onDelete(id)
        setLoading(false)
        }
    }

  return (
    <Card className='min-h-[120px]'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle>{(`${data.subject}`)}</CardTitle>
            <small className='text-sm text-gray-500'>{data.examYear}</small>
        </CardHeader>
        <CardContent className='pl-2 px-6 mt-4'>
            <div className='flex flex-col gap-1'>
                <h1>{data.question}</h1>
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
                    <p className='uppercase'>{data.correctOption}</p>
                </div>
               </div>
               <div dangerouslySetInnerHTML={{ __html: data.explanation }} />
               {/* <ReactMarkdown rehypePlugins={[rehypeKatex]}>
               {data.explanation}
                </ReactMarkdown> */}
            </div>
        </CardContent>
        <CardFooter>
            <div className='flex items-center justify-between gap-3 w-full'>
               <div className='flex items-center gap-3 z-50'>
                    <button className='text-sm z-50'><Edit size={14} color="gray" /></button>
                    <button onClick={() => HandleDeletePost(data.id)} className='text-sm z-50'>{loading ? <Activity size={14} color="gray" /> : <Trash2 size={14} color="gray" />}</button>
               </div>
               <p className='text-gray-500'>{data.examType}</p>
            </div>                   
       </CardFooter>
    </Card>
  )
}

export default SubmissionCard