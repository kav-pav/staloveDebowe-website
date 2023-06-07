import type { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const AboutUs: FC<{}> = () => {
  return (
    <div>
      <div className={styles.global__imgContainer}>
        <Image
          className={styles.global__img}
          src="/about-us.jpg"
          alt="Carpenter working"
          fill
        />
        <div className={styles.global__imgGradient} />
      </div>
    </div>
  );
};

export default AboutUs;
