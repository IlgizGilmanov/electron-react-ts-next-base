import { ASSISTANT, HISTORY, SETTINGS } from 'config/routes';

import Tabs, { TTabItem } from './Tabs';
import { SidebarWrapper } from './styled';
import { TSidebar } from './types';

const tabs: TTabItem[] = [
  { text: 'Assistant', url: ASSISTANT, iconName: 'activity', testId: 'assistant' },
  { text: 'History', url: HISTORY, iconName: 'history', testId: 'history' },
  { text: 'Settings', url: SETTINGS, iconName: 'settings', testId: 'settings' },
];

const Sidebar = ({ user }: TSidebar) => {
  return (
    <>
      {!!user && (
        <SidebarWrapper>
          <Tabs tabs={tabs} />
          {/* Subscription info */}
          User account dropdown
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
