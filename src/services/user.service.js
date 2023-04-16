import http from "./services";
import { AUTH_TOKEN } from "../utils/constants";
import jwt_decode from "jwt-decode";

const UserService = {
  signUp(data) {
    return http.post("/api/collections/users/records", data);
  },
  signIn(data) {
    return http.post("/api/collections/users/auth-with-password", data);
  },
  signOut() {
    localStorage.setItem(AUTH_TOKEN, "");
    return http.post("/v1/auth/logout", null);
  },
  isAuthenticated() {
    let authToken = localStorage.getItem(AUTH_TOKEN);
    if (authToken) {
      const data = jwt_decode(authToken);
      return data.exp * 1000 > new Date().getTime();
    }
    return false;
  },
  getUserInfo() {
    let userId = null;
    let authToken = localStorage.getItem(AUTH_TOKEN);
    if (authToken) {
      const data = jwt_decode(authToken);
      userId = data.id;
    }
    if (userId) {
      return http.get(`/api/collections/users/records/${userId}`);
    }
    return Promise.reject(null);
  },
  listAuth() {
    return http.get("/api/collections/users/auth-methods");
  },
  authWithOauth2(data) {
    return http.post("/api/collections/users/auth-with-oauth2", data);
  },
};

export default UserService;
