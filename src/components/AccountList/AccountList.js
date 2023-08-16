import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountList.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AccountList({ data, heading }) {
   const [show, setShow] = useState(5);
   // const [items, setItems] = useState([]);
   // const [show, setShow] = useState('less');

   // useEffect(() => {
   //    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=h&type=${show}`)
   //       .then((res) => res.json())
   //       .then((post) => setItems(post.data));
   // }, [show]);

   // const handleShow = () => {
   //    if (show === 'less') {
   //       setShow('more');
   //    } else {
   //       setShow('less');
   //    }
   // };

   const handleShow = () => {
      setShow((pre) => pre + 5);
   };

   return (
      <div className={cx('wrapper')}>
         <h1 className={cx('heading')}>{heading}</h1>
         <div className={cx('body')}>
            {/* {items.map((item) => (
               <AccountItem key={item.id} data={item} />
            ))} */}
            {data.map((item) => (
               <AccountItem key={item.id} data={item} />
            ))}
         </div>
         <button className={cx('more-btn')} onClick={handleShow}>
            {/* {show === 'less' ? `See more` : `See less`} */}
            See more
         </button>
      </div>
   );
}

AccountList.propTypes = {
   data: PropTypes.array,
   heading: PropTypes.string.isRequired,
};

export default AccountList;
