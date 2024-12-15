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



export const ExamType = ["waec", "Neco", "Jamb", "GCE"]
export const year = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]
export const subject = ["Mathematics", "English", "Chemistry", "Biology", "Physics", "Geography"]