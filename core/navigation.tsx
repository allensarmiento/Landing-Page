import classnames from 'classnames';
import NavigationItem from './navigation-item';

const Navigation = () => {
  return (
    <ul className={classnames(
      'list-reset',
      'flex-1',
      'lg:flex',
      'justify-end',
      'items-center',
    )}>
      <NavigationItem>
        Active
      </NavigationItem>
      <NavigationItem className={classnames(
        'hover:text-gray-800',
        'hover:text-underline',
      )}>
        Link
      </NavigationItem>
      <NavigationItem className={classnames(
        'hover:text-gray-800',
        'hover:text-underline',
      )}>
        Link
      </NavigationItem>
    </ul>
  );
};

export default Navigation;
