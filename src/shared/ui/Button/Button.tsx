import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className = '',
  children,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  const ButtonClassList = classNames(cls.Button, {}, [className, cls[theme]]);

  return (
    <button className={ButtonClassList} {...otherProps}>
      {children}
    </button>
  );
};
