'use client';
import { useState } from 'react';
import styles from './page.module.css';

const URL = 'https://api.eu-gb.language-translator.watson.cloud.ibm.com';
const API_KEY = 'dtF8tdfnhQl2dD3a5J6HfoSLjNXnLu-3LliACAGXR68O';

export default function Home() {
  const [text, setText] = useState('');

  const handelSubmit = async () => {
    const response = await fetch('/api/translate', {
      method: 'POST',
      body: JSON.stringify({
        text,
        modelId: 'en-es',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('response', response);
  };

  return (
    <main className={styles.main}>
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handelSubmit}>Submit</button>
    </main>
  );
}
