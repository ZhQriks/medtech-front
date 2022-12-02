import axios from "axios";
import { APP_BACKEND_URL } from "../../constants/constants";
class AuthService {
  login(username: string, password: string) {
    return axios
      .post(APP_BACKEND_URL + "/auth/client", { username, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(email: string, roleId: number, password: string, confirm: string) {
    return axios.post(APP_BACKEND_URL + "/auth/register", {
      email,
      roleId,
      password,
      confirm,
    });
  }
}
export default new AuthService();
