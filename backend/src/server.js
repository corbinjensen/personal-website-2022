import express from 'express';

const articlesInfo = {
    'learn-react':{
        content:[]
    },
    'learn-node':{
        content:[]
    },
    'my-thoughts-on-resumes':{
        content:[]
    }
}

const app = express();
app.use(express.json());

app.get('/hello',(req,res) => res.send('Hello!'));
app.get('/hello/:name',(req,res) => res.send(`Hello ${req.params.name}`));
app.post('/hello',(req,res) => res.send(`Howdy ${req.body.name}`));

app.post(`/api/blog/:name/add-content`,(req,res) => {
    const{title,article} = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].content.push({title,article});

    res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000,() => console.log('Listening on port 8000'));