import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   const renderItems = () => {
      return items.map((item, index) => <MenuItem key={index} data={item} />);
   };

   return (
      <Tippy
         interactive
         delay={[0, 700]}
         // visible //bỏ visible để khi hover nó mới hiện lên
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
               <PopperWrapper>{renderItems()}</PopperWrapper>
            </div>
         )}
      >
         {/* btn */}
         {children}
      </Tippy>
   );
}

export default Menu;
