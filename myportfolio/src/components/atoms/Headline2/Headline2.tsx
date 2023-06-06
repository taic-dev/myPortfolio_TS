import React from "react";

interface Headline2Props {
  name: string;
}

export const Headline2 = ({ name }: Headline2Props) => {
  return(
    <div className="headline2 mb-4">
      <h3 className="
        relative
        text-3xl
        before:absolute
        before:content-['']
        before:w-[20px]
        before:h-[3px]
        before:top-[50%]
        before:bg-black
        before:left-[-25px]
        before:translate-y-[-50%]
      ">{ name }</h3>
    </div>
  )
}