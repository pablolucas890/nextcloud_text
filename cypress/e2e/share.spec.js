
/**
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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

describe('Open test.md in viewer', function() {
	before(function() {
		// Init user
		cy.nextcloudCreateUser(randUser, 'password')
		cy.login(randUser, 'password')

		// Upload test files
		cy.createFolder('folder')
		cy.uploadFile('test.md', 'text/markdown', 'folder/test.md')
		cy.uploadFile('test.md', 'text/markdown', 'folder/Readme.md')
		cy.uploadFile('test.md', 'text/markdown', 'test2.md')
		cy.uploadFile('test.md', 'text/markdown')
		cy.visit('/apps/files')
		cy.get('.files-fileList tr[data-file="test.md"]')
			.should('contain', 'test.md')
	})
	beforeEach(function() {
		cy.login(randUser, 'password')
	})

	it('Shares the file as a public read only link', function() {
		cy.shareFile('/test.md')
			.then((token) => {
				cy.logout()
				cy.visit(`/s/${token}`)
			})
			.then(() => {
				cy.getEditor().should('be.visible')
				cy.getContent()
					.should('contain', 'Hello world')
					.find('h2').should('contain', 'Hello world')
			})
	})

	it('Shares the file as a public link with write permissions', function() {
		cy.shareFile('/test2.md', { edit: true })
			.then((token) => {
				cy.visit(`/s/${token}`)
			})
			.then(() => {
				cy.getEditor().should('be.visible')
				cy.getContent()
					.should('contain', 'Hello world')
					.find('h2').should('contain', 'Hello world')

				cy.getMenu().should('be.visible')
				cy.getActionEntry('undo').should('be.visible')
				cy.getActionEntry('redo').should('be.visible')
				cy.getActionEntry('bold').should('be.visible')
			})
	})

	it('Opens the editor as guest', function() {
		cy.shareFile('/test2.md', { edit: true })
			.then((token) => {
				cy.logout()
				cy.visit(`/s/${token}`)
			})
			.then(() => {
				cy.getEditor().should('be.visible')
				cy.getContent()
					.should('contain', 'Hello world')
					.find('h2').should('contain', 'Hello world')

				cy.getMenu().should('be.visible')
				cy.getActionEntry('undo').should('be.visible')
				cy.getActionEntry('redo').should('be.visible')
				cy.getActionEntry('bold').should('be.visible')
			})
	})

	it('Shares a folder as a public read only link', function() {
		cy.shareFile('/folder')
			.then((token) => {
				cy.logout()

				return cy.visit(`/s/${token}`)
			})
			.then(() => {
				cy.get('#rich-workspace').getContent().should('contain', 'Hello world')
				cy.openFile('test.md')
				cy.getModal().getContent().should('be.visible')
				cy.getModal().getContent().should('contain', 'Hello world')
				cy.getModal().getContent().find('h2').should('contain', 'Hello world')
				cy.getModal().find('.modal-header button.header-close').click()
				cy.get('.modal-mask').should('not.exist')
			})
	})

})
