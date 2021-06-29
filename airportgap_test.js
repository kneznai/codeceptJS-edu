let PersonBuilder = require('./framework/builder/newUser');

let user;
let token;

const urls = {
    main: '/',
    newToken: '/tokens/new',
    login: '/login',
    tokens: '/tokens',
    changePassword: '/change_password'
};

Feature('airportgap scenarios');

BeforeSuite(() => {
    const builder = new PersonBuilder().addEmail().addPassword();
    user = builder.generate();
});

Scenario('generate token', async ({ I, mainPage, tokenPage }) => {
    I.amOnPage(urls.main);
    mainPage.generate(user);

    I.assertEqual(user.email, await tokenPage.getEmail());

    token = await tokenPage.getToken();
    I.assertOk(token.length > 0); // verify that token is not empty
});

Scenario('sign in', async ({ I, mainPage, tokenPage }) => {
    I.amOnPage(urls.main);
    mainPage.login(user);

    I.assertEqual(user.email, await tokenPage.getEmail());
    I.assertEqual(token, await tokenPage.getToken());
});

Scenario('sign out', async ({ I, mainPage, tokenPage }) => {

    I.amOnPage(urls.main);
    mainPage.login(user);

    I.click(tokenPage.links.signOut);

    I.seeTextEquals('You have been logged out of Airport Gap.', mainPage.blocks.signOutMessage);

    I.amOnPage(urls.tokens);
    I.seeInCurrentUrl(urls.newToken);
});

Scenario('change password', async ({ I, mainPage, tokenPage, changePasswordPage }) => {

    I.amOnPage(urls.main);
    mainPage.login(user);

    // click change password link
    I.click(tokenPage.links.changePassword);

    I.seeInCurrentUrl(urls.changePassword);

    user.oldPassword = user.password;
    const builder = new PersonBuilder().addPassword();
    user.password = builder.generate().password;

    changePasswordPage.changePassword(user);

    I.seeInCurrentUrl(urls.tokens);
    I.seeTextEquals('Your password has been changed!', tokenPage.blocks.changePasswordMessage);
});

Scenario('regenerate token', async ({ I, mainPage, tokenPage }) => {
    I.amOnPage(urls.main);
    mainPage.login(user);

    // click regenerate token button
    I.click(tokenPage.buttons.regenerate);

    I.seeInCurrentUrl(urls.tokens);
    I.seeTextEquals('Your authentication token has been regenerated!', tokenPage.blocks.regenerateTokenMessage);
    
    const tokenText = await tokenPage.getToken();
    // check that new token <> old token
    I.assertNotEqual(tokenText, token);
});
