import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "We make fun learning accesible to anyone. No high payment to get basic study, here with little to nothing you access gamified learning.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "You don't just learn, you bond also. Learning discussions and community learning is available. You can bring hard questions here and someone will answer",
  },
  {
    icon: <PlaneIcon />,
    title: "Rewards",
    description:
      "Every week, prices are given to the top 3 student who aces their questions and were consistent",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "You will hardly feel the headaches of learning, as it will be a gamified learning pathay crafted by our best minds",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How we{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        TriadAI is about to launch its first products, the TriadPQ, which is the interface we would have with our users.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
