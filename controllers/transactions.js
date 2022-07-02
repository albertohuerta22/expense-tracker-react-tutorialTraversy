const Transaction = require('../models/Transactions');

// @desc  Get all transactions
// @route /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
  // mongoose sends back a promise; must use async
  try {
    const transactions = await Transaction.find();

    return res.sendStatus(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.sendStatus(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
// @desc  Add transactions
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = (req, res, next) => {
  res.send('POST transactions');
};
// @desc  Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransaction = (req, res, next) => {
  res.send('Delete transaction');
};
