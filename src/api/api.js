import axios from "axios";

const baseURLive = "https://issue-tracker-h3erk.ondigitalocean.app/api/v1";

export default axios.create({
    baseURL: baseURLive,
});
