var expect = require('expect');

Feature('authorization');

Scenario.todo('user can authorize in the system', ({ I, mainPage }) => {
    I.amOnPage('/');
    mainPage.login('demo', 'demo');
    I.see('Hi demo!');
});

Scenario.todo('user can request password reset', ({ I, mainPage }) => {
    I.amOnPage('/');
    mainPage.resetPassword();
    I.see('Reset your password');
});

Scenario('api: user can request page content', async ({ I }) => {
    let response = await I.sendGetRequest('/posts');
    console.log(response.data);
    console.log(response.status);
    expect(response.data[1]).toMatchObject({id: 2});
});