module.exports = function(app) {
  app.get('/health', (req, res) => res.status(200).send('<h2>HEALTHY</h2>'))
};