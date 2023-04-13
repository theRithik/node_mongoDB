var axios = require('axios');
var data = JSON.stringify({
    "collection": "orders",
    "database": "test",
    "dataSource": "Cluster1",
    // "projection": {
    //     "_id": 1
    // }
});
            
var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-lxuff/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'FzRbZ9GeAPLk37iDIip9LqF3Q9Y9lB8JuLuFZOWpVODnGJtfkqDzZKXZbrEMTjEb',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
