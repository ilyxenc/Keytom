const pages = require('../app');

module.exports = (app) => {
  app.get('/', pages.mainGET);
  app.get('/about', pages.aboutGET);
  app.get('/roadmap', pages.roadmapGET);
  app.get('/tech', pages.techGET);
  app.get('/tokenomics', pages.tokenomicsGET);
  app.get('/partnership', pages.partnershipGET);

  // app.post('/form/subscription', pages.subscriptionPOST);
  app.post('/form/:page', pages.subscriptionPOST);
}
