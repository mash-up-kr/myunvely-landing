import React, { useEffect, useState, useCallback } from 'react';
import { Layout, Menu } from 'antd';
import Router from 'next/router';

const { Header, Content } = Layout;

import 'antd/dist/antd.css';
import styled from '@emotion/styled';

const AdminLayout = (props: React.HTMLProps<HTMLDivElement>) => {
	const { children } = props;
	const [activeKey, setActiveKey] = useState('/index');

	useEffect(() => {
		const { pathname } = window.location;
		setActiveKey(pathname.replace(/\/admin/, '') || '/index');
	}, []);

	const handleLink = useCallback(
		(path: string) => () => {
			Router.push(`/admin${path}`);
		},
		[],
	);

	return (
		<CustomLayout>
			<Header>
				<Menu theme="dark" mode="horizontal" selectedKeys={[activeKey]}>
					{Object.entries(categories).map(category => (
						<Menu.Item key={`/${category[0]}`} onClick={handleLink(`/${category[0]}`)}>
							{category[1]} 관리
						</Menu.Item>
					))}
				</Menu>
			</Header>
			<Content style={{ padding: '20px' }}>{children}</Content>
		</CustomLayout>
	);
};

export default AdminLayout;

const CustomLayout = styled(Layout)`
	height: 100%;
`;

const categories = {
	index: '회원',
	category: '카테고리',
	product: '제품',
	// faq: "FAQ",
};
