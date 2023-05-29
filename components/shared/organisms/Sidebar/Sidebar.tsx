import { ASSISTANT, HISTORY, SETTINGS } from 'config/routes';

import Tabs, { TTabItem } from './Tabs';
import AccountDropdown from './AccountDropdown';
import SidebarHeader from './SidebarHeader';
import { SidebarWrapper } from './styled';
import { TSidebar } from './types';

const tabs: TTabItem[] = [
  { text: 'Assistant', url: ASSISTANT, iconName: 'activity', testId: 'assistant' },
  { text: 'History', url: HISTORY, iconName: 'history', testId: 'history' },
  { text: 'Settings', url: SETTINGS, iconName: 'settings', testId: 'settings' },
];

const Sidebar = ({ user, signOut }: TSidebar) => {
  return (
    <>
      {!!user && (
        <SidebarWrapper>
          <SidebarHeader />
          <Tabs tabs={tabs} />
          {/* Subscription info */}
          <AccountDropdown user={user} signOut={signOut} />
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
