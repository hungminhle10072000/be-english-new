import {API_BASE} from '../../env.js'
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use("/api/users",
        createProxyMiddleware({
            target: `${API_BASE}`,
            changeOrigin: true
        })
    );

    app.use("/api/topic-vocas",
        createProxyMiddleware({
            target: `${API_BASE}`,
            changeOrigin: true
        })
    );

};