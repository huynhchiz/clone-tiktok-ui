import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
// import * as searchService from '../../services/searchService';

const cx = classNames.bind(styles);

function FollowingAccounts({ heading }) {
   const [items, setItems] = useState([]);

   useEffect(() => {
      fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=more')
         .then((res) => res.json())
         .then((post) => setItems(post.data));
   }, []);

   return (
      <div className={cx('wrapper')}>
         <h1 className={cx('heading')}>{heading}</h1>
         <div className={cx('body')}>
            {items.map((item) => (
               <AccountItem key={item.id} data={item} />
            ))}
         </div>
         <button className={cx('more-btn')}>See more</button>
      </div>
   );
}

FollowingAccounts.propTypes = {
   heading: PropTypes.string.isRequired,
};

export default FollowingAccounts;
