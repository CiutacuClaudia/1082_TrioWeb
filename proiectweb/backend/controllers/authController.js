const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Utilizator = db.utilizatori;

const secret = "secret";

const signup = async (req, res) => {
  try {
    const { email, parola, nume, adresa, numarTelefon } = req.body;
    const hashedPassword = await bcrypt.hash(parola, 10);
    const user = await Utilizator.create({
      email,
      parola: hashedPassword,
      nume,
      adresa,
      numarTelefon,
    });
    return res.status(201).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

const signin = async (req, res) => {
  const { email, parola } = req.body;
  try {
    const user = await Utilizator.findOne({
      where: { email: email },
      raw: true,
    });
    if (!user) return res.status(400).json({ eroare: "Does not exist" });

    if (await bcrypt.compare(parola, user.parola)) {
      const token = jwt.sign({ id: user.id, email: user.email }, secret);
      return res.status(200).json({ token });
    } else {
      return res.status(400).json({ error: "Incorrect password" });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token)
      return res.status(400).json({ error: "Not authenticated user" });
    const userObject = jwt.verify(token, secret);
    req.user = await Utilizator.findOne({
      where: { id: userObject.id, email: userObject.email },
      raw: true,
    });
    next();
  } catch (e) {
    console.error(e);
    return res.status(400).json({ error: "Token is wrong or expired" });
  }
};

module.exports = {
  signup,
  signin,
  authenticate,
};
