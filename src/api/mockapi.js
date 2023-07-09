import axios from "axios";
const BASE_URL = "https://api.data.gov.sg/v1/environment";
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI;
