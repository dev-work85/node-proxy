'use strict';

var Curl = require('node-libcurl').Curl;
var querystring = require('querystring');

exports.add_proxy_to_get_url = function(req, res) {
  var url = req.params.url+'/'+req.params[0];
  var curl = new Curl();
  curl.setOpt('URL', url);
  curl.setOpt('FOLLOWLOCATION', true);
  curl.setOpt('USERAGENT', "curl/7.35.0") 
  curl.on('end', function(statusCode, body, headers) {
      console.log('--- BODY OF REQUEST ---');
      console.log(body);
      res.send(body);
      this.close();
  });
  curl.on('error', curl.close.bind(curl));
  
  curl.perform();

};
exports.add_proxy_to_post_url = function(req, res) {
  var url = req.params.url+'/'+req.params[0],
   curl = new Curl(),
   data =querystring.stringify(req.body);
   curl.setOpt(Curl.option.URL, url);
   curl.setOpt(Curl.option.POSTFIELDS, data);
   curl.setOpt(Curl.option.HTTPHEADER, ['User-Agent: curl/7.35.0']);
   curl.setOpt(Curl.option.VERBOSE, true);

   curl.perform();
   
   curl.on('end', function(statusCode, body) {
    console.log(body);
    res.send(body);
    this.close();
   });

   curl.on('error', curl.close.bind(curl));
  
  };