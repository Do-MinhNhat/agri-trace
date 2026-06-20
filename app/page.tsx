'use client';

import { useState } from 'react';
import { ProLayout, PageContainer, DefaultFooter } from '@ant-design/pro-layout';
import { Button, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const BasicLayout = () => {
  const [pathname, setPathname] = useState('/welcome');

  // Cấu hình menu (Thường sẽ được truyền từ router)
  const menuData = [
    {
      path: '/welcome',
      name: 'Welcome',
      icon: <SmileOutlined />,
    },
  ];

  return (
    <div style={{ height: '100vh' }}>
      <ProLayout
        title="Ant Design Pro"
        logo="https://alipayobjects.com"
        location={{ pathname }}
        route={{
          path: '/',
          routes: menuData,
        }}
        menuItemRender={(item, dom) => (
          <a onClick={() => setPathname(item.path ?? '/')}>{dom}</a>
        )}
        // Tùy chỉnh Footer
        footerRender={() => (
          <DefaultFooter
            copyright="2026 Ant Design Pro"
            links={[
              {
                key: 'Ant Design',
                title: 'Ant Design',
                href: 'https://ant.design',
                blankTarget: true,
              },
            ]}
          />
        )}
      >
        {/* Vùng chứa nội dung chính, tự động căn chỉnh và có breadcrumb */}
        <PageContainer
          header={{
            title: 'Tiêu đề trang',
          }}
        >
          <div style={{ minHeight: '600px', backgroundColor: '#fff', padding: 24 }}>
            <Result
              icon={<SmileOutlined />}
              title="Chào mừng bạn đến với ProLayout!"
              extra={<Button type="primary">Hành động</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default BasicLayout;