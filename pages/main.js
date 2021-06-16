const { I } = inject();

module.exports = {
  fields: {
    password: '#password',
    username: '#username',
  },
  
  button: {
    login: '.is-primary',
    reset: '.reset-password-link',
  },

  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.button.login);
  },

  resetPassword() {
    I.click(this.button.reset);
  }

}