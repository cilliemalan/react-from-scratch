const express = require('express');
const webpack = require('webpack');
const webpackconfig = require('../webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const opn = require('opn');

const development = process.env.NODE_ENV != 'production';
const port = 3000;
const app = express();

app.use(express.static('www'));

const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler, {});
app.use(wpmw);

const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);

//SPA catch
app.use((req, res) => {
    const index = webpackCompiler.outputFileSystem.readFileSync(
        `${webpackconfig.output.path}/index.html`);
    
    res.end(index);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    if (development) {
        opn(`http://127.0.0.1:${port}/`);
    }
});
