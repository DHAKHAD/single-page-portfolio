import school from "../assets/images/school.png";
import figma from "@/assets/images/figmaimage.png";
import bank from "@/assets/images/bank.png";
import Image from "next/image";
import ChackIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "School-Management",
    year: "2023",
    title: "The School Dashboard Management ",
    results: [
      { title: " SDM is a comprehensive web application designed" },
      { title: " It serves as a centralized platform" },
      {
        title:
          " For managing academic activities, enabling efficient communication and data management.",
      },
    ],
    link: "https://github.com/DHAKHAD/School-Management",
    image: school,
  },
  {
    company: "BANKING-APP",
    year: "2024",
    title: "banking app with a finance management dashboard",
    results: [
      { title: "Connects multiple bank accounts" },
      { title: "displays real-time transactions," },
      { title: "allows you to transfer money to other" },
    ],
    link: "https://github.com/DHAKHAD/BANKING-APP",
    image: bank,
  },
  {
    company: "Figma-App",
    year: "2023",
    title: "Figma Design using Figma-clone App",
    results: [
      {
        title:
          "This project is a real-time collaborative design tool inspired by Figma",
      },
      {
        title:
          "it enables multiple users to work together seamlessly on design projects",
      },
    ],
    link: "https://github.com/DHAKHAD/Figma-Real_time",
    image: figma,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow=" Real-World Results"
          title=" Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />

        <div className=" mt-10  md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8  pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  sticky  "
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2  md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className=" flex gap-2 text-sm md:text-base text-white/50">
                        <ChackIcon className=" size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8  hover:bg-white/10 hover:text-white transition duration-300">
                      <span>View Project Code</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:md-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
