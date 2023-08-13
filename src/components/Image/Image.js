import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

// khi avatar bị lỗi => dùng customFallback từ ngoài truyền vào
// nếu avt lỗi && ko có customFallback => dùng images.defaultAvatar
const Image = forwardRef(({ src, className, fallback: customFallback = images.defaultAvatar, alt, ...props }, ref) => {
   // fallback : dự phòng
   const [fallback, setFallback] = useState('');

   const handleError = () => {
      setFallback(customFallback);
   };

   return (
      <img
         className={cx('wrapper', className)}
         ref={ref}
         src={fallback || src}
         alt={alt}
         {...props}
         // onError : sự kiện khi thẻ img bị lỗi
         onError={handleError}
      />
   );
});

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   className: PropTypes.string,
   fallback: PropTypes.string,
};

export default Image;
