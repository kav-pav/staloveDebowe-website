import type { FC } from 'react';
import { useTheme } from 'next-themes';

import ToggleButtonIcon from './themeButtonIcon';
import styles from './themeButton.module.scss';

const ThemeBtn: FC<{}> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={styles.btn_theme}
      type="button"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <ToggleButtonIcon theme={theme} />
    </button>
  );
};

export default ThemeBtn;
