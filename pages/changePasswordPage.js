const { I } = inject();

module.exports = {
    fields: {
        currPas: '#current_password',
        userPass: '#user_password',
        userPassConfirm: '#user_password_confirmation',
    },
    
    buttons: {
        changePass: 'input.bg-green-500',
    }, 

    changePassword(user) {
        I.fillField(this.fields.currPas, user.oldPassword);
        I.fillField(this.fields.userPass, user.password);
        I.fillField(this.fields.userPassConfirm, user.password);
        I.click(this.buttons.changePass);
    },
}