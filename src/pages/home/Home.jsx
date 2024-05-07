import React, { useCallback, useContext, useEffect } from 'react';
import { LangContext } from '../contexts/LangContext';

export default function Home() {
  const { Lang, setLang } = useContext(LangContext);

  const changeLang = useCallback(() => {
    setLang(Language => (Language === 'ar' ? 'en' : 'ar'));
  },[setLang]);

  // useEffect(() => {
  //   console.log('Lang:', Lang); 
  // }, [Lang]);

  useEffect(() => {
    
    changeLang();
  }, [changeLang]); 

  return (
    <div dir={Lang === 'ar' ? 'rtl' : 'ltr'}>
      <h2>{Lang}</h2>
      <div>Home</div>
      <button className='btn btn-primary' onClick={changeLang}>
        changeLang
      </button>
    </div>
  );
}
