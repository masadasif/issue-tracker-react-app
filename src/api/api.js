import axios from "axios";

const baseURL_local = "http://192.168.0.33:3000/api/v1";
const baseURL_live = "https://issue-tracker-h3erk.ondigitalocean.app/api/v1";

export default axios.create({
    baseURL: baseURL_live,
});
