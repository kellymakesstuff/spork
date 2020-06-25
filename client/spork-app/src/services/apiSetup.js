import axios from "axios"

let apiUrl

const apiUrls = {
  production: "https://spork-project3.herokuapp.com/api",
  // development: "https://spork-project3.herokuapp.com/api",
  development: "http://localhost:3001/api"
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}
const api = axios.create({
  baseURL: apiUrl,
})

export default api