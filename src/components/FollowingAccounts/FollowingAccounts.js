import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
// import * as searchService from '../../services/searchService';

const cx = classNames.bind(styles);

function FollowingAccounts({ heading }) {
   const [items, setItems] = useState([]);
   const [show, setShow] = useState('less');

   useEffect(() => {
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=h&type=${show}`)
         .then((res) => res.json())
         .then((post) => setItems(post.data));
   }, [show]);

   const handleShow = () => {
      if (show === 'less') {
         setShow('more');
      } else {
         setShow('less');
      }
   };

   return (
      <div className={cx('wrapper')}>
         <h1 className={cx('heading')}>{heading}</h1>
         <div className={cx('body')}>
            {items.map((item) => (
               <AccountItem key={item.id} data={item} />
            ))}
         </div>
         <button className={cx('more-btn')} onClick={handleShow}>
            {show === 'less' ? `See more` : `See less`}
         </button>
      </div>
   );
}

FollowingAccounts.propTypes = {
   heading: PropTypes.string.isRequired,
};

export default FollowingAccounts;
