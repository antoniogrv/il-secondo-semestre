import React, { useState, useEffect } from 'react';
import '../sass/main.sass';
import { CaretRightOutlined } from '@ant-design/icons';
import { Layout, Menu, Spin } from 'antd';
import NoteRouter from '../components/NoteRouter';
import NoteItems from '../components/NoteItems';

const { Content, Header, Sider, Footer } = Layout;

export default function ContentContainer() {
	const [notes, setNotes] = useState({});

	const [collapsed, setCollapsed] = useState(false);

	const [selectedSubjectName, setSelectedSubjectName] = useState('A');
	const [selectedSubjectId, setSelectedSubjectId] = useState(1);

	const [a_items, a_setItems] = useState([]); // Algoritmi
	const [s_items, s_setItems] = useState([]); // Statistica
	const [r_items, r_setItems] = useState([]); // Reti
	const [w_items, w_setItems] = useState([]); // Web

	const itemsProps = {
		a_items: a_items,
		s_items: s_items,
		r_items: r_items,
		w_items: w_items,
	};

	useEffect(() => {
		const fetchNotes = async () => {
			var fixedNotes = [];

			const response = await fetch('/il-secondo-semestre/');

			const parser = document.createElement('html');
			parser.innerHTML = await response.text();
			const scraped = parser.getElementsByTagName('Note');

			for (let i = 0; i < scraped.length; i++) {
				let str = scraped[i].outerText;

				let id = str.split('-')[1].split('.')[0];
				let subject = str.split('-')[0];

				fixedNotes[i] = {
					id: id,
					subject: subject,
				};
			}

			setNotes(fixedNotes);

			fetchSiderItems(fixedNotes);
		};

		async function fetchSiderItems(notes) {
			function getTemplate(id, subject) {
				const link =
					'/il-secondo-semestre/#/notes/' +
					String(subject) +
					'/' +
					String(id);
				const key = String(subject)[0] + '-' + String(id);

				return (
					<Menu.Item
						icon={<CaretRightOutlined />}
						key={key}
						onClick={onClick}
					>
						<a href={link}># Argomento {id}</a>
					</Menu.Item>
				);
			}

			var a_fixedItems = [],
				s_fixedItems = [],
				r_fixedItems = [],
				w_fixedItems = [];

			for (let i = 0; i < notes.length; i++) {
				switch (notes[i].subject) {
					case 'Reti':
						r_fixedItems[r_fixedItems.length] = getTemplate(
							notes[i].id,
							'Reti'
						);
						break;

					case 'Algoritmi':
						a_fixedItems[a_fixedItems.length] = getTemplate(
							notes[i].id,
							'Algoritmi'
						);
						break;

					case 'Statistica':
						s_fixedItems[s_fixedItems.length] = getTemplate(
							notes[i].id,
							'Statistica'
						);
						break;

					case 'Web':
						w_fixedItems[w_fixedItems.length] = getTemplate(
							notes[i].id,
							'Web'
						);
						break;
				}
			}

			a_setItems(a_fixedItems);
			r_setItems(r_fixedItems);
			s_setItems(s_fixedItems);
			w_setItems(w_fixedItems);
		}

		fetchNotes();
	}, []);

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed ? true : false);
	};

	const onClick = ({ item, key, keyPath, domEvenet }) => {
		setSelectedSubjectName(key.split('-')[0]);
		setSelectedSubjectId(key.split('-')[1]);
	};

	return (
		<Layout className="content-layout" hasSider>
			<Sider
				theme="dark"
				className="content-sider"
				width={300}
				collapsible
				collapsed={collapsed}
				onCollapse={onCollapse}
			>
				<NoteItems {...itemsProps} />
			</Sider>

			<Layout>
				<Header className="content-header">
					<div>
						<div
							className="header-subject"
							style={{ float: 'left' }}
						>
							<span className="subject-name">
								{selectedSubjectName}
							</span>
							<span className="subject-id">
								#{selectedSubjectId}
							</span>
						</div>
						<div
							className="header-title"
							style={{ float: 'right' }}
						>
							<a href="/il-secondo-semestre/#/">
								il-secondo-semestre
							</a>
						</div>
					</div>
				</Header>

				<Content className="content-area">
					<div className="raw">
						{notes.length ? (
							<NoteRouter notes={notes} />
						) : (
							<div className="loader">
								<Spin size="large" />
							</div>
						)}
					</div>
				</Content>

				<Footer className="content-footer">
					<div style={{ float: 'right' }}>
						<a
							target="_blank"
							href="https://github.com/v1enna/il-secondo-semestre"
						>
							v1enna @ GitHub
						</a>
					</div>
				</Footer>
			</Layout>
		</Layout>
	);
}
