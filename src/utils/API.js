import axios from "axios";

export default {
  // Axios api call gets US address users until limit of 200
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
