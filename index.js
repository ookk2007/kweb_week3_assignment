const url = require('url');
const queryStr = require('querystring');
const calc = require('./calc');
const http = require('http');

const hostname =  '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
	const parseURL = url.parse(req.url);
	const path = parseURL.pathname;
	const query = queryStr.parse(parseURL.query);

	if(path != '/'){
		res.end('Page Not Found!\n');
	}
	if(!query.a || !query.b || !query.operator){
		res.end('Invalid Query!');
	}
	else{
		const a = Number(query.a);
		const b = Number(query.b);
		if(query.operator === 'add'){
			res.end(''+calc.add(a, b));
		}
		else if(query.operator === 'sub'){
                        res.end(''+calc.sub(a, b));
                }
		else if(query.operator === 'mult'){
                        res.end(''+calc.mult(a, b));
                }
		else if(query.operator === 'div'){
                        res.end(''+calc.div(a, b));
                }
	}
});

server.listen(port, () => console.log(`Server is running on port ${port}!`));
