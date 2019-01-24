'use strict';
module.exports = function(app) {
  var proxy = require('../controller/appController');

  // proxy Routes
    app.route('/proxy/:url/*')
    .get(proxy.add_proxy_to_get_url)
    .post(proxy.add_proxy_to_post_url);
};

    
   