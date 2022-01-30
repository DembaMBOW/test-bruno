import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';


const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="platform" onClick={toggle}>Platform</SidebarLink>
            <SidebarLink to="coverage" onClick={toggle}>Coverage</SidebarLink>
            <SidebarLink to="usercases" onClick={toggle}>User Cases</SidebarLink>
            <SidebarLink to="apidocs" onClick={toggle}>Api Docs</SidebarLink>
            <SidebarLink to="blog" onClick={toggle}>Blog</SidebarLink>
          </SidebarMenu>
        
        </SidebarWrapper>
    </SidebarContainer>
  );
};

// export default SidebarElement;
export default Sidebar;
