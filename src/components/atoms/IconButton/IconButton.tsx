import React from "react"
import Image from "next/image"

interface IconButtonProps {
  name: string,
  iconUrl: string,
  link: string
}

export const IconButton = ({ name, iconUrl, link }: IconButtonProps) => {
  return (
    <a href={link} className="w-[120px] flex items-center justify-center gap-[8px] py-[10px] shadow-[1px_1px_6px_#ccc;] rounded-xl">
      <Image src={`/${iconUrl}.svg`} alt="アイコン画像" width={20} height={20} />
      <span className="noto-sans-japanese text-sm">{name}</span>
    </a>
  )
}