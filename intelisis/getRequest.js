const request = require('request');
const login = require("../login/login");
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

exports.requestIntelisis = async(url,bodyParams) =>{
  try {
    const Token =await login.getToken().then( token => token).catch(err => console.log(err));
    const options = {
        method: 'POST',
        url: process.env.hostname + url,
        headers: {
          Authorization: 'Bearer ' + Token
        },
        body: bodyParams,
        json: true
      };
      return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          return resolve(body);
        })
        
      })
    
    
  } catch (error) {
    console.log(error);
    
  }
}


