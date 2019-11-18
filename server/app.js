const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const file = path.join(__dirname, 'config.json');
let connectUrl = ''
const data = fs.readFileSync(file, 'utf-8');

connectUrl = JSON.parse(data).connectUrl;

const app = express();

if (connectUrl.length === 0) {
    console.error('请配置数据库');
    process.exit(1);
}

mongoose.connect(
    connectUrl, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)
// .then(() => {
//     console.log('connection to database')
// })
.catch(err => {
    console.log('err', err);
})

mongoose.connection.once('open', () => {
    console.log('connected to database');
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});