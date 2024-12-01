import { dataProp } from "@/interface/post";

export const metadata = {
  metadataBase: new URL(
    import.meta.env.APP_URL
      ? `${import.meta.env.APP_URL}`
      : import.meta.env.VERCEL_URL
      ? `https://${import.meta.env.VERCEL_URL}`
      : `http://localhost:${import.meta.env.PORT || 3000}`
  ),
  title: "shadcn/ui sidebar",
  description:
    "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "shadcn/ui sidebar",
    description:
      "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcn/ui sidebar",
    description:
      "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness."
  }
};



export const data: dataProp[] = [
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

export const ExamType = ["waec", "Neco", "Jamb", "GCE"]
export const year = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]
export const subject = ["Mathematics", "English", "Chemistry", "Biology", "Physics", "Geography"]