import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  naira_price: number;
  naira_yearly: number,
  dollar_price: number;
  dollar_yearly: number,
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    naira_price: 0,
    naira_yearly: 0,
    dollar_price: 0,
    dollar_yearly: 0,
    description:
      "Gives you access to the basic features of the app which includes all practice questions.",
    buttonText: "Get Started",
    benefitList: [
      "All practice questions",
      "Hints available for some questions",
      "Upto 4 pages",
      "No AI feature",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    naira_price: 850,
    naira_yearly: 10200,
    dollar_price: 1.5,
    dollar_yearly: 18,
    description:
    "Gives access to all our features including all AI features, view reels for short learning videos",
    buttonText: "Start Free Trial",
    benefitList: [
      "All practice questions",
      "Hints available for All questions",
      "Unlimited life span",
      "Community support",
      "Priority support",  
      "View and engage Learning Reels and shorts",
      "All AI feature",
    ],
  },
  {
    title: "Gold",
    popular: 0,
    naira_price: 1200,
    naira_yearly: 14400,
    dollar_price: 3,
    dollar_yearly: 36,
    description:
      "Gives access to all our features including all AI features, community support, cretaor features and earning",
    buttonText: "Contact US",
    benefitList: [
     "All practice questions",
      "Hints available for All questions",
      "Unlimited life span",
      "Community support",
      "Priority support",
      "View and engage Learning Reels and shorts",
      "Create Learning Reels and shorts - Be a creator and get paid",
      "All AI feature",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Our pricing makes it very affordable to get the best learning experiences
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader className="mb-3">
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div>
                      <span className="text-3xl font-bold">$ {pricing.dollar_price}</span>
                      <span className="text-muted-foreground"> /month</span>
                  </div>
                  <div>
                    <span className="text-sm font-light">$ {pricing.dollar_yearly}</span>
                    <span className="text-muted-foreground"> /year</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                    <div>
                      <span className="text-3xl font-bold">₦ {pricing.naira_price}</span>
                      <span className="text-muted-foreground"> /month</span>
                  </div>
                  <div>
                    <span className="text-sm font-light">₦ {pricing.naira_yearly}</span>
                    <span className="text-muted-foreground"> /year</span>
                  </div>
                </div>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
