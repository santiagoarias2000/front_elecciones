import ApiBack from "../utilities/domains/ApiBack";

class LoginService {
  public static async consumeService(miObj: any) {
    const information = {
      method: "POST",
      body: JSON.stringify(miObj),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    };
    const URL = ApiBack.URL + ApiBack.LOGIN;
    const resultApi = fetch(URL, information)
      .then((reciveInfo) => reciveInfo.json())
      .then((miInfo) => {
        return miInfo;
      })
      .catch((miError) => {
        return miError;
      });
    return resultApi;
  }
}
export default LoginService;
