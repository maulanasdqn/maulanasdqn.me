import { GITHUB_USERNAME } from "@util/Constant";
import ApiService from "../Api";

ApiService.init(import.meta.env.PUBLIC_GITHUB_URL);

const ProjectsService = {
  get: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: `/users/${GITHUB_USERNAME}/repos`,
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default ProjectsService;
