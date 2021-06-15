import classnames from 'classnames';
import GradientButton from './gradient-button';

const RaisedCard = () => {
  return (
    <div className={classnames(
      'w-full',
      'md:w-1/3',
      'p-6',
      'flex',
      'flex-col',
      'flex-grow',
      'flex-shrink',
    )}>
      <div className={classnames(
        'flex-1',
        'bg-white',
        'rounded-t',
        'rounded-b-none',
        'overflow-hidden',
        'shadow',
      )}>
        <a className={classnames(
          'flex',
          'flex-wrap',
          'no-underline',
          'hover:no-underline',
        )}>
          <p className={classnames(
            'w-full',
            'text-gray-800',
            'text-xs',
            'md:text-sm',
            'font-bold',
            'px-6',
            'py-4',
          )}>
            xGETTING STARTED
          </p>
          <div className={classnames(
            'w-full',
            'font-bold',
            'text-xl',
            'text-gray-800',
            'px-6',
          )}>
            Lorem ipsum dolor sit amet.
          </div>
          <p className={classnames(
            'text-gray-800',
            'text-base',
            'px-6',
            'mb-5',
          )}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </a>
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
        <div className="flex items-center justify-start">
          <GradientButton>Action</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default RaisedCard;
