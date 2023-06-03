import React from "react";
import { WorksItem } from "../../atoms/WorksItem/WorksItem";

export const WorksList = () => {
  return (
    <ul className="flex gap-5">
      <WorksItem
        link=""
        imgUrl="https://myportfoliomaind3f2.gatsbyjs.io/static/remaker-1bbbbd8492f251600cdc84409af3769f.png"
        name="実績物1実績物1実績物1実績物1実績物1"
        desc="説明文章です説明文章です説明文章です説明文章です説明文章です説明文章です"
        client="クライアント"
        year={2023}
      />
      <WorksItem
        link=""
        imgUrl="https://myportfoliomaind3f2.gatsbyjs.io/static/tuda-c4ee7d5c16904c9a41815f7a2ca6ad5b.png"
        name="実績物2実績物2実績物2実績物2実績物2実績物2実績物2"
        desc="説明文章です説明文章です説明文章です説明文章です説明文章です説明文章です"
        client="クライアント"
        year={2023}
      />
      <WorksItem
        link=""
        imgUrl="https://myportfoliomaind3f2.gatsbyjs.io/static/portfolio-2aaf8af6f50fa567f77c21e537e40bb3.png"
        name="実績物3実績物3実績物3実績物3実績物3実績物3実績物3"
        desc="説明文章です説明文章です説明文章です説明文章です説明文章です説明文章です"
        client="個人開発"
        year={2023}
      />
    </ul>
  )
}