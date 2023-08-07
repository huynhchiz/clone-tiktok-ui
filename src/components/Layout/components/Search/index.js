import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../Icons';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);

   const inputRef = useRef();

   // callAPI to show search result
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 3000);
   }, []);

   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   return (
      <HeadlessTippy
         interactive //hiện tippy
         visible={showResult && searchResult.length > 0} //hiển thị result khi đáp ứng cả 2 đk
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Acounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
               </PopperWrapper>
            </div>
         )}
         // khi click ra ngoài tippy
         onClickOutside={handleHideResult}
      >
         <div className={cx('search-wrapper')}>
            <input
               ref={inputRef}
               value={searchValue}
               className={cx('search-input')}
               placeholder="Search"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />

            {!!searchValue && (
               <button className={cx('clear')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {/* <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} /> */}

            <span className={cx('border-between')}></span>

            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
