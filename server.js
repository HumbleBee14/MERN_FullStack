const express =  require('express');

const app = express();  //  Initialize App variable with EXPRESS

app.get('/', (res, req) => res.setEncoding('API Running'));

const PORT = process.env.PORT || 5000;  // Setting PORT to Look for a Environment variable PORT which ill be available on heroku when deployed OR else locally it'll default to 5000 locally if there's no environment variable set

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));   // Listen to Port (PORT NUmber, Call back function)

