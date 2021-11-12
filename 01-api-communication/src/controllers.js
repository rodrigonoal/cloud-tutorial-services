const axios = require("axios");

const baseUrl = "https://cloud-tutorial-pal.herokuapp.com/users";

const getEmails = (req, res) => {
  console.log("Get request received.");

  axios
    .get(baseUrl)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      const { status, data } = error.response;
      res.status(status).send(data);
    });
};

const postEmail = (req, res) => {
  console.log("Post request received.");

  const { input } = req.body;

  axios
    .post(baseUrl, {
      email: input,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      const { status, data } = error.response;
      res.status(status).send(data);
    });
};

module.exports = {
  getEmails,
  postEmail,
};
