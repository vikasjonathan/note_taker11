const express=require('express');
const app= express();

const PORT=process.env.PORT || 3001;

// Create a route for files of public folder
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//App listner-start server
app.listen(PORT,() => {
    console.log(`server at localhost ${PORT}`);
});
