import classNames from 'classnames/bind';
import styles from './TiktokLoading.module.scss';

const cx = classNames.bind(styles);

function TiktokLoading() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('red-circle')}></div>
         <div className={cx('blue-circle')}></div>
      </div>
   );
}

export default TiktokLoading;
