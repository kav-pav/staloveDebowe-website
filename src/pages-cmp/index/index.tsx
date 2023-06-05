import type { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const Home: FC<{}> = () => {
  return (
    <div>
      <div className={styles.img_container}>
        <Image
          className={styles.img}
          src="/landing-page.jpg"
          alt="Carpenter working"
          fill
        />
      </div>
      <div className={styles.text_container}>
        <h1>Creating unique and personalized woodwork.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctusnec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};

export default Home;
