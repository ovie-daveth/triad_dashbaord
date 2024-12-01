import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Overview } from '@/components/dashboard/overview'
import { RecentSales } from '@/components/dashboard/recent-sales'
import MainLayout from './layouts/MainLayout'
import naira from "@/assets/naira.svg"
import { useNavigate } from 'react-router-dom'
import CreatePostForm from './CreatePosts'
import Submissions from './Submissions'
import CreateInterface from '@/components/CreateInterface'


export default function Dashboard() {
  const navigate = useNavigate()
  return (
  <MainLayout>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>{('overview')}</TabsTrigger>
              <TabsTrigger value='submit'>{('submissions')}</TabsTrigger>
              <TabsTrigger value='create'>{('Submit a question')}</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    {('total_revenue')}
                  </CardTitle>
                 <img src={naira} alt="naira" className='w-4 h-4' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>₦0.00</div>
                  <p className='text-xs text-muted-foreground'>
                    from_last_week +0.0%
                  </p>
                </CardContent>
              </Card>
              <Card onClick={() => navigate("/posts")} className=' cursor-pointer'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    {('No. of submitted questions')}
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <rect width='20' height='14' x='2' y='5' rx='2' />
                    <path d='M2 10h20' />
                  </svg>
                 
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>0</div>
                  <p className='text-xs text-muted-foreground'>
                    from_last_week 0.0%
                  </p>
                </CardContent>
              </Card>            
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>{('overview')}</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>{('recent_submssions')}</CardTitle>
                  <CardDescription>
                    You have been working hard👋
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='submit' className='space-y-4'>
           <Submissions />
          </TabsContent>
          <TabsContent value='create' className='space-y-4'>
           <CreateInterface />
          </TabsContent>
        </Tabs>

  </MainLayout>
  )
}
