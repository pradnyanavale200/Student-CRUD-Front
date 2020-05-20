const express=require('express');

const path=require('path');

const app=express();

app.use('/', express.static('studentapp'));

app.get('*', (req,res,next) => {
    const indexFile = path.resolve(__dirname + '/studentapp/index.html');
    res.sendFile(indexFile);
});

app.listen(process.env.PORT || 4200);

