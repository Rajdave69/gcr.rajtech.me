// get the ? parameter from the url

const queryString = window.location.search;

// we use the URLSearchParams API to get the value of the ? parameter.
const urlParams = new URLSearchParams(queryString);

// we use the .get() method to get the value of the ? parameter
const id = urlParams.get("");