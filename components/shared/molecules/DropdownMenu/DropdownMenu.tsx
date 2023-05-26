import { useMemo } from 'react';
import { FloatingFocusManager, FloatingList } from '@floating-ui/react';

import Icon from 'components/shared/atoms/Icon';
import { TDropdownMenu } from './types';
import ListItem from './ListItem';
import { StyledList, StyledReference } from './styled';
import useDropdownMenu from './useDropdownMenu';

const DropdownMenu = ({
  defaultLabel,
  menuItems: initialMenuItems,
  selectedIndex,
  onSelect,
}: TDropdownMenu) => {
  const menuItems = useMemo(() => ['Default', ...initialMenuItems], [initialMenuItems]);

  const {
    isOpen,
    activeIndex,
    selectedLabel,
    refs,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    elementsRef,
    labelsRef,
    handleSelect,
  } = useDropdownMenu({
    selectedIndex,
    defaultLabel,
    onSelect,
  });

  return (
    <>
      <StyledReference tabIndex={0} ref={refs.setReference} {...getReferenceProps()}>
        <span>{selectedLabel ?? defaultLabel}</span>
        <Icon name="arrow-chevron-down" $color="transparent" />
      </StyledReference>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <StyledList ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
              {menuItems.map(item => (
                <ListItem
                  key={`list-item-${item}`}
                  label={item}
                  activeIndex={activeIndex}
                  selectedIndex={selectedIndex}
                  getItemProps={getItemProps}
                  handleSelect={handleSelect}
                />
              ))}
            </FloatingList>
          </StyledList>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default DropdownMenu;