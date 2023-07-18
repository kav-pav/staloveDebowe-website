import Image from 'next/image';
import type { GetStaticProps } from 'next/types';
import type { FC } from 'react';
import { CombinedError, useQuery } from 'urql';

import Form from '@/cmp/Form';

import contactQuery from './contactQuery';
import styles from './index.module.scss';

type ContactProps = {
  data: { Opis: string; Tytul: string } | undefined;
  fetching: boolean | undefined;
  error: CombinedError | undefined;
};

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const [result] = useQuery({
    query: contactQuery,
  });
  return { props: { data, fetching, error } };
};

const Contact: FC<{}> = () => {
  const { data, fetching, error } = result;

  if (fetching) return <p>Fetching products</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { Opis, Tytul } = data.kontakt.data.attributes;

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
      <div className={styles.contactText__container}>
        <h1>{Tytul}</h1>
        <p>{Opis}</p>
      </div>
    </div>
  );
};

export default Contact;
