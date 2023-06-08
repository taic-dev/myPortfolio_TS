import React from 'react'

interface SidebarIconPops {
  link: string;
  iconUrl: string;
  position: string;
}

export const SidebarIcon = ({ link, iconUrl, position }: SidebarIconPops) => {
  return (
    <div className='w-[200px] h-[200px]'>
      <a href={link}>
        <img src={iconUrl} alt="アイコン画像" className={`w-[200px] h-[200px] object-cover rounded-[20%] m-${position}`} />
      </a>
    </div>
  )
}
