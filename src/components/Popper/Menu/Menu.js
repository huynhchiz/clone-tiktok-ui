import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFnc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFnc }) {
   const [history, setHistory] = useState([{ data: items }]);

   //menu hiện tại là phần tử cuối mảng
   const current = history[history.length - 1];

   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;

         return (
            <MenuItem
               isLanguage={item.type === 'language'} //kiểm tra nếu type===language thì thêm class 'language-item'
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };

   const handleBackMenu = () => {
      setHistory((prev) => prev.slice(0, prev.length - 1)); //xóa menu hiện tại (pt cuối mảng) => trả về mảng mới (menu trước đó)
   };

   const renderResult = (attrs) => (
      <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
         <PopperWrapper>
            {history.length > 1 && ( //nếu cấp menu > 1 thì menu hiện header
               <Header title={current.title} onBack={handleBackMenu} />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
         </PopperWrapper>
      </div>
   );

   const handleResetMenu = () => {
      setHistory((prev) => prev.slice(0, 1));
   };

   return (
      <Tippy
         hideOnClick={hideOnClick} //false => click vào element ko bị ẩn tippy
         offset={[12, 12]} //vị trí tippy đối với element
         interactive //true => hover vào cái tippy nó ko bị ẩn đi
         delay={[0, 700]}
         // visible //bỏ visible để khi hover vào element nó mới hiện lên
         placement="bottom-end" //vị trí tippy đối với element
         render={renderResult}
         onHide={handleResetMenu} //khi tippy ẩn
      >
         {/* btn */}
         {children}
      </Tippy>
   );
}

Menu.propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array,
   hideOnClick: PropTypes.bool,
   onChange: PropTypes.func,
};

export default Menu;
