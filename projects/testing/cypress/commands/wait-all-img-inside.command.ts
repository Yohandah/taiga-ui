/// <reference types="cypress" />

export const tuiWaitAllImgInside = (
    prevSubject: JQuery | Document | Window | void,
    enabled: boolean = true,
): Cypress.Chainable<JQuery | Document | Window> => {
    const target =
        prevSubject && Cypress.dom.isJquery(prevSubject)
            ? cy.wrap(prevSubject, {log: false})
            : cy.get(`body`, {log: false});

    target.then($target => {
        const img = $target.find(`img`);

        if (img.length && enabled) {
            const log = Cypress.log({
                displayName: `Wait all images`,
                message: `naturalWidth greaterThan 0`,
                name: `tuiWaitAllImgInside`,
                autoEnd: false,
                consoleProps: () => ({
                    prevSubject,
                    img: img,
                }),
            });

            cy.wrap($target, {log: false})
                .get(`img`, {log: false})
                .each((img: JQuery<HTMLImageElement>) => {
                    const url = img[0]?.src || img[0]?.srcset;

                    if (url)
                        cy.request({url: url, failOnStatusCode: false, log: false}).then(
                            resp => {
                                if (resp.status === 200) {
                                    cy.get(img as any, {log: false}).should(
                                        (el: JQuery<HTMLImageElement>) =>
                                            (expect as any)(
                                                el[0].naturalWidth,
                                            ).to.be.greaterThan(0),
                                    );
                                }
                            },
                        );
                })
                .then(() => log.end());
        }
    });

    return target;
};
