import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
   return (
      <Button className={cx('menu-item')} to={data.to} small leftIcon={data.icon}>
         {data.title}
      </Button>
   );
}

export default MenuItem;
