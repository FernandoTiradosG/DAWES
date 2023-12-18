export function headersController(req, res) {
    const { token } = req.headers;
  
    if (!token) {
      return res.status(401).send({
        code: 401,
        error: 'Unauthorized',
        message: 'Error: Set a token to login',
      });
    }
  
    console.log('Token:', token);
  
    res.status(200).send(token);
  }
  
export function queryController(req, res) {
    const n = req.query.n || 100;
    const number = parseInt(n);

    let output = '';
    for (let i = 1; i <= number; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz';
        } else if (i % 3 === 0) {
            output += 'Fizz';
        } else if (i % 5 === 0) {
            output += 'Buzz';
        } else {
            output += i.toString();
        }

        if (i !== number) {
            output += ', ';
        }
    }

  res.send(`Resultado del FizzBuzz hasta ${number}: \n${output}`);
  }
  
  export function paramsController(req, res) {
    const { name } = req.params;
    res.status(200).send(`Hello ${name}`);
  }
  
  export function greetingsController(req, res) {
    res.send(`Hello ${req.params.name}`);
  }
  
  export function bodyController(req, res) {
    res.send(req.body);
  }
  
  export function dogController(req, res) {
    res.send({ grow: 'guau guau' });
  }
  
  export function catController(req, res) {
    res.send({ grow: 'miau' });
  }
  
  export function birdController(req, res) {
    res.send({ grow: 'pio pio' });
  }

  export function pingController(req, res) {
    res.send('pong');
  }
  