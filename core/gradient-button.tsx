import classnames from 'classnames';

const GradientButton = ({ children }) => {
  return (
    <button className={classnames(
      'gradient',
      'mx-auto',
      'lg:mx-0',
      'hover:underline',
      'text-white',
      'font-bold',
      'rounded-full',
      'my-6',
      'py-4',
      'px-8',
      'shadow-lg',
      'focus:outline-none',
      'focus:shadow-outline',
      'transform',
      'transition',
      'hover:scale-105',
      'duration-300',
      'ease-in-out',
    )}>
      {children}
    </button>
  );
};

export default GradientButton;
