const fetch = require('node-fetch');
var query  = `
mutation creatuser {
  createUser(data:{name: "sava" sortie: {
    create:   [   {boatname: "perle" km: 10}
  ]
    
    
  }}){_id}
} `
 
var a =  `
query alluser {
  alluserlist{
    data {
      _id
      name
      
    }
  }
}


`

  var a =  fetch("https://graphql.fauna.com/graphql", {
  body: JSON.stringify({query: query}),
  headers: {
    Accept: "application/json",
    Authorization: "Basic Zm5BRWFrc0t0ZEFDVEZFMWhsUHNBMEJmSTR4WWRTYTZFS21xUHUxRzpUZXN0OmFkbWlu",
    "Content-Type": "application/json",
    Dnt: "1"
  },
  method: "POST"
}) .then(r => r.json())
  .then(data => console.log('data returned:', data));
