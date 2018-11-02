environment = process.env.NODE_ENV
server = {}
if(environment === 'dev'){
    server = {
        host: 'localhost:3000',
        apiEndPoint: '/api/v1'
    }
}

if(environment === 'prod'){
    server = {
        host: 'agiler.blr.stackroute.in',
        apiEndPoint: '/collabration-service'
    }
}

module.exports = server