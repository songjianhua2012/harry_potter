function Discount() {

}

Discount.prototype.discountMothods = function() {
  //买一本或所有书都相同无折扣，两本不同5%，三本不同10%，四本不同20%，五本不同25%
  //var mothods = {'1':1,'2':0.05,'3':0.1,'4':0.2,'5':0.25};
  var mothods = [0,0.05,0.1,0.2,0.25];
  return mothods;
};

module.exports = Discount;
