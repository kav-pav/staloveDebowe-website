import type { FC } from 'react';

import { Typewriter } from '@/cmp/typewriter/typewriter';

import styles from './index.module.scss';

const Home: FC<{}> = () => {
  return (
    <div>
      <div className={styles.typewritter_container}>
        <div className={styles.typewritter_wrapper}>
          <Typewriter />
        </div>
      </div>
      <div className={styles.sentence_container}>
        <div className={styles.sentence_wrapper}>
          I am a developer specialising in <span>React</span> and
          <br /> <span>User Expirence</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
