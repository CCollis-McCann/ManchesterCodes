const calculateBill = (price, vat, tip) =>
  typeof price !== 'number' ||
  typeof vat !== 'number' ||
  typeof tip !== 'number'
    ? 'error'
    : `£${price + vat + tip}`;

module.exports = calculateBill;
