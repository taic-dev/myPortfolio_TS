import React from "react";
import { WorksItem } from "../../atoms/WorksItem/WorksItem";

export const WorksList = ({ worksLists }) => {
  const { contents } = worksLists;
  return (
    <ul className="flex gap-5">
      {contents.map((v)=>(
        <WorksItem
          key={v.id}
          link=""
          imgUrl={v.thumbnail.url}
          name={v.name}
          desc={v.desc}
          client={v.client}
          year={v.date}
        />
      ))}
    </ul>
  )
}