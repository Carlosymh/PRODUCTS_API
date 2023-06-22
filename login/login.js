const request = require('request');
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
let token ="";
let expirationDate="";
let user = process.env.user;
let pass = process.env.pass;
exports.login = async(req, res) =>{
   
    try {
        const  { username, password } = req.body;
        user = username;
        pass = password;
        let eDate = Date.parse( expirationDate);
        let toDay = Date.now();
        if( token !== "" && eDate > toDay){
                    

            return res.json({
                access_token:token,
                expires:expirationDate
            });
        }
        const options = {
        method: 'POST',
        url: process.env.hostname + '/Login',
        form: {username: user, password: pass, grant_type: 'password'}
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            
            const data = JSON.parse(body);

            if( !data.error){
                token = data.access_token;
                expirationDate=data[".expires"];
    
                return res.status(200).json(data);
            }
            return res.status(402).json({
                error: data.error,
                error_description: data.error_description
            });

        
        });

        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports.getToken = async()=>{ 
    let eDate = Date.parse( expirationDate);
    let toDay = Date.now();
    if( token !== "" && eDate > toDay){
        return (token);
    }
    const options = {
        method: 'POST',
        url: process.env.hostname + '/Login',
        form: {username: user, password: pass, grant_type: 'password'}
    };

    
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            
            const data = JSON.parse(body);

            if( !data.error){
                token = data.access_token;
                expirationDate=data[".expires"];
                return resolve(token);
            } 
            return reject(data);
            
        });
    });

};
module.exports.getExpirationDate=()=>{ return expirationDate};