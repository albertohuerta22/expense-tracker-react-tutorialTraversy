/* eslint-disable no-unused-vars */
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
  try {
    const { text, amount } = req.body;
    const transaction = await Transactions.create(req.body);

    res.status(201);
    return res.json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      res.status(400); // the client didnt send what it was suppose to
      return res.json({
        success: false,
        error: messages,
      });
    } else {
      res.status(500);
      return res.json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};
// @desc  Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transactions.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500);
    return res.json({
      success: false,
      error: 'Server Error',
    });
  }
};
