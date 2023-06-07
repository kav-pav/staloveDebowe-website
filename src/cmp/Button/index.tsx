import type { FC } from 'react';
import type { ScriptProps } from 'next/script';

import styles from './index.module.scss';

const Button: FC<ScriptProps> = ({ children }) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};

export default Button;
