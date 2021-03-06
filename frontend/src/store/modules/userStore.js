import { getNaverToken, getNaverUser, getKakaoToken, getKakaoUser } from "@/api/user.js";

const userStore = {
  namespaced: true,
  state: {
    userInfo: {
      userId: 0,
      nickName: "",
      userImage: "",
    },
    isLogin: false,
  },

  getters: {
    userInfo({ userInfo }) {
      return userInfo;
    },
    isLogin({ isLogin }) {
      return isLogin;
    },
  },

  mutations: {
    SET_USER_INFO: (state, data) => {
      state.userInfo.userId = data.id;
      state.userInfo.nickName = data.nickName;
      state.userInfo.userImage = data.userImage;
    },

    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    LOGOUT: (state) => {
      state.userInfo.userId = 0;
      state.userInfo.userImage = "";
      state.userInfo.nickName = "";
    },
    SET_NICKNAME: (state, nickName) => {
      state.userInfo.nickName = nickName;
    },
  },

  actions: {
    setNickName({ commit }, nickName) {
      commit("SET_NICKNAME", nickName);
    },

    async findNaverToken({ commit }, code, state) {
      let token = null;
      await getNaverToken(
        code,
        state,
        (response) => {
          if (response.data.statusCode == 200) {
            token = response.data.data;
          }
        },
        (error) => {
          console.log(error);
        }
      );
      return token;
    },

    async findNaverUser({ commit }, naverToken) {
      await getNaverUser(
        naverToken,
        (response) => {
          if (response.data.statusCode == 201) {
            commit("SET_USER_INFO", response.data.data);
            commit("SET_IS_LOGIN", true);

            sessionStorage.setItem("access-token", response.data.data.accessToken);
          }
        },
        (error) => {
          commit("SET_IS_LOGIN", false);
          console.log(error);
        }
      );
    },

    async findKakaoToken({ commit }, code) {
      let token = null;
      await getKakaoToken(
        code,
        (response) => {
          if (response.data.statusCode == 200) {
            token = response.data.data;
          }
        },
        (error) => {}
      );
      return token;
    },

    async findKakaoUser({ commit }, kakaoToken) {
      await getKakaoUser(
        kakaoToken,
        (response) => {
          if (response.data.statusCode == 201) {
            commit("SET_USER_INFO", response.data.data);
            commit("SET_IS_LOGIN", true);
            sessionStorage.setItem("access-token", response.data.data.accessToken);
          }
        },
        (error) => {
          console.log(error.response);

          commit("SET_IS_LOGIN", false);
        }
      );
    },

    logout({ commit }) {
      sessionStorage.removeItem("access-token");
      commit("SET_IS_LOGIN", false);
      commit("LOGOUT");
    },
  },
};

export default userStore;
