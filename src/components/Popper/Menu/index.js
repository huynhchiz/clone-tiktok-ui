import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFnc = () => {};

function Menu({ children, items = [], onChange = defaultFnc }) {
   const [history, setHistory] = useState([{ data: items }]);

   //menu hiện tại là phần tử cuối mảng
   const current = history[history.length - 1];

   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;

         return (
            <MenuItem
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

   return (
      <Tippy
         offset={[12, 12]}
         interactive
         delay={[0, 700]}
         // visible //bỏ visible để khi hover nó mới hiện lên
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  {history.length > 1 && (
                     <Header
                        title={current.title}
                        onBack={() => {
                           // xóa phần tử cuối mảng là menu con hiện tại
                           // chỉ chừa lại mảng ko gồm phần tử hiện tại (pt cuối)
                           setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                     />
                  )}
                  {renderItems()}
               </PopperWrapper>
            </div>
         )}
         onHide={() => setHistory((prev) => prev.slice(0, 1))}
      >
         {/* btn */}
         {children}
      </Tippy>
   );
}

export default Menu;
