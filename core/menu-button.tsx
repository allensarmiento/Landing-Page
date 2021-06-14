import classnames from 'classnames';

const MenuButton = () => {
  return (
    <button
      id="nav-toggle"
      className={classnames(
        'flex',
        'items-center',
        'p-1',
        'text-pink-800',
        'hover:text-gray-900',
        'focus:outline-none',
        'focus:shadow-outline',
        'transform',
        'transition',
        'hover:scale-105',
        'duration-300',
        'ease-in-out',
      )}
    >
      <svg
        className={classnames(
          'fill-current',
          'h-6',
          'w-6',
        )}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  );
};

export default MenuButton;
