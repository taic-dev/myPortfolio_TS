import React from "react";

interface ButtonProps {
  name: string;
  link: string;
}

export const Button = ({ name, link }: ButtonProps) => {
  return (
    <a href={link} className={`block w-[250px] text-white text-sm text-center p-3 px-16 rounded bg-green-600`}>{name}</a>
  )
}