import axios from "axios";
import { APP_BACKEND_URL } from "../../constants/constants";
class AuthService {
  login(uin: string, password: string) {
    return axios
      .post(APP_BACKEND_URL + "/doctors/login", { uin, password })
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
  register(
    uin: string,
    password: string,
    firstName: string,
    lastName: string,
    locationId: number,
    email: string,
    phoneNumber: string,
    clinicId: number,
    specializationTypeId: number
  ) {
    return axios.post(APP_BACKEND_URL + "/doctors/register", {
      uin,
      password,
      firstName,
      lastName,
      locationId,
      email,
      phoneNumber,
      clinicId,
      specializationTypeId,
    });
  }
}
export default new AuthService();
