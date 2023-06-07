import type { FC } from 'react';
import Image from 'next/image';

import BlogCard from '@/cmp/blog-card';

import styles from './index.module.scss';

const Blog: FC<{}> = () => {
  return (
    <div>
      <div className={styles.global__imgContainer}>
        <Image
          className={styles.global__img}
          src="/blog.jpeg"
          alt="Carpenter working"
          fill
        />
        <div className={styles.global__imgGradient} />
      </div>
      <div className={styles.text_container}>
        <h1>Blog</h1>
        <p>
          Sprawdź nasze projekty, znajdziesz tutaj pokazane krok po kroku
          wykonane projekty na zyczenie naszych klientow. Baza wiedzy na temat
          wyrobow z drewna i stali oraz procesów towrzenia, które przekuwają sie
          w sukces nasz oraz naszych klientów.
        </p>
      </div>
      <div className={styles.BlogPosts__container}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
