/**
 * @copyright Copyright (c) 2021 Jakob Röhrl <jakob.roehrl@web.de>
 *
 * @author Jakob Röhrl <jakob.roehrl@web.de>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */


import { generateFilePath } from '@nextcloud/router'
import { getRequestToken } from '@nextcloud/auth'
import { translate, translatePlural } from '@nextcloud/l10n'

// eslint-disable-next-line
__webpack_nonce__ = btoa(getRequestToken())

// eslint-disable-next-line
__webpack_public_path__ = generateFilePath(appName, '', 'js/')


document.addEventListener('DOMContentLoaded', () => {
	OCA.Dashboard.register('activity', async (el) => {
		const { default: Vue } = await import(/* webpackChunkName: "dashboard-lazy" */'vue')
		const { default: Dashboard } = await import(/* webpackChunkName: "dashboard-lazy" */'./views/Dashboard.vue')

		Vue.prototype.t = translate
		Vue.prototype.n = translatePlural
		Vue.prototype.OC = OC
		Vue.prototype.OCA = OCA

		const View = Vue.extend(Dashboard)
		const vm = new View({
			propsData: {},
		}).$mount(el)
		return vm
	})
})
