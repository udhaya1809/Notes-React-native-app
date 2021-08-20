import React from 'react';
import RNFetchBlob from 'react-native-fetch-blob';

const fs = require('fs')
let data = 'it is worked'

fs.writeFile('Output.txt', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})