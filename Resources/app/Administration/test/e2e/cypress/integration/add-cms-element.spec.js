// / <reference types="Cypress" />
describe('PluginExtendsCms: there is a new cms element', () => {
    beforeEach(() => {
        cy.loginViaApi();
    });

    it('checks for a new cms element be there', () => {
        cy.visit('/admin#/sw/cms/index?limit=9&page=1&term&sortBy=createdAt&sortDirection=DESC&naturalSorting=false');

        cy.get('.sw-cms-list-item--0').click();

        cy.get('.sw-cms-block__config-overlay')
            .invoke('show')
            .should('be.visible')
            .click();

        cy.get('.sw-cms-block__config-overlay.is--active').should('be.visible');
        cy.get('.sw-cms-slot .sw-cms-slot__overlay').invoke('show');

        cy.get('.sw-cms-slot .icon--default-arrow-switch')
            .should('be.visible')
            .click();

        cy.get('.sw-cms-el-preview-dailymotion')
            .should('be.visible')
            .click();

        cy.get('.sw-cms-slot .sw-cms-slot__settings-action').click();

        cy.get('.swag-dailymotion-field input')
            .click()
            .type('https://dai.ly/x758uhx')
            .should('have.value', 'x758uhx');

        cy.contains('Done').click();

        cy.get('.sw-cms-el-dailymotion-iframe-wrapper').should('be.visible');

        cy.contains('Save').click();

        // Go to category settings
        cy.visit('/admin#/sw/category/index');

        cy.contains('Home').click();

        cy.get('.sw-category-detail-layout__change-layout-action').click();

        cy.get('.sw-modal__dialog')
            .should('be.visible')
            .within(() => {
                cy.get('.sw-cms-layout-modal__content-item--0 .sw-cms-list-item__image').click();

                cy.contains('Save').click();
            });

        cy.contains('Save').click();

        // Go to the storefront
        cy.visit('/');

        cy.get('.cms-element-dailymotion').should('be.visible');
    });
});
