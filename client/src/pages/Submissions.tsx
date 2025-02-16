import { GetPosts } from '@/api/posts';
import { Button } from '@/components/custom/button'
import { SelectDiv } from '@/components/custom/selectdiv'
import SubmissionCard from '@/components/SubmissionCard'
import { dataProp } from '@/interface/post';
import { ExamType, subject, year } from '@/lib/data';
import { useEffect, useState } from 'react'


  const Submissions = () => {
    const [data, setData] = useState<dataProp[]>([])
    const [filteredData, setFilteredData] = useState<dataProp[]>([]);
    const [selectedExamType, setSelectedExamType] = useState<string>('');
    const [selectedSubject, setSelectedSubject] = useState<string>('');
    const [selectedYear, setSelectedYear] = useState<string>('');
    const [visibleItems, setVisibleItems] = useState(4);
    

    const getPost = async () => {
      const response = await GetPosts()
      if (response){
        setData(response.data)
      }
    }
    useEffect(() => {
      getPost()
    }, [])

    useEffect(() => {
      console.log("The reponse", data)
      const filterData = data.filter((item) => {
        return (
          (selectedExamType ? item.examType === selectedExamType : true) &&
          (selectedSubject ? item.subject === selectedSubject : true) &&
          (selectedYear ? item.examYear === selectedYear : true)
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

    const handleDelete = (id: number) => {
      setData((prevData) => prevData.filter((item) => item.id !== id));
    };
  
  
    return (
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
              <SubmissionCard onDelete={handleDelete} key={item.id} data={item} />
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
    );
  };
  

export default Submissions