import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const WhiteButton = ({ children, className }: Props) => {
  return (
    <button
      className={classnames(
        'mx-auto',
        'lg:mx-0',
        'py-4',
        'px-8',
        'hover:underline',
        'bg-white',
        'text-gray-800',
        'font-bold',
        'rounded-full',
        'focus:outline-none',
        'focus:shadow-outline',
        'transform',
        'transition',
        'hover:scale-105',
        'duration-300',
        'ease-in-out',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
