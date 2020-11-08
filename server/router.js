const controller = require('../server/controller')
console.log(controller);

const router = require('express').Router();

router
  .route('/all')
  .get(controller.get)
  .delete(controller.delete)

router
  .route('/add')
  .post(controller.post)

router
  .route('/deleteOne/:id')
  .delete(controller.deleteOne)

module.exports = router;