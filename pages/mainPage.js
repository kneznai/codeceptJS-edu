const { I } = inject();

module.exports = {
    fields: {
      email: '#user_email',
      password: '#user_password',
    },

    links: {
      login: '[href="/login"]',
      generate: '[href="/tokens"]',
    },

    blocks: {
      signOutMessage:  '.border-green-400.text-green-700',
    },

    buttons: {
      login: 'input.bg-green-600',
      generate: 'input.bg-green-500',
    },

    login(user) {
      I.click(this.links.login);
      I.fillField(this.fields.email, user.email);
      I.fillField(this.fields.password, user.password);
      I.click(this.buttons.login);
    },

    generate(user) {
      I.click(this.links.generate);
      I.fillField(this.fields.email, user.email);
      I.fillField(this.fields.password, user.password);
      I.click(this.buttons.generate);
    },
}