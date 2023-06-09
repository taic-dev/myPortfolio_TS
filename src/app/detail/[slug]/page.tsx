import React from "react"

export default function worksDetail({ params }: {params : {slug: string}}) {
  return (
    <div>
      詳細ページです。
      {params.slug}
    </div>
  )
}