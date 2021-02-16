import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function NoteItems(props) {
	return (
		<Menu
			mode="inline"
			theme="dark"
			defaultOpenKeys={['alg']}
			defaultSelectedKeys={['Algoritmi-1']}
		>
			{props.a_items.length ? (
				<SubMenu key="alg" title="Algoritmi">
					{props.a_items}
				</SubMenu>
			) : (
				<div />
			)}

			{props.s_items.length ? (
				<SubMenu key="stat" title="Statistica">
					{props.s_items}
				</SubMenu>
			) : (
				<div />
			)}

			{props.r_items.length ? (
				<SubMenu key="reti" title="Reti">
					{props.r_items}
				</SubMenu>
			) : (
				<div />
			)}

			{props.w_items.length ? (
				<SubMenu key="web" title="Web">
					{props.w_items}
				</SubMenu>
			) : (
				<div />
			)}
		</Menu>
	);
}
