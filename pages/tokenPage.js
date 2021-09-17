const { I } = inject();

module.exports = {
    links: {
        signOut: 'a.text-green-600[href="/logout"]',
        changePassword: 'a.text-green-600[href="/change_password"]',
    },

    buttons: {
        regenerate: 'input.bg-green-500[value="Regenerate Authentication Token"]',
    },

    blocks: {
        changePasswordMessage: '.border-green-400.text-green-700[role="alert"]',
        regenerateTokenMessage: '.border-green-400.text-green-700[role="alert"]',
    },
    
    token: '#user_auth_token',
    emailAddress: '#user_email_address',

    async getEmail() {
        const emailAddressParagraph = await I.grabTextFrom(this.emailAddress);
        const emailAddressText = emailAddressParagraph.trim().substring('Email Address: '.length);
        return emailAddressText;
    },

    async getToken() {
        const tokenParagraph = await I.grabTextFrom(this.token);
        const token = tokenParagraph.trim().substring('Authentication Token: '.length);
        return token;
    },
}