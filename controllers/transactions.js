const Transactions = require('../models/Transactions');

// @desc  Get all transactions
// @route /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
  // mongoose sends back a promise; must use async
  try {
    const transactions = await Transactions.find();

    res.status(200); // by using return res.status.json it creates an [Error_HTTP_Headers_SENT].. use res.status then return json. do not chain them.
    return res.json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.status(500);
    return res.json({
      success: false,
      error: 'Server Error',
    });
  }
};
// @desc  Add transactions
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = async (req, res, next) => {
  res.send('POST transactions');
};
// @desc  Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransaction = async (req, res, next) => {
  res.send('Delete transaction');
};
