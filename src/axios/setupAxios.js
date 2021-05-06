
export default function setupAxios(axios) {
  // axios.defaults.baseURL = "http://localhost:3000/api/";
  axios.interceptors.request.use(
    (config) => {
      if (!`${config.url}`.includes("http")) {
        // const {
        //   auth: { accessToken },
        // } = store.getState();
        // if (accessToken) {
        //   config.headers.Authorization = `Bearer ${accessToken}`;
        // }
        config.url = process.env.REACT_APP_BACKEND_API + config.url;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
}
