const Transaction = require("../model/transaction");

function convertToEnglishNumerals(banglaNumerals) {
  const banglaToEnglishMap = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };

  return banglaNumerals.replace(/[০-৯]/g, (match) => banglaToEnglishMap[match]);
}

// create and save new user
exports.createTransaction = (req, res) => {
  const accountType = req.body.accountType;
  const category = req.body.category;
  const subcategory = req.body.subcategory;
  const remark = req.body.remark;
  const totalAmount = convertToEnglishNumerals(req.body.totalAmount);
  const date = req.body.date;
  console.log(accountType, category, subcategory, remark, totalAmount, date);

  if (!accountType || !category || totalAmount === "" || date === "") {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Create a new instance of the TransactionTypeModel
  const newTransaction = new Transaction({
    accountType,
    category,
    subcategory,
    remark,
    totalAmount,
    date,
    // Add other fields as needed based on your data structure
  });

  console.log(newTransaction);
  // Save the new transaction to the database
  newTransaction.save((err, savedTransaction) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error saving transaction" });
    }
    res.status(201).json(savedTransaction);
  });
};

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

// Update a new idetified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
