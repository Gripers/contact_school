'use client';

import { useState } from 'react';
import styles from './page.module.css';

import { Toaster, toast } from 'react-hot-toast';
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    await axios
      .post(
        `https://api.telegram.org/bot${
          process.env.NEXT_PUBLIC_BOT
        }/sendMessage?chat_id=${
          process.env.NEXT_PUBLIC_GROUP
        }&text=${encodeURIComponent(
          `<b>Name, Surname:</b> ${event.target[0].value}
<b>Age:</b> ${event.target[1].value}
<b>Phone number:</b> ${event.target[2].value}
        `
        )}&parse_mode=html`
      )
      .then(() => {
        event.target.reset();
        toast.success('Success');
      })
      .catch(() => toast.error('Fail'))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Image
            src='/static/images/logo.png'
            alt=''
            width={150}
            height={150}
          />
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name / Ism' required />
            <input type='number' placeholder='Age / Yosh' required />
            <input type='number' placeholder='Phone number / Telefon raqam' required />
            <button type='submit'>{isLoading ? '...' : 'Submit'}</button>
          </form>
        </div>
      </main>

      <Toaster position='top-center' />
    </>
  );
}
