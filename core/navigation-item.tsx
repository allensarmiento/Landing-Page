import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const NavigationItem = ({ children, className }: Props) => {
  return (
    <li className={classnames('mr-3')}>
      <a className={classnames(
        'inline-block',
        'py-2',
        'px-4',
        'text-black',
        'font-bold',
        'no-underline',
        className,
      )}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
