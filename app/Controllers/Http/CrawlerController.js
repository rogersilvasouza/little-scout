'use strict'

const Crawler = use('crawler');
const axios = use('axios');

class CrawlerController {

  async index({ request, response }) {
    var c = new Crawler({
      maxConnections: 10,
      callback: function (error, res, done) {
        if (error) {
          console.log(error);
        } else {
          var $ = res.$;
          var id = $("#page-info").data('baseid');

          axios.get(`https://www.futbin.com/21/playerPrices?player=${id}`)
            .then(function (response) {
              console.log(response.data[id]['prices']['ps']['LCPrice']);
              console.log(response.data[id]['prices']['ps']['LCPrice2']);
              console.log(response.data[id]['prices']['ps']['LCPrice3']);
              console.log(response.data[id]['prices']['ps']['LCPrice4']);
              console.log(response.data[id]['prices']['ps']['LCPrice5']);
              console.log(response.data[id]['prices']['ps']['updated']);
              console.log(response.data[id]['prices']['ps']['MinPrice']);
              console.log(response.data[id]['prices']['ps']['MaxPrice']);
              console.log(response.data[id]['prices']['ps']['PRP']);
            });
        }
        done();
      }
    });

    c.queue('https://www.futbin.com/21/player/1020/renato-sanches')

    response.json([])
  }
}

module.exports = CrawlerController
