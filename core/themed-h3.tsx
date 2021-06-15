import classnames from 'classnames';

const ThemedH3 = ({ children }) => {
  return (
    <h3 className={classnames(
      'mb-3',
      'text-3xl',
      'text-gray-800',
      'font-bold',
      'leading-none',
    )}>
      {children}
    </h3>
  );
};

export default ThemedH3;
