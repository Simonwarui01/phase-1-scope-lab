// Write your solution in this file!

var customerName = 'bob';

// Function to uppercase customerName variable
function upperCaseCustomerName() {
  // Modify the global variable directly
  customerName = customerName.toUpperCase();
}

module.exports = {
  upperCaseCustomerName
};



function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  
  // Function to set bestCustomer variable
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  // Function to overwrite bestCustomer variable
  function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
  }
  
  // Function to attempt to change leastFavoriteCustomer variable (which should not be possible)
  function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'someone';
    leastFavoriteCustomer = 'someone else'; // This should throw an error
  }