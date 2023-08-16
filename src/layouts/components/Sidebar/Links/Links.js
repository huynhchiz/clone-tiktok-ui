import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Links.module.scss';
import LinkBlock from './LinkBlock';

const cx = classNames.bind(styles);

function Links({ data }) {
   return (
      <div className={cx('wrapper')}>
         {data.map((item) => (
            <LinkBlock key={item.id} dataItem={item.data} />
         ))}
      </div>
   );
}

Links.propTypes = {
   data: PropTypes.array.isRequired,
};

export default Links;
