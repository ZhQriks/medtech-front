import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./actionTypes";
import AuthService from "../../services/auth/auth.service";

export const setMessage = (message: any) => ({
  type: SET_MESSAGE,
  payload: message,
});
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const register =
  (
    uin: string,
    password: string,
    firstName: string,
    lastName: string,
    locationId: number,
    email: string,
    phoneNumber: string,
    clinicId: number,
    specializationTypeId: number
  ) =>
  (dispatch: any) => {
    return AuthService.register(
      uin,
      password,
      firstName,
      lastName,
      locationId,
      email,
      phoneNumber,
      clinicId,
      specializationTypeId
    ).then(
      (response: any) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error: any) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
export const login = (uin: string, password: string) => (dispatch: any) => {
  return AuthService.login(uin, password).then(
    (data: any) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error: any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        "Login failed";
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch: any) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
