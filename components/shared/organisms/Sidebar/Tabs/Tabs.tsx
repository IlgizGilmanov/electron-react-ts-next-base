import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/shared/atoms/Icon';
import { TTabs } from './types';
import { TabItem, Wrapper } from './styled';

const Tabs = ({ tabs }: TTabs) => {
  const { pathname } = useRouter();

  return (
    <Wrapper data-testid="sidebar-tabs">
      {tabs.map(({ text, url, iconName, testId }) => (
        <TabItem key={text} data-testid={testId}>
          <Link href={url} passHref>
            <Icon name={iconName} $color={pathname === url ? 'red_500' : 'black'} $size={20} />
            <span>{text}</span>
          </Link>
        </TabItem>
      ))}
    </Wrapper>
  );
};

export default Tabs;
