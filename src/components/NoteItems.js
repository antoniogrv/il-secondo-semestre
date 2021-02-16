import React from 'react';
import { Menu } from 'antd';
import {
	LineChartOutlined,
	UsbOutlined,
	ShareAltOutlined,
	FunctionOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default function NoteItems(props) {
	return (
		<Menu
			mode="inline"
			theme="dark"
			defaultOpenKeys={['alg']}
			defaultSelectedKeys={['A-1']}
		>
			{props.a_items.length ? (
				<SubMenu
					icon={<FunctionOutlined style={{ fontSize: 15 }} />}
					key="alg"
					title="Algoritmi"
				>
					{props.a_items}
				</SubMenu>
			) : (
				<div />
			)}

			{props.s_items.length ? (
				<SubMenu
					icon={<LineChartOutlined style={{ fontSize: 15 }} />}
					key="stat"
					title="Statistica"
				>
					{props.s_items}
				</SubMenu>
			) : (
				<div />
			)}

			{props.r_items.length ? (
				<SubMenu
					icon={<UsbOutlined style={{ fontSize: 15 }} />}
					key="reti"
					title="Reti"
				>
					{props.r_items}
				</SubMenu>
			) : (
				<div />
			)}

			{props.w_items.length ? (
				<SubMenu
					icon={<ShareAltOutlined style={{ fontSize: 15 }} />}
					key="web"
					title="Web"
				>
					{props.w_items}
				</SubMenu>
			) : (
				<div />
			)}
		</Menu>
	);
}
