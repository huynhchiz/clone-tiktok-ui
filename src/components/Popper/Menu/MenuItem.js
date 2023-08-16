import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, isLanguage }) {
   const classes = cx('menu-item', {
      separate: data.separate,
      [cx('language-item')]: isLanguage,
   });

   return (
      <Button className={classes} to={data.to} small leftIcon={data.icon} onClick={onClick}>
         {data.title}
      </Button>
   );
}

MenuItem.propTypes = {
   data: PropTypes.object.isRequired,
   onClick: PropTypes.func,
   isLanguage: PropTypes.bool,
};

export default MenuItem;
