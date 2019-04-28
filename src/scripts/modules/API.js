module.exports.API = {
  fetchLocalJson: function (endpoint) {
    return fetch(`http://localhost:8088/${endpoint}`)
        .then(response => response.json());
  }
};
