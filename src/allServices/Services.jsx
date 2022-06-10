import http from "../http-common"
const get = id => {
    return http.get(`/Registration/${id}`);
  };

  const Service = {
   // getAll,
    get
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle
  };
  export default Service;