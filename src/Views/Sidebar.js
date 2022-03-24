import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import Link from "next/link";
import { navMenu } from "../data/index";

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      style={{ height: "100vh" }}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          'sidebarTitle'
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">'new'</span>}
          >
            'dashboard'
          </MenuItem>
          <MenuItem icon={<FaGem />}> 'components'</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          {navMenu.map((item) => (
            <Link href={`/${item.slug}`}>
              <SubMenu
                key={item.id}
                suffix={<span className="badge yellow">3</span>}
                title={item.name}
                icon={<FaRegLaughWink />}
              >
                {item.subMenu.map((sitem) => (
                  <Link href={`/${sitem.slug}`}>
                    <MenuItem key={sitem.id}>{sitem.name}</MenuItem>
                  </Link>
                ))}
              </SubMenu>
            </Link>
          ))}
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> 'viewSource'</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
