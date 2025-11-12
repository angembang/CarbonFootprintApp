const users = require('../data/users');

exports.register = (req, res) => {
  const { username, password } = req.body;
  // Check is the user input data is valid
  if (username.length < 3 || password.length < 8) {
    return res.status(400).json({ error: 'Le pseudo doit contenir au moins 3 caractères et le mot de passe 8 caractères' });
  }

  // Check if the user is already exists
  // Debug
  console.log('Liste des utilisateurs : ', users)
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'L\'utilisateur avec ce pseudo existe déjà' });
  }

  // Create a new user
  const newUser = { id: Date.now(), username, password };
  users.push(newUser);
  res.json(newUser);
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Identifiants incorrects' });
  res.json(user);
};
