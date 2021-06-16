const { I } = inject();

module.exports = {
  // fields: {
  //   password: '#password',
  //   username: '#username',
  // },
  
  button: {
    reset: '.button.is-primary',
    login: '.button.is-outlined',
  },

  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.button.login);
  }

}