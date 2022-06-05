import { Dispatch, SetStateAction } from 'react';

import IconLink from '@/components/Header/MobileHeader/IconLink';
import MenuButton from '@/components/Header/MobileHeader/MenuButton';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type LinkProps = React.ComponentProps<typeof IconLink>;
const linkList: [LinkProps, LinkProps, LinkProps, LinkProps] = [
  {
    path: '/',
    icon: {
      path: '/assets/images/ico-home.svg',
      width: 30,
      height: 28,
    },
    text: 'ホーム',
  },
  {
    path: '/beginner/',
    icon: {
      path: '/assets/images/ico-beginner.svg',
      width: 20,
      height: 27,
    },
    text: '初めての方へ',
    textSize: '[10px]',
  },
  {
    path: '/price/',
    icon: {
      path: '/assets/images/ico-price.svg',
      width: 24,
      height: 26,
    },
    text: '料金',
  },
  {
    path: '/access/',
    icon: {
      path: '/assets/images/ico-access.svg',
      width: 18,
      height: 26,
    },
    text: 'アクセス',
  },
];

const MobileHeader: React.VFC<Props> = (props) => {
  const { setIsOpen } = props;

  return (
    <nav className={'sm:hidden'}>
      <ul className={'flex'}>
        {linkList.map((link) => {
          return (
            <li className={'w-[20%]'} key={link.path}>
              <IconLink
                path={link.path}
                icon={link.icon}
                text={link.text}
                textSize={link.textSize}
              />
            </li>
          );
        })}
        <li className={'w-[20%]'}>
          <MenuButton setIsOpen={setIsOpen} />
        </li>
      </ul>
    </nav>
  );
};

export default MobileHeader;
