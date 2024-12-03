import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const data = [
  {
    id: 1,
    subject: "Mathematics",
    title: "The equaltion of motion is corresponding to what?",
    time: "08:00pm"
  },
  {
    id: 2,
    subject: "English",
    title: "The equaltion of motion is corresponding to what?",
    time: "10:00pm"
  },
  {
    id: 3,
    subject: "Mathematics",
    title: "The equaltion of motion is corresponding to what?",
    time: "08:00pm"
  },
  {
    id: 4,
    subject: "Mathematics",
    title: "The equaltion of motion is corresponding to what?",
    time: "08:00pm"
  },
  {
    id: 5,
    subject: "Mathematics",
    title: "The equaltion of motion is corresponding to what?",
    time: "08:00pm"
  },
  {
    id: 6,
    subject: "Mathematics",
    title: "The equaltion of motion is corresponding to what?",
    time: "08:00pm"
  },
  {
    id: 7,
    subject: "Mathematics",
    title: "The equaltion of motion is corresponding to what?",
    time: "08:00pm"
  },
]
export function RecentSales() {
  return (
    <div className='space-y-8'>
     {
      data.map((item, index) => (
        <div key={index} className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>{item.subject.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>{item.subject}</p>
            <p className='text-sm text-muted-foreground'>
             {item.title}
            </p>
          </div>
          <div className='font-medium'>{item.time}</div>
        </div>
      </div>
      ))
     }
    </div>
  )
}
