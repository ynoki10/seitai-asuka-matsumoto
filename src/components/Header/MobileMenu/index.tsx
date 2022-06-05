import { Dialog } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu: React.VFC<Props> = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={'fixed z-20 bg-white'}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will be permanently
          removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
