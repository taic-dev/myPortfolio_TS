import React from "react";

interface Headline3Props {
  name: string;
}

export const Headline3 = ({ name }: Headline3Props) => {
  return(
    <div className="headline3 my-8">
      <h4 className="text-2xl w-fit">{ name }</h4>
    </div>
  )
}