import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Links.module.scss';

const cx = classNames.bind(styles);

const LinkBlock = ({ dataItem }) => {
   return (
      <div className={cx('link-block')}>
         {dataItem.map((item, index) => (
            <p key={index} className={cx('link-item')}>
               {item.title}
            </p>
         ))}
      </div>
   );
};

LinkBlock.propTypes = {
   dataItem: PropTypes.array.isRequired,
};

export default LinkBlock;
