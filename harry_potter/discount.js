function Discount() {

}

Discount.prototype.discountMothods = function() {
  //买一本折扣100%，两本5%，三本10%，四本20%，五本25%
  var mothods = {'1':1,'2':0.05,'3':0.1,'4':0.2,'5':0.25};
  return mothods;
};

module.exports = Discount;
