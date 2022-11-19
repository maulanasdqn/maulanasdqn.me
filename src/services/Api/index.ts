import axios from "axios";

const ApiService = {
  init(baseURL: string) {
    axios.defaults.baseURL = baseURL;
  },

  customRequest(data: object) {
    return axios(data);
  },
};

export default ApiService;
