export function pingController(req, res) {
  res.send('pong');
}

export function adminAccessController(req, res) {
  res.status(200).send('Bienvenid@, disfrute del contenido');
}

export function fibonacci(req, res) {
  const fib = [0, 1];
  const num = 10;
  const final = {0: 0, 1: 1}
  for (let i = 2; i<= num; i++) {
    final[i] = fib[i-1] + fib[i-2]
  }
  res.send(final)
}
