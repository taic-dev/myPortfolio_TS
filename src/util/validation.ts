export const nameValidation = (name: string | null) => {
  if(name === "" || name === null) return "入力必須です";
  if(name?.length <= 1 ) return "2文字以上で入力してください";
  if(name?.length >= 10) return "10文字未満で入力してください";
  return "ok";
}

export const kanaValidation = (kana: string | null) => {
  if(kana === "" || kana === null) return "入力必須です";
  if(!kana.match(/^[ァ-ンヴー]*$/)) return "正しい形式で入力してください"
  if(kana?.length <= 1 ) return "2文字以上で入力してください";
  if(kana?.length >= 10) return "10文字未満で入力してください";
  return "ok";
}

export const emailValidation = (email: string | null) => {
  if(email === "" || email === null) return "入力必須です";
  if(!email.match(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) return "正しい形式で入力してください"
  if(email?.length <= 1 ) return "2文字以上で入力してください";
  if(email?.length >= 50) return "50文字未満で入力してください";
  return "ok";
}

export const messageValidation = (message: string | null) => {
  if(message === "" || message === null) return "入力必須です";
  if(message?.length <= 1 ) return "2文字以上で入力してください";
  if(message?.length >= 1000) return "1000文字未満で入力してください";
  return "ok";
}