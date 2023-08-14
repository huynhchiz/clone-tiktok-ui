import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import * as searchService from '../../../services/searchService';
import useDebounce from '../../../hooks/useDebounce';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../components/Icons';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);

   const debouncedValue = useDebounce(searchValue, 500);

   const inputRef = useRef();

   // callAPI to show search result
   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);

         const result = await searchService.search(debouncedValue);

         setSearchResult(result);

         setLoading(false);
      };

      fetchApi();
   }, [debouncedValue]);

   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;

      if (searchValue[0] !== ' ') {
         setSearchValue(searchValue);
      }
   };

   return (
      // Using a wrapper <div> tag around the reference element
      // solves this by creating a new parentNode context.
      <div>
         <HeadlessTippy
            offset={[0, 10]} //vị trí tippy đối với element
            interactive //true => hover vào cái tippy nó ko bị ẩn đi
            visible={showResult && searchResult.length > 0} //hiển thị result khi đáp ứng cả 2 đk
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Acounts</h4>
                     {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
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
                  onChange={handleChange}
                  onFocus={() => setShowResult(true)}
               />

               {!!searchValue && !loading && (
                  <button className={cx('clear')} onClick={handleClear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}

               {loading && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}

               <span className={cx('border-between')}></span>

               <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                  <SearchIcon />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
