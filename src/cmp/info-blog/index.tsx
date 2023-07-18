import type { FC, ReactNode } from 'react';

import styles from './index.module.scss';

interface InfoBlogProps {
  icon: ReactNode;
  children: ReactNode;
}

const InfoBlog: FC<InfoBlogProps> = ({ icon, children }) => {
  return (
    <div className={styles.InfoBlog__container}>
      <div className={styles.InfoBlog__icon}>{icon}</div>
      <div className={styles.InfoBlog__text}>{children}</div>
    </div>
  );
};

export default InfoBlog;
