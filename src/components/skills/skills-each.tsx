import Link from "next/link";
import React from "react";

interface SkillsProps {
  Icon: React.ElementType;
  name: string;
}
const SkillsEach = ({ Icon, name }: SkillsProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Icon size={50} />
      <p className="mt-2 leading-2">{name}</p>
    </div>
  );
};

export default SkillsEach;
