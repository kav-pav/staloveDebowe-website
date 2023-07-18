import type { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from './index.module.scss';

const BlogPost: FC<{}> = () => {
  const router = useRouter();
  const { postId } = router.query;

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
      <div>
        <div>BlogPost - {postId}</div>
      </div>
    </div>
  );
};

export default BlogPost;
