import Link from 'next/link';

import { ASSISTANT, HISTORY, SETTINGS } from 'config/routes';
import Icon from 'components/shared/atoms/Icon';

import { SidebarWrapper, Tabs, TabItem } from './styled';
import { TSidebar, TTabItem } from './types';

const Sidebar = ({ user }: TSidebar) => {
  const tabs: TTabItem[] = [
    { text: 'Assistant', url: ASSISTANT, iconName: 'activity', testId: 'assistant' },
    { text: 'History', url: HISTORY, iconName: 'history', testId: 'history' },
    { text: 'Settings', url: SETTINGS, iconName: 'settings', testId: 'settings' },
  ];

  return (
    <>
      {!!user && (
        <SidebarWrapper>
          <Tabs data-testid="sidebar-tabs">
            {tabs.map(({ text, url, iconName, testId }) => (
              <TabItem key={text} data-testid={testId}>
                <Link href={url} passHref>
                  <Icon name={iconName} $color="black" $size={20} />
                  <span>{text}</span>
                </Link>
              </TabItem>
            ))}
          </Tabs>
          {/* Subscription info */}
          {/* User account dropdown */}
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
