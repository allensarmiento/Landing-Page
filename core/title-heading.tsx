import classnames from 'classnames';

const TitleHeading = ({ children }) => {
  return (
    <>
      <h1 className={classnames(
        'w-full',
        'my-2',
        'text-gray-800',
        'text-5xl',
        'text-center',
        'font-bold',
        'leading-tight',
      )}>
        {children}
      </h1>
      <div className="w-full mb-4">
        <div className={classnames(
          'gradient',
          'w-64',
          'h-1',
          'mx-auto',
          'opacity-25',
          'my-0',
          'py-0',
          'rounded-t',
        )} />
      </div>
    </>
  );
};

export default TitleHeading;
