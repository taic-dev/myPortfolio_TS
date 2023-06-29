"use client"
import React, { useRef, useState } from 'react'
import { emailValidation, kanaValidation, messageValidation, nameValidation } from '@/util/validation';

export const ContactForm = () => {
  const [validationObj, setValidationObj] = useState({
    nameError: "",
    kanaError: "",
    emailError: "",
    messageError: "",
  });
  const inputName = useRef<HTMLInputElement>(null);
  const inputKana = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputMessage = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationObj({
      ...validationObj,
      nameError: nameValidation(inputName.current && inputName.current.value),
      kanaError: kanaValidation(inputKana.current && inputKana.current.value),
      emailError: emailValidation(inputEmail.current && inputEmail.current.value),
      messageError: messageValidation(inputMessage.current && inputMessage.current.value)
    });
  }

  console.log(validationObj);

  return (
    <form action="https://getform.io/f/c844eaf1-c409-4d5b-a842-047e7a6b5f34" method='POST' onSubmit={(e)=>handleSubmit(e)}>
      <div className="flex gap-5 mb-[25px]">
        <input type="text" name="name" ref={inputName} className='w-[50%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（フルネーム）' />
        <span>{validationObj.nameError !== "ok" && validationObj.nameError}</span>
        <input type="text" name="kana" ref={inputKana} className='w-[50%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（カナ）' />
        <span>{validationObj.kanaError !== "ok" && validationObj.kanaError}</span>
      </div>
      <div className='mb-[25px]'>
        <input type="text" name='email' ref={inputEmail} className='w-[100%] p-[5px] rounded border border-solid border-gray-500' placeholder='*メールアドレス' />
        <span>{validationObj.emailError !== "ok" && validationObj.emailError}</span>
      </div>
      <div className='mb-[25px]'>
        <textarea name="message" ref={inputMessage} className='w-[100%] p-[5px] rounded border border-solid border-gray-500 min-h-[200px]' placeholder='*お問い合わせ内容'></textarea>
        <span>{validationObj.messageError !== "ok" && validationObj.messageError}</span>
      </div>
      <input type="submit" value="送信" className='block w-fit text-white text-sm p-3 px-16 rounded bg-green-600 m-auto' />
    </form>
  )
}
