import { Button } from '@/components/custom/button'
import { SelectDiv } from '@/components/custom/selectdiv'
import SubmissionCard from '@/components/SubmissionCard'
import React, { useEffect, useState } from 'react'


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

const data: dataProp[] = [
    {
      id: 1,
      subject: "Mathematics",
      title: "The equaltion of motion is corresponding to what?",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
      options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
      correct_option: "a",
      time: "2021",
      examType: "waec"
    },
    {
      id: 2,
      subject: "English",
      title: "The equaltion of motion is corresponding to what?",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
      options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
      correct_option: "a",
      time: "2023",
       examType: "GCE"
    },
    {
      id: 3,
      subject: "Mathematics",
      title: "The equaltion of motion is corresponding to what?",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
      options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
      correct_option: "a",
      time: "2018",
      examType: "waec"
    },
    {
      id: 4,
      subject: "Mathematics",
      title: "The equaltion of motion is corresponding to what?",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
      options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
      correct_option: "a",
      time: "2021",
      examType: "waec"
    },
    {
      id: 5,
      subject: "Mathematics",
      title: "The equaltion of motion is corresponding to what?",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
      options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
      correct_option: "a",
      time: "2019",
      examType: "waec"
    },
    {
      id: 6,
      subject: "Mathematics",
      title: "The equaltion of motion is corresponding to what?",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
      options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
      correct_option: "a",
      time: "2021",
      examType: "Jamb"
    },
    {
      id: 7,
      subject: "Chemistry",
      title: "The equaltion of motion is corresponding to what?",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
      options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
      correct_option: "a",
      time: "2020",
      examType: "Neco"
    },
    {
        id: 8,
        subject: "Physics",
        title: "The equaltion of motion is corresponding to what?",
        explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
        options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
        correct_option: "a",
        time: "2020",
        examType: "Neco"
      },
      {
        id: 9,
        subject: "Physics",
        title: "The equaltion of motion is corresponding to what?",
        explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
        options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
        correct_option: "a",
        time: "2020",
        examType: "Neco"
      },
      {
        id: 10,
        subject: "Physics",
        title: "The equaltion of motion is corresponding to what?",
        explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
        options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
        correct_option: "a",
        time: "2020",
        examType: "Neco"
      },
      {
        id: 11,
        subject: "Physics",
        title: "The equaltion of motion is corresponding to what?",
        explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
        options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
        correct_option: "a",
        time: "2020",
        examType: "Neco"
      },
      {
        id: 12,
        subject: "Physics",
        title: "The equaltion of motion is corresponding to what?",
        explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iste ea enim neque nostrum eligendi dolorum fuga eveniet commodi quos?",
        options: ["enim neque ", "enim neque ", "enim neque ", "enim neque ", "enim neque "],
        correct_option: "a",
        time: "2020",
        examType: "Neco"
      },
  ]

  const ExamType = ["waec", "Neco", "Jamb", "GCE"]
  const year = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]
  const subject = ["Mathematics", "English", "Chemistry", "Biology", "Physics", "Geography"]



  const Submissions = () => {
    const [questionData, setQuestionData] = useState<dataProp[]>(data);
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
    );
  };
  

export default Submissions