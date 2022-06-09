import { useState } from 'react';

import MobileHeader from '@/components/Header/MobileHeader';
import MobileMenu from '@/components/Header/MobileMenu';

const Header: React.VFC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={'md:hidden'}>
        <MobileHeader setIsOpen={setIsMobileMenuOpen} />
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </>
  );
};

export default Header;
