"use client"
import React from 'react'

export const ContactForm = () => {
  return (
    <form action="https://getform.io/f/c844eaf1-c409-4d5b-a842-047e7a6b5f34" method='POST'>
      <div className="flex gap-5 mb-[25px]">
        <input type="text" name="name" className='w-[50%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（フルネーム）' />
        <input type="text" name="kana" className='w-[50%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（カナ）' />
      </div>
      <div className='mb-[25px]'>
        <input type="text" name='email' className='w-[100%] p-[5px] rounded border border-solid border-gray-500' placeholder='*メールアドレス' />
      </div>
      <div className='mb-[25px]'>
        <textarea name="message" id="" className='w-[100%] p-[5px] rounded border border-solid border-gray-500 min-h-[200px]' placeholder='*お問い合わせ内容'></textarea>
      </div>
      <input type="submit" value="送信" className='block w-fit text-white text-sm p-3 px-16 rounded bg-green-600 m-auto' />
    </form>
  )
}
