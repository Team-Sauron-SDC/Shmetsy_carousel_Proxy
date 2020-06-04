require('newrelic')
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const compression = require('compression');

const app = express();
const PORT = 5500;


//const HOST = process.env.HOST;


app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static(path.join(__dirname, 'public')));



//app.use('/product/:id', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}))
//app.use('/product/shop/:shopId', createProxyMiddleware({target: 'http://3.21.234.192:4200', changeOrigin: true}))
//app.use('/product/colors/:id', createProxyMiddleware({target: 'http://3.21.234.192:4200', changeOrigin: true}))
//app.use('/reviews/:id', createProxyMiddleware({target: 'http://fec-load-balancer-1328451394.us-east-2.elb.amazonaws.com', changeOrigin: true}))
app.use('/api/carousel/:id', createProxyMiddleware({target: 'http://18.220.5.4:9000', changeOrigin: true}))
app.use('/api/carouselEnlarged/:id', createProxyMiddleware({target: 'http://18.220.5.4:9000', changeOrigin: true}))
//app.use('/products/:id', createProxyMiddleware({target: 'http://ec2-3-22-170-203.us-east-2.compute.amazonaws.com:4000', changeOrigin: true}))
//app.use('/get/random', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}))


app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting  server', err);
  } else {
    console.log('server listening at port ', PORT);
  }
});
