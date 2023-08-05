import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
   className,
   to,
   href,
   leftIcon,
   rightIcon,
   // types
   primary = false,
   outline = false,
   normal = false,
   rounded = false,
   // sizes
   small = false,
   large = false,

   disabled = false,
   children,
   onClick,
   ...moreProps
}) {
   let Comp = 'button';

   const props = {
      onClick,
      ...moreProps,
   };

   // remove event listeners when button is disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }
   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className, //them classname vao de custom css cho Button o file scss khac
      primary, //btn chinh
      outline, //btn co outline
      normal, //btn upload
      rounded, //btn co radius hoi tron, da co kich thuoc san
      small,
      large,
      disabled,
   });

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
