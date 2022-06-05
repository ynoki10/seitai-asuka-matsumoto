import { useState } from 'react';

import MobileHeader from '@/components/Header/MobileHeader';
import MobileMenu from '@/components/Header/MobileMenu';

const Header: React.VFC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={'fixed top-0 left-0 z-10 w-full'}>
        <MobileHeader setIsOpen={setIsOpen} />
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
