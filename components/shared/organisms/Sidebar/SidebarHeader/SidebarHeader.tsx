import Icon from 'components/shared/atoms/Icon';
import { Wrapper, LogoWrapper } from './styled';

const SidebarHeader = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Icon name="settings" $size={10} $color="white" />
      </LogoWrapper>
      <span>ChatterAI</span>
    </Wrapper>
  );
};

export default SidebarHeader;
