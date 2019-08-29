'use strict';
module.exports = (sequelize, DataTypes) => {
  const PurchasesDetail = sequelize.define('PurchasesDetail', {
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT,
    productId: DataTypes.INTEGER,
    purchasesId: DataTypes.INTEGER
  }, {});
  PurchasesDetail.associate = function(models) {
    // associations can be defined here
  };
  return PurchasesDetail;
};