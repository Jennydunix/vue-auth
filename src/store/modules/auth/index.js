import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
          token: '' ,
          email: '',
          userId: '',
          refreshToken: '',
          expiresIn: '',
          autoLogout: false,
        };
    },
    mutations,
    getters,
    actions,
};