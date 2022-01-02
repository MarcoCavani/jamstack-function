const names = require('../../data/test.json')
exports.handler = async () =>{
    return{
        statusCode: 200,
        body: JSON.stringify(names)
    }
}
