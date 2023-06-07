import type { FC } from 'react';
import Image from 'next/image';

import Form from '@/cmp/Form';

import styles from './index.module.scss';

const Contact: FC<{}> = () => {
  return (
    <div>
      <div className={styles.global__imgContainer}>
        <Image
          className={styles.global__img}
          src="/contact.png"
          alt="Projecting on board"
          fill
        />
        <div className={styles.global__imgGradient} />
      </div>
      <Form />
      <div className={styles.text_container}>
        <h1>Bądźmy w kontakcie</h1>
        <p>
          Skontaktuj się z nami, razem zbudujemy Twoje marzenia w przystępnej
          cenie.
        </p>
      </div>
    </div>
  );
};

export default Contact;
