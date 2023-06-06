import React from "react";

interface Headline4Props {
  name: string;
}

export const Headline4 = ({ name }: Headline4Props) => {
  return(
    <div className="headline4 py-6 w-44">
      <h5 className="text-base w-fit border-b-2 border-black leading-none">-{ name }</h5>
    </div>
  )
}