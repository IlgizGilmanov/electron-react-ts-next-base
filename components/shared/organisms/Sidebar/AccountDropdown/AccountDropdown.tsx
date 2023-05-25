import { FloatingFocusManager, FloatingList } from '@floating-ui/react';

import Icon from 'components/shared/atoms/Icon';
import { useDropdownMenu } from 'components/shared/molecules/DropdownMenu';
import { TAccountDropdown } from './types';
import { StyledReference, Avatar, StyledList } from './styled';
import MenuList from './MenuList';

const AccountDropdown = ({ user, signOut }: TAccountDropdown) => {
  const {
    isOpen,
    refs,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    elementsRef,
    labelsRef,
    handleSelect,
  } = useDropdownMenu({ selectedIndex: null, defaultLabel: '' });

  return (
    <>
      <StyledReference tabIndex={0} ref={refs.setReference} {...getReferenceProps()}>
        <Avatar />
        <span>{[user.firstName, user.lastName].join(' ')}</span>
        <Icon name="arrow-chevron-down" $color="transparent" />
      </StyledReference>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <StyledList ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
              <MenuList getItemProps={getItemProps} handleSelect={handleSelect} signOut={signOut} />
            </FloatingList>
          </StyledList>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default AccountDropdown;
