import { Statistics } from "./Statistics";
import pilot from "@/assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                TriadAI is a startup AI company focussed on changing the African educational landscape. We seek to make learning and comprehension easy and fun. We know study is a bit of work, but it must not always be hard. We can be smart about learning and TriadAI seeks to do just that to millons of users
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
