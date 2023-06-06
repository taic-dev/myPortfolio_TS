import React from "react";

interface Headline3Props {
  name: string;
}

export const Headline3 = ({ name }: Headline3Props) => {
  return(
    <div className="headline3 py-6 w-44">
      <h4 className="text-base w-fit border-b-2 border-black leading-none">-{ name }</h4>
    </div>
  )
}