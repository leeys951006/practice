const lunchMenus = require('./pokemonNames.json')


function lunchSelector(array) {
  
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }


  const firstGetRandomIndex = getRandomInt(0, array.length);

  for (let i = 0; i < array.length; i++) {
    
    
    if (Array.isArray(array[firstGetRandomIndex]) === true) {

      const randomIndex = getRandomInt(0, array[i].length);

    }
  }
  return array[firstGetRandomIndex];
}

// console.log(lunchSelector(lunchMenus));


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

const http = require('http');

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write("<html>");
  res.write("<head>");
  res.write("<title>");
  res.write("점심 메뉴 고르기");
  res.write("</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>");
  const getData =lunchSelector(lunchMenus);
  res.write(getData);
  res.write("</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, (error) => {
  if(error) {
    console.log('Error: ', error);
  } else {
    console.log('서버돌아감');
    console.log(`http://localhost:3000/`);
  }
});