import type { FC } from 'react';
import { animated, useSpring } from 'react-spring';

export type ThemeType = { theme: string | undefined };

const ToggleButtonIcon: FC<ThemeType> = ({ theme }) => {
  const white = '#e3e4e6';
  const black = '#212121';
  const circleAnimation = useSpring({
    transform:
      theme === 'light'
        ? `translate3d(0px,0px,0px)`
        : `translate3d(70px,0px,0px)`,
    fill: theme === 'light' ? `${black}` : `${white}`,
  });
  const borderAnimation = useSpring({
    stroke: theme === 'light' ? `${black}` : `${white}`,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 186 108"
    >
      <animated.path
        className="circle"
        style={borderAnimation}
        stroke="#e3e4e6"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M131.25 5H53.87C26.88 5 5 26.88 5 53.87s21.88 48.87 48.87 48.87h77.38c26.99 0 48.87-21.88 48.87-48.87S158.24 5 131.25 5z"
      />
      <animated.path
        style={circleAnimation}
        fill="#e3e4e6"
        stroke="#e3e4e6"
        strokeMiterlimit="10"
        d="M53.5 78.87c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25z"
      />
    </svg>
  );
};

export default ToggleButtonIcon;
