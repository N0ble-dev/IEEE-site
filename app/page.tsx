import Image from "next/image";
import Logo from "./components/Logo";
import CornerBrackets from "@/components/ui/CornerBrackets";
import GoalCard from "./components/GoalCard";
import EventCard from "./components/EventCard";
import { services, stats, committees } from "@/data/index";

import Link from "next/link";
import BlackMainSection from "@/app/components/BlackMainSection";
export default function Home() {
  return (
    <>
      <section className="flex  items-center h-screen justify-center">
        <div className=" h-[calc(100vh-5rem)] w-[90%] relative  ">
          <Logo />
          <Image
            src="/img.png"
            alt="Picture of the author"
            fill
            className="  object-cover rounded-2xl"
          />
        </div>
      </section>
      <section className="mx-auto w-[90%] ">
        <div
          className="
          relative flex flex-col md:items-start items-center md:gap-1 gap-6 overflow-hidden 
          rounded-3xl bg-[#1B1B1B]  p-6 
          text-white md:flex-row gradient
        "
        >
          <CornerBrackets />

          <div className="relative md:h-[400px] sm:h-[340px] h-[290px] lg:w-[27%] w-[35%] max-md:w-[60%]  flex-shrink-0 overflow-hidden rounded-[16px] whoImage ">
            <Image
              src="/whoSec.png"
              alt="IEEE Mansoura Computer Society Chapter"
              fill
              className="object-cover max-w-[90%]  "
            />
          </div>

          <div className="pt-3 flex gap-5 flex-col justify-center md:items-start items-center w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-[#F7A500] mb-4 font-[Merriweather]">
              WHO WE ARE
            </h2>
            <h3 className="text-2xl font-semibold mb-4 tracking-wider">
              IEEE Mansoura Computer Society Chapter{" "}
              <span className="text-[#F7A500]">Since 2021</span>
            </h3>
            <p className="text-gray-300 text-lg leading-8 tracking-wider">
              IEEE Mansoura Computer Society Chapter is considered to be the
              technical subunit of IEEE Mansoura Student Branch. IEEE ManCSC
              follows the IEEE Computer Society. The IEEE Mansoura Computer
              Society Chapter is considered to be the technical subunit of IEEE
              Mansoura Student Branch. IEEE ManCSC follows the IEEE Computer
              Society.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0F0F0F] text-white" id="goals">
        <h2 className="text-4xl font-[Merriweather] font-bold text-center text-[#F7A500] mb-12">
          OUR GOALS
        </h2>
        <div className="w-[90%] mx-auto px-4 flex flex-col md:flex-row gap-8">
          {services.map((g) => (
            <GoalCard key={g.id} title={g.title} description={g.description} />
          ))}
        </div>
      </section>
      <BlackMainSection className="text-center relative bg-[url('/bgcomitte.svg')] bg-contain">
        <h2 className="text-4xl font-bold text-[#F7A500] mb-4 font-[Merriweather] text-center">
          OUR COMMITTEES
        </h2>
        <p className="text-gray-300 text-lg leading-8 tracking-wider mb-12 text-center max-w-xl mx-auto">
          EIGHT COMMITTEES, ONE JOURNEY OF PASSION AND GROWTH.
        </p>
        ={" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {committees.map((c) => (
            <Link href={c.href} key={c.id}>
              <div
                className={`w-[91%] mx-auto
                  group relative flex flex-col items-center justify-center
                  bg-[#1f1f1f] rounded-xl py-8 px-4
                  border-b-4 border-[#F7A708]
                  transition-all duration-300 cursor-pointer
                  hover:shadow-[0px_4px_10px_0px_#F7A708]
                  `}
              >
                <div className="mb-4">
                  <Image
                    src={c.icon}
                    alt={c.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-medium text-center">
                  {c.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/commites"
          className="block w-[50%] sm:w-1/2 md:w-1/3 lg:w-[18%] mx-auto mt-10 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-6 py-2 transition text-center"
        >
          Explore More
        </Link>
      </BlackMainSection>
      <section className="mx-auto flex flex-col gap-16 items-center pt-24 bg-black bg-opacity-10">
        <h1 className="font-[Merriweather] w-full text-5xl font-bold text-center text-amber-500 tracking-[2.4px] max-sm:text-4xl">
          OUR EVENTS
        </h1>

        <div
          className="
          w-full
          flex flex-wrap justify-center gap-y-5 gap-x-5 px-4
        "
        >
          <EventCard />
        </div>

        <Link
          href="/events"
          className="mx-auto mt-1 px-14 py-3 text-2xl font-bold bg-amber-500 rounded-full hover:bg-amber-600 transition-colors"
        >
          Explore More
        </Link>
      </section>
      <section className="w-[88%] md:py-0 py-24 mx-auto flex flex-col lg:flex-row items-center gap-12  text-white">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="font-[Merriweather] text-4xl lg:text-5xl font-bold tracking-wide text-amber-500">
            Our Projects
          </h1>
          <p className="text-lg max-w-xl mx-auto lg:mx-0">
            Innovative, purposeful, and crafted with care — our projects are on
            the way.{" "}
            <span className="text-amber-400 font-semibold">Coming soon!</span>
          </p>
        </div>
        <div className="lg:w-1/2 relative w-full max-w-xl mx-auto md:block hidden">
          <Image
            src="/ourproject.svg"
            alt="IEEE Mansoura Computer Society Chapter"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>
      </section>

      <section className="w-[90%] mx-auto pb-16 px-4" id="impact">
        <h2 className="font-[Merriweather] text-center text-amber-500 text-4xl font-bold mb-12 tracking-wide max-sm:text-3xl">
          OUR IMPACT IN NUMBERS
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 ">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative w-full  md:aspect-square aspect-video 
               bg-[#1f1f1f] rounded-xl flex flex-col items-center justify-center
               transition-all duration-300 border-b-4 border-[#F7A708]
               cursor-pointer hover:shadow-[0px_4px_10px_0px_#F7A708]"
            >
              <img
                src="/outline.svg"
                alt="Outline"
                className="absolute left-3 top-4 h-[15%]
                 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300
                 pointer-events-none"
              />

              <div className="text-neutral-400 group-hover:text-amber-500 transition-colors mb-2">
                {item.icon}
              </div>

              <p className="text-2xl font-extrabold text-neutral-200 group-hover:text-amber-500 transition-colors max-sm:text-xl">
                {item.count}
              </p>

              <p className="text-base font-medium text-neutral-400 mt-1 group-hover:text-amber-500 transition-colors max-sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-[90%] mx-auto flex flex-col justify-center pt-5 pb-12">
        <h2 className="font-[Merriweather] text-center text-4xl font-bold tracking-[2.4px] text-amber-500 max-md:text-4xl">
          OUR PARTNERS
        </h2>
        <p className="text-gray-300 text-lg leading-8 tracking-wider mb-8 text-center max-w-xl mx-auto">
          Building success through strong collaborations with trusted partners.{" "}
        </p>
        <div className="mt-16 flex w-full flex-wrap items-end justify-center gap-20 max-md:mt-10">
          <Link
            href="https://www.facebook.com/ITIMansoura"
            className="relative flex aspect-square min-h-[250px] min-w-60 items-center justify-center rounded-full border-b-[3px] border-amber-500 bg-neutral-800"
          >
            <div className="relative h-[50%] w-[150px]">
              <Image
                src="/iti.svg"
                alt="Partner logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
          </Link>

          <Link
            href="https://telda.app/"
            className="relative flex aspect-square min-h-[250px] min-w-60 items-center justify-center rounded-full bg-neutral-900 shadow-[0px_3px_3px_rgba(247,165,0,1)]"
          >
            <div className="relative h-[141px] w-[141px]">
              <Image
                src="/telda.svg"
                alt="Partner logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 141px"
              />
            </div>
          </Link>

          <Link
            href="https://www.facebook.com/GrootWorkspace"
            className="relative flex aspect-square min-h-[250px] min-w-60 items-center justify-center rounded-full border-b-[3px] border-amber-500 bg-neutral-800"
          >
            <div className="relative h-20 w-20">
              <Image
                src="/grrot.svg"
                alt="Partner logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80px"
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
