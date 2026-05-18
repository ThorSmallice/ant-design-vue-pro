import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

export const en = defineConfig({
	lang: 'en-US',
	description: '由 Vite 和 Vue 驱动的静态站点生成器',
	themeConfig: {
		nav: nav(),

		sidebar: {
			'/en/documents/': {
				base: '/en/documents/',
				items: sidebarDocuments(),
			},

			'/en/components/': {
				base: '/en/components/',
				items: sidebarComponents(),
			},
			'/en/help/': {
				base: '/en/help/',
				items: sidebarHelp(),
			},
		},

		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
			text: '在 GitHub 上编辑此页面',
		},

		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © 2019-${new Date().getFullYear()} DB-Thor`,
		},
	},
})

function nav(): DefaultTheme.NavItem[] {
	return [
		{ text: 'documents', link: '/en/documents/quickstart', activeMatch: '/en/documents' },
		{ text: 'components', link: '/en/components/table', activeMatch: '/en/components' },
		{
			text: pkg.version,
			items: [
				{
					text: '更新日志',
					link: '/help/update-log',
					activeMatch: '/help',
				},
			],
		},
	]
}

function sidebarDocuments(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'profile',
			collapsed: true,
			items: [
				{
					text: 'quickstart',
					link: 'quickstart',
				},
				{
					text: 'globalconfig',
					link: 'globalconfig',
				},
			],
		},
	]
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'data display',
			items: [
				{
					text: 'Table',
					link: 'table',
				},
				{
					text: 'Modal',
					link: 'modal',
				},
			],
		},
	]
}
function sidebarHelp(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '更新日志',
			link: 'update-log',
		},
	]
}
