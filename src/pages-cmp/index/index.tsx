import type { FC } from 'react';
import Image from 'next/image';

import Button from '@/cmp/Button';

import styles from './index.module.scss';

const Home: FC<{}> = () => {
  return (
    <div>
      <div className={styles.global__imgContainer}>
        <Image
          className={styles.global__img}
          src="/IndexBG.png"
          alt="Carpenter working"
          fill
        />
        <div className={styles.global__imgGradient} />
      </div>
      <div className={styles.homeText__container}>
        <h1>Creating unique and personalized woodwork.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctusnec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Button>GET STARTED</Button>
      </div>
    </div>
  );
};

export default Home;
