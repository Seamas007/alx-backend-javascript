// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve) => {
    // API request logic or asynchronous operation here
    // For example, using setTimeout to simulate an asynchronous operation
    setTimeout(() => {
      resolve("API response");
    }, 2000);
  });
}

export default getResponseFromAPI;
