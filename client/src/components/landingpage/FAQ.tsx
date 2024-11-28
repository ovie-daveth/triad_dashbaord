import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the purpose of this app?",
    answer:
      "This app is designed to help users learn and practice past questions and answers with the assistance of AI, which provides hints and detailed explanations for better understanding.",
    value: "item-1",
  },
  {
    question: "Can I use the app offline?",
    answer:
      "While you can access previously downloaded content offline, AI-powered hints and explanations require an internet connection.",
    value: "item-2",
  },
  {
    question: "How does the AI assist in learning?",
    answer:
      "The AI analyzes each question to provide hints, detailed explanations, and tailored suggestions to help users grasp concepts effectively.",
    value: "item-3",
  },
  {
    question: "Are the past questions and answers updated regularly?",
    answer:
      "Yes, we continuously update the question bank to ensure it includes the latest and most relevant past questions and answers.",
    value: "item-4",
  },
  {
    question: "Is there a subscription fee for using the app?",
    answer:
      "The app offers both free and premium plans. Free users can access basic features, while premium subscribers enjoy AI-powered explanations, offline access, and additional study materials.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:davethsite@gmail.com"
          target="_blank"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
