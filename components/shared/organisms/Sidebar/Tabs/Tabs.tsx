import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/shared/atoms/Icon';
import { TTabs } from './types';
import { Wrapper, TabItem, TabGroup, TabGroupName } from './styled';

const Tabs = ({ tabGroups }: TTabs) => {
  const { pathname } = useRouter();

  return (
    <Wrapper data-testid="sidebar-tabs">
      {tabGroups.map(group => (
        <TabGroup>
          <TabGroupName>{group.name}</TabGroupName>
          {group.items.map(({ text, url, iconName, testId }) => (
            <TabItem key={text} data-testid={testId} $isActive={pathname === url}>
              <Link href={url} passHref>
                <Icon
                  name={iconName}
                  $color={pathname === url ? 'primary' : 'secondary_text'}
                  $size={18}
                />
                <span>{text}</span>
              </Link>
            </TabItem>
          ))}
        </TabGroup>
      ))}
    </Wrapper>
  );
};

export default Tabs;
