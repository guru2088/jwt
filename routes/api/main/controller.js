const jwt = require('jsonwebtoken')

/*
    POST /token
    {
        username,
        password
    }
*/

exports.token = (req, res) => {
    const { username, password } = req.body
    if(!username){
      res.status(503).json({ message: 'username cannot be empty' })
    }
    else if(!password){
      res.status(503).json({ message: 'password cannot be empty' })

    }
    else if (username === "admin" && password === "admin"){
        var token = jwt.sign({ username: username,  password: password}, req.app.get('jwt-secret'),{ expiresIn: '1h' });
        res.status(200).json({ message: 'token generated successfully' ,token: token, expiresIn:'1h'})

    }
    else{
        res.status(503).json({ message: 'invalid credentials' })

    }
}

/*
    GET /about
    {
        token
    }
*/

exports.about = (req, res) => {
    const authHeader = String(req.headers['authorization'] || '');
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7, authHeader.length);
      jwt.verify(token, req.app.get('jwt-secret'), function(err, decoded) {
        if(err){
          res.status(401).json({err})
        }
        else{
          res.send("Hello World")
        }
      });
    }
}
