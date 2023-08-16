import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faCircleQuestion, faKeyboard, faMoon } from '@fortawesome/free-solid-svg-icons';

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      //quy ước: cứ phần tử nào có children thì nó có cấp nhỏ hơn
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: '',
               title: 'English',
            },
            {
               type: 'language',
               code: '',
               title: 'العربية',
            },
            {
               type: 'language',
               code: '',
               title: 'বাঙ্গালি (ভারত)',
            },
            {
               type: 'language',
               code: '',
               title: 'Cebuano (Pilipinas)',
            },
            {
               type: 'language',
               code: '',
               title: 'Čeština (Česká republika)',
            },
            {
               type: 'language',
               code: '',
               title: 'Deutsch',
            },
            {
               type: 'language',
               code: '',
               title: 'Ελληνικά (Ελλάδα)',
            },
            {
               type: 'language',
               code: '',
               title: 'Español',
            },
            {
               type: 'language',
               code: '',
               title: 'Suomi (Suomi)',
            },
            {
               type: 'language',
               code: '',
               title: 'Filipino (Pilipinas)',
            },
            {
               type: 'language',
               code: '',
               title: 'Français',
            },
            {
               type: 'language',
               code: '',
               title: 'עברית (ישראל)',
            },
            {
               type: 'language',
               code: '',
               title: 'हिंदी',
            },
            {
               type: 'language',
               code: '',
               title: 'Magyar (Magyarország)',
            },
            {
               type: 'language',
               code: '',
               title: 'Bahasa Indonesia (Indonesia)',
            },
            {
               type: 'language',
               code: '',
               title: 'Italiano (Italia)',
            },
            {
               type: 'language',
               code: '',
               title: '日本語（日本）',
            },
            {
               type: 'language',
               code: '',
               title: 'Basa Jawa (Indonesia)',
            },
            {
               type: 'language',
               code: '',
               title: 'ខ្មែរ (កម្ពុជា)',
            },
            {
               type: 'language',
               code: '',
               title: '한국어 (대한민국)',
            },
            {
               type: 'language',
               code: '',
               title: 'Bahasa Melayu (Malaysia)',
            },
            {
               type: 'language',
               code: '',
               title: 'မြန်မာ (မြန်မာ)',
            },
            {
               type: 'language',
               code: '',
               title: 'Nederlands (Nederland)',
            },
            {
               type: 'language',
               code: '',
               title: 'Polski (Polska)',
            },
            {
               type: 'language',
               code: '',
               title: 'Português (Brasil)',
            },
            {
               type: 'language',
               code: '',
               title: 'Română (Romania)',
            },
            {
               type: 'language',
               code: '',
               title: 'Русский (Россия)',
            },
            {
               type: 'language',
               code: '',
               title: 'Svenska (Sverige)',
            },
            {
               type: 'language',
               code: '',
               title: 'ไทย (ไทย)',
            },
            {
               type: 'language',
               code: '',
               title: 'Türkçe (Türkiye)',
            },
            {
               type: 'language',
               code: '',
               title: 'Українська (Україна)',
            },
            {
               type: 'language',
               code: '',
               title: 'اردو',
            },
            {
               type: 'language',
               code: '',
               title: 'Tiếng Việt (Việt Nam)',
            },
            {
               type: 'language',
               code: '',
               title: '简体中文',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
   {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: 'Dark mode',
   },
];

export { MENU_ITEMS };
