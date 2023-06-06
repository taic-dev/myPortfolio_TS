import React from "react";

interface ButtonProps {
  name: string;
  link: string;
}

export const Button = ({ name, link }: ButtonProps) => {
  return (
    <a href={link} className={`block w-fit text-white text-sm p-3 px-16 rounded bg-indigo-500`}>{name}</a>
  )
}