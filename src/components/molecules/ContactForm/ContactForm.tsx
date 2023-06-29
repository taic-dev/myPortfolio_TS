"use client"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { emailValidation, kanaValidation, messageValidation, nameValidation } from '@/util/validation';

export const ContactForm = () => {
  const [validationObj, setValidationObj] = useState({
    nameError: "",
    kanaError: "",
    emailError: "",
    messageError: "",
  });

  const form = useRef<HTMLFormElement>(null);
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

    if([
      nameValidation(inputName.current && inputName.current.value),
      kanaValidation(inputKana.current && inputKana.current.value),
      emailValidation(inputEmail.current && inputEmail.current.value),
      messageValidation(inputMessage.current && inputMessage.current.value),
    ].every(v => v === "ok")) {
      emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY )
        .then((result) => {
          alert("送信が完了しました。");
          location.href="/";
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  return (
    <form method='POST' id="form" ref={form} onSubmit={(e)=>handleSubmit(e)}>
      <div className="flex gap-5 mb-[25px]">
        <div className='w-[50%] relative'>
          <input type="text" name="name" ref={inputName} className='w-[100%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（フルネーム）' />
          <span className='block absolute bottom-[-20px] text-[10px] text-red-500'>{validationObj.nameError !== "ok" && validationObj.nameError}</span>
        </div>
        <div className='w-[50%] relative'>
          <input type="text" name="kana" ref={inputKana} className='w-[100%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（カナ）' />
          <span className='block absolute bottom-[-20px] text-[10px] text-red-500'>{validationObj.kanaError !== "ok" && validationObj.kanaError}</span>
        </div>
      </div>
      <div className='mb-[25px]'>
        <div className='relative'>
          <input type="text" name='email' ref={inputEmail} className='w-[100%] p-[5px] rounded border border-solid border-gray-500' placeholder='*メールアドレス' />
          <span className='block absolute bottom-[-20px] text-[10px] text-red-500'>{validationObj.emailError !== "ok" && validationObj.emailError}</span>
        </div>
      </div>
      <div className='mb-[25px]'>
        <div className='relative'>
          <textarea name="message" ref={inputMessage} className='w-[100%] p-[5px] rounded border border-solid border-gray-500 min-h-[200px]' placeholder='*お問い合わせ内容'></textarea>
          <span className='block absolute bottom-[-20px] text-[10px] text-red-500'>{validationObj.messageError !== "ok" && validationObj.messageError}</span>
        </div>
      </div>
      <input type="submit" value="送信" className='block w-fit text-white text-sm p-3 px-16 rounded bg-green-600 m-auto' />
    </form>
  )
}
