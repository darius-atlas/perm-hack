import cls from './button.module.scss';
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {Link} from "react-router-dom";
import cn from "classnames"
/* eslint-disable-next-line */
export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode
  link: string
}

export function Button({link, children, className, ...props}: ButtonProps) {
  return (
    <button className={cn(cls.button, className)}>
      <Link to={link}>
        {children}
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.375 10.625L10.625 4.375" stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.375 4.375H10.625V10.625" stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </button>
  );
}

export default Button;
