import { useState } from 'react'
import { SelectDiv } from './custom/selectdiv';
import { ExamType, subject, year } from '@/lib/data';
import { Button } from './custom/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateInterface = () => {
    const [selectedExamType, setSelectedExamType] = useState<string>('');
    const [selectedSubject, setSelectedSubject] = useState<string>('');
    const [selectedYear, setSelectedYear] = useState<string>('');

    const navigate = useNavigate()
    const handleGo = () => {
        console.log(selectedExamType, selectedSubject, selectedYear)
       if(!selectedExamType || !selectedSubject || !selectedYear) {
        toast.warn("We don't know what you want to do?")
        return null
       }

       navigate(`/posts/create?type=${selectedExamType}&subject=${selectedSubject}&year=${selectedYear}`)
    }
  return (
    <div>
        <h1 className='text-lg md:text-xl font-bold mb-10'>What do you wat to work on today?</h1>
        <div className="flex items-center flex-wrap gap-3">
              <SelectDiv
                onValueChange={setSelectedExamType}
                placeholder="Exam type"
                label="Exam Type"
                data={ExamType}
              />
              <SelectDiv
                onValueChange={setSelectedSubject}
                placeholder="Subject"
                label="Subject"
                data={subject}
              />
              <SelectDiv
                onValueChange={setSelectedYear}
                placeholder="Exam year"
                label="Exam Year"
                data={year}
              />
              <Button onClick={handleGo}>Go</Button>
            </div>
    </div>
  )
}

export default CreateInterface