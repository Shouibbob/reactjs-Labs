import axios from "axios";

const Url = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Add a request interceptor
Url.interceptors.request.use(
  function (config) {
    config.params = {
      limit: 12,
    };
    console.log("SHOW LOADER");
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Url.interceptors.response.use(
  function (response) {
    console.log("HIDE LOADER");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default Url;
