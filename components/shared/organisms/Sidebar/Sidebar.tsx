import { ASSISTANT, HISTORY, SETTINGS } from 'config/routes';

import Tabs, { TTabGroup } from './Tabs';
import AccountDropdown from './AccountDropdown';
import SidebarHeader from './SidebarHeader';
import { SidebarWrapper } from './styled';
import { TSidebar } from './types';

const tabGroups: TTabGroup[] = [
  {
    name: 'Assistant',
    items: [
      { text: 'Assistant', url: ASSISTANT, iconName: 'activity', testId: 'assistant' },
      { text: 'History', url: HISTORY, iconName: 'history', testId: 'history' },
    ],
  },
  {
    name: 'Other',
    items: [{ text: 'Settings', url: SETTINGS, iconName: 'settings', testId: 'settings' }],
  },
];
const Sidebar = ({ user, signOut }: TSidebar) => {
  return (
    <>
      {!!user && (
        <SidebarWrapper>
          <SidebarHeader />
          <Tabs tabGroups={tabGroups} />
          {/* Subscription info */}
          <AccountDropdown user={user} signOut={signOut} />
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
