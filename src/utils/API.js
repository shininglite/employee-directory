import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=US"

// Export an object with a "search" method that searches the RandomUser API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
