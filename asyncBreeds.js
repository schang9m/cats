const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error){
      console.log("In readFile's Callback: it has the data.");
      callback(data);
    } else {
      callback(null);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};
// const breedDetails = (detail) => console.log("Return Detail: " + detail)
// // we try to get the return value
// breedDetailsFromFile("Bombay", breedDetails)


module.exports = breedDetailsFromFile;