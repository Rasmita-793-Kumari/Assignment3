const express=require('express');
const exphbs=require('express-handlebars')
const PORT=8899;
const app=express();
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static('static'));
app.use("/static",express.static("static"));

//routes 
const mainRoute=require('./routes/mainRoutes');
const userRoute=require('./routes/userRoutes');
app.use("/",mainRoute);
app.use("/users",userRoute);
app.use("*",(req,res)=>{
    res.render("notfound");
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`)
})