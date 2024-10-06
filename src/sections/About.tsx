"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";
import html from "@/assets/images/html.png";
import css from "@/assets/images/css.png";
import javascript from "@/assets/images/javascript.png";
import typescript from "@/assets/images/typescript.png";
import reactjs from "@/assets/images/reactjs.png";
import redux from "@/assets/images/redux.png";
import tailwind from "@/assets/images/tailwind.png";
import nodejs from "@/assets/images/nodejs.png";
import mongodb from "@/assets/images/mongodb.png";
import git from "@/assets/images/git.png";
import figma from "@/assets/images/figma.png";
import docker from "@/assets/images/docker.png";
import { CardHeader } from "@/components/CardHeader";
import { twMerge } from "tailwind-merge";
import { Fragment, useRef } from "react";

const technologies = [
  {
    title: "HTML 5",
    iconType: html,
  },
  {
    title: "CSS 3",
    iconType: css,
  },
  {
    title: "JavaScript",
    iconType: javascript,
  },
  {
    title: "TypeScript",
    iconType: typescript,
  },
  {
    title: "React JS",
    iconType: reactjs,
  },
  {
    title: "Redux Toolkit",
    iconType: redux,
  },
  {
    title: "Tailwind CSS",
    iconType: tailwind,
  },
  {
    title: "Node JS",
    iconType: nodejs,
  },
  {
    title: "MongoDB",
    iconType: mongodb,
  },
  {
    title: "git",
    iconType: git,
  },
  {
    title: "figma",
    iconType: figma,
  },
  {
    title: "docker",
    iconType: docker,
  },
];
const hobbies = [
  {
    title: "Gaming",
    emoji: "🏏",
    left: "55%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "30%",
    top: "75%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "30%",
    top: "55%",
  },
  {
    title: "Swiming",
    emoji: "🏊",
    left: "5%",
    top: "40%",
  },
  {
    title: "Traveling",
    emoji: "🏍️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Hiking",
    emoji: "⛰️",
    left: "55%",
    top: "40",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about">
      <div className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into my World"
            description="Learn more about me, what I do, and what inspires me."
          />

          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-0  md:grid-cols-5 lg:grid-cols-0">
              <Card className="h-[320px]  flex flex-col md:col-span-5 lg:col-span-5">
                <CardHeader
                  title="My Skills"
                  description="Explore My Skills and  the technologies and tools I use to create projects and
              digital experiences."
                  className=""
                />
                <div className="flex [mask-image: linear-gradient(to_right, transparent, black_10%,black_90%,transparent)]">
                  <div
                    className={twMerge("flex flex-none py-0.5   gap-2 pr-6")}
                  >
                    {[...new Array(2)].fill(0).map((_, index) => (
                      <Fragment>
                        {technologies.map((item) => (
                          <div
                            key={item.title}
                            className={twMerge(
                              "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg  animate-move-left [animation-duration:5s] "
                            )}
                          >
                            <TechIcon component={item.iconType} />
                            <span className="font-semibold ">{item.title}</span>
                          </div>
                        ))}
                      </Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex [mask-image: linear-gradient(to_right, transparent, black_10%,black_90%,transparent)]">
                  <div
                    className={twMerge(
                      "flex flex-none py-0.5 gap-3 pr-6 -translate-x-1/2 "
                    )}
                  >
                    {technologies.map((item) => (
                      <div
                        key={item.title}
                        className={twMerge(
                          "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg mt-2   animate-move-right [animation-duration:5s]  "
                        )}
                      >
                        <TechIcon component={item.iconType} />
                        <span className="font-semibold ">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            <Card className="h-[350px]  flex flex-col  md:col-span-2 lg:col-span-5">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className=" relative flex-1  " ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className=" inline-flex items-center gap-2 py-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute "
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
