import React from 'react'

interface SidebarIconPops {
  link: string;
  iconUrl: string;
}

export const SidebarIcon = ({ link, iconUrl }: SidebarIconPops) => {
  return (
    <div>
      <a href={link}>
        <img src={iconUrl} alt="アイコン画像" className="w-48 h-48 object-cover rounded-[20%]" />
      </a>
    </div>
  )
}
