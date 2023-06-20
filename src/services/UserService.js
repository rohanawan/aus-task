import axios from "../interceptors";

const url = "/users";

const UserService = {};

UserService.signup = async (data) => axios.post(`${url}/register`, data);
UserService.login = async (data) => axios.post(`${url}/login`, data);


UserService.get = async () => axios.get(`${url}`);

export default UserService;
