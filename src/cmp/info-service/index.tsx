import type { FC, ReactNode } from 'react';

import styles from './index.module.scss';

interface InfoBlogProps {
  icon: ReactNode;
  children: ReactNode;
  title: string;
}

const InfoServices: FC<InfoBlogProps> = ({ icon, children, title }) => {
  return (
    <div className={styles.InfoServices__container}>
      <div className={styles.InfoServices__icon}>{icon}</div>
      <div className={styles.InfoServices__containerText}>
        <div className={styles.InfoServices__title}>{title}</div>
        <div className={styles.InfoServices__text}>{children}</div>
      </div>
    </div>
  );
};

export default InfoServices;
