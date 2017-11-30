'use strict';

const base = {
    baseURL:'http://oatest.jiedoor.com'
};

const Config = {
    api:{
        getUser() {
            return GEM.axios.get('/crm/api/user');
        },
        login(mobile, sms, openId) {
            return GEM.axios.post(`/crm/api/login`, {
                mobile: mobile,
                sms: sms,
                openId: openId,
            });
        },
    },
};

module.exports = Config;
