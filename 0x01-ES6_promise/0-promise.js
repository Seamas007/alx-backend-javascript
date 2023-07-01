function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // API request logic or asynchronous operation here
    // For example, using fetch to make an HTTP request
    fetch('https://api.example.com/data')
      .then(response => {
        // Check the response status and handle accordingly
        if (response.ok) {
          // Convert the response to JSON and resolve the Promise with the data
          resolve(response.json());
        } else {
          // Reject the Promise with an error if the request was not successful
          reject(new Error('API request failed'));
        }
      })
      .catch(error => {
        // Handle any other errors that occurred during the request
        reject(error);
      });
  });
}
