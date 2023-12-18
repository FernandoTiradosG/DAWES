export function pingController(request, response) {
    response.statusCode = 418;
    response.setHeader('Content-Type', 'text/html');
    return response.end('<h1>Request accepted</h1>');
}
  
export function jsonController(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const responseObject = {
      message: 'hello world',
    };
    return response.end(JSON.stringify(responseObject.message));
}
  
export function notFoundController(request, response) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    return response.end('<h1>Not Found</h1>');
}

export async function pageController(request, response) {
    try {
      const contents = await fs.readFile('src/public/web.html', 'utf-8');
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      return response.end(contents);
    } catch (err) {
      response.statusCode = 500;
      return response.end(err);
    }
}

export function errorController(request, response) {
    const externalURL = 'https://www.searchenginejournal.com/wp-content/uploads/2020/08/killer-404-page-coschedule-5f3d58c828b04.png#xxxxxxxxxxxx';
  
    get(externalURL, (extRes) => {
      if (extRes.statusCode === 200) {
        response.writeHead(404, { 'Content-Type': 'image/png' });
        extRes.pipe(response);
      } else {
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Error al obtener la imagen');
      }
    }).on('error', (err) => {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'text/plain');
      response.end(err.message);
    });
}

