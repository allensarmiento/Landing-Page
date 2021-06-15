import classnames from 'classnames';
import GradientButton from './gradient-button';

const KitchenSinkCard = ({ title, items, children }) => {
  return (
    <div className={classnames(
      'w-5/6',
      'lg:w-1/3',
      'flex',
      'flex-col',
      'mx-auto',
      'lg:mx-0',
      'rounded-lg',
      'bg-white',
      'mt-4',
      'sm:-mt-6',
      'shadow-lg',
      'z-10',
    )}>
      <div className={classnames(
        'flex-1',
        'bg-white',
        'rounded-t',
        'rounded-b-none',
        'overflow-hidden',
        'shadow',
      )}>
        <div className={classnames(
          'w-full',
          'p-8',
          'text-3xl',
          'font-bold',
          'text-center',
        )}>
          {title}
        </div>
        <div className={classnames(
          'gradient',
          'w-full',
          'h-1',
          'my-0',
          'py-0',
          'rounded-t',
        )} />
        <ul className={classnames(
          'w-full',
          'text-center',
          'text-base',
          'font-bold',
        )}>
          {items.map((item, index) => (
            <li key={index} className="border-b py-4">{item}</li>
          ))}
        </ul>
      </div>
      <div className={classnames(
        'flex-none',
        'mt-auto',
        'bg-white',
        'rounded-b',
        'rounded-t-none',
        'overflow-hidden',
        'shadow',
        'p-6',
      )}>
        <div className={classnames(
          'w-full',
          'pt-6',
          'text-4xl',
          'font-bold',
          'text-center',
        )}>
          {children}
        </div>
        <div className="flex items-center justify-center">
          <GradientButton>Sign up</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default KitchenSinkCard;
