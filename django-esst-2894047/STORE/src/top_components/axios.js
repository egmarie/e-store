const axios = require('axios').default;

export const getProducts = async () => {
    await axios.get('http://localhost:8000/smart/notes/api', {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
