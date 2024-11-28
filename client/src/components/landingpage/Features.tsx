import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "@/assets/growth.png";
import image3 from "@/assets/reflecting.png";
import image4 from "@/assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Learning Gamification",
    description:
      "This is our core feature. We seek to make the learning and practice of questions easy and fun. Science tells us learning happens faster in a fun environment",
    image: image4,
  },
  {
    title: "Intuitive user interface",
    description:
      "Our user interface is slick and easy to use and naigate. Minimalistic",
    image: image3,
  },
  {
    title: "AI-Powered insights",
    description:
      "Our powerful AI can give you hints on any questions before answering. This helps braoden you clues",
    image: image,
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "LeaderBoard",
  "Reviews",
  "Hints",
  "AI explanation",
  "Gamification",
  "Learning reels",
  "Community chat",
  "Slick user interfcae",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
