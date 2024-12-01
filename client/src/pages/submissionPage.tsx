import { Button } from '@/components/custom/button'
import { SelectDiv } from '@/components/custom/selectdiv'
import SubmissionCard from '@/components/SubmissionCard'
import { dataProp } from '@/interface/post';
import { data, ExamType, subject, year } from '@/lib/data';
import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout';

  const SubmissionPage = () => {
    const [filteredData, setFilteredData] = useState<dataProp[]>([]);
    const [selectedExamType, setSelectedExamType] = useState<string>('');
    const [selectedSubject, setSelectedSubject] = useState<string>('');
    const [selectedYear, setSelectedYear] = useState<string>('');
    const [visibleItems, setVisibleItems] = useState(4);
  
    useEffect(() => {
      const filterData = data.filter((item) => {
        return (
          (selectedExamType ? item.examType === selectedExamType : true) &&
          (selectedSubject ? item.subject === selectedSubject : true) &&
          (selectedYear ? item.time === selectedYear : true)
        );
      });
  
      setFilteredData(filterData);
      setVisibleItems(4); // Reset visible items whenever filters change
    }, [selectedExamType, selectedSubject, selectedYear]);
  
    const handleNext = () => {
      setVisibleItems((prev) => Math.min(prev + 4, filteredData.length));
    };
  
    const handleLess = () => {
      setVisibleItems((prev) => Math.max(prev - 4, 4));
    };
  
    return (
     <MainLayout>
         <div>
        <div className="flex justify-between items-start mb-8">
          <h1 className="md:text-xl text-lg font-bold">Submissions</h1>
          <div className="flex flex-col gap-2 items-end">
            <p>Select what to see</p>
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
            </div>
          </div>
        </div>
        {filteredData.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {filteredData.slice(0, visibleItems).map((item) => (
              <SubmissionCard key={item.id} data={item} />
            ))}
            <div className="z-50 flex items-center gap-3 pb-10">
              <Button onClick={handleNext} className='cursor-pointer' disabled={visibleItems >= filteredData.length}>
                See more
              </Button>
              <Button onClick={handleLess} disabled={visibleItems <= 4}>
                See Less
              </Button>
            </div>
          </div>
        ) : (
          <p>Nothing found</p>
        )}
      </div>
     </MainLayout>
    );
  };
  

export default SubmissionPage