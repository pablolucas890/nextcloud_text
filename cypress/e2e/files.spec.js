/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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

import { randHash } from '../utils/index.js'

const randUser = randHash()

describe('Files default view', () => {
	before(() => {
		cy.nextcloudCreateUser(randUser, randUser)
	})

	beforeEach(() => {
		cy.login(randUser, randUser)
	})

	it('See the default files list', () => {
		cy.get('#app-content-files table tr').should('contain', 'welcome.txt')
	})

	it('Take screenshot', () => {
		cy.screenshot()
	})
})
