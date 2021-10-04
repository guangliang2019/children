import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import '../layouts/index.less';
import Icon from '@ant-design/icons';
import menu from './menu';
import React from 'react';
import routeContext from '@ant-design/pro-layout/lib/RouteContext';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const logoSvg = () => (
  <svg viewBox="0 0 1024 1024" width="16" height="16">
    <path
      d="M728 112.002c-136.69 0-247.516 110.826-247.516 247.516v21.906c-45.351-51.364-111.731-83.784-185.638-83.784H78.27v92.82c0 136.691 110.826 247.516 247.516 247.516h154.698v278.458h61.877V452.336h154.7c136.689 0 247.515-110.823 247.515-247.514v-92.82H728zM325.786 576.097c-102.37 0-185.64-83.271-185.64-185.637v-30.941h154.701c53.24 0 103.967 22.902 139.257 62.845l21 23.81 11.907 29.372c8.94 22.118 13.474 45.534 13.474 69.611v30.941H325.786z m556.915-371.275c0 102.367-83.271 185.638-185.64 185.638h-154.7v-30.942c0-102.364 83.271-185.635 185.639-185.635h154.701v30.939z"
      p-id="1071"
      fill="#ffffff"
    ></path>
  </svg>
);
const LogoIcon = (props: any) => <Icon component={logoSvg} {...props} />;

export interface LayoutProps {
  data: {};
}
const Layouts: React.FC<LayoutProps> = (props) => {
  const [openKeys, setOpenKeys] = React.useState(['1']);
  const rootKeys = [''];
  function content(obj: string | any[]) {
    let res = [];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].children) {
        res.push(
          <SubMenu
            key={obj[i].id}
            icon={<UploadOutlined />}
            title={obj[i].name}
          >
            {content(obj[i].children)}
          </SubMenu>,
        );
        rootKeys.push(obj[i].id);
      } else {
        res.push(<Menu.Item key={obj[i].id}>{obj[i].name}</Menu.Item>);
      }
    }
    return res;
  }

  const onOpenChange = function (keys: any) {
    const lastedKey = keys.find((key: any) => {
      return openKeys.indexOf(key) === -1;
    });
    setOpenKeys(lastedKey ? [lastedKey] : []);
  };

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" className="sider">
        <div className="logo">
          <LogoIcon
            style={{
              marginLeft: '8px',
            }}
          />
          <span
            style={{
              marginLeft: '8px',
              color: '#FFF',
              minWidth: '180px',
            }}
          >
            幼儿园综合管理系统
          </span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          {content(menu)}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
