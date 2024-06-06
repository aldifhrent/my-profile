import React from "react";
import SkillsEach from "./skills-each";
import { SiTypescript } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="flex flex-col p-12">
      <h1 className="text-3xl">Skills</h1>
      <div className="flex gap-x-12 items-center justify-center mt-12">
        <SkillsEach Icon={FaReact} name="ReactJS" />
        <SkillsEach Icon={RiTailwindCssFill} name="TailwindCSS" />
        <SkillsEach Icon={RiNextjsFill} name="NextJS" />

      </div>
    </section>
  );
};

export default Skills;
