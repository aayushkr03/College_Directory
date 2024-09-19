const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Sample user data
const users = [
	{ username: 'student1', password: 'password1', role: 'student' },
	{ username: 'faculty1', password: 'password2', role: 'faculty' },
	{ username: 'admin1', password: 'password3', role: 'admin' }
];

app.post('/api/login', (req, res) => {
	const { username, password } = req.body;
	const user = users.find(u => u.username === username && u.password === password);
	if (user) {
		res.json({ authenticated: true, role: user.role });
	} else {
		res.json({ authenticated: false });
	}
});

app.get('/api/check-auth', (req, res) => {
	// Check if the user is authenticated
	const username = req.query.username;
	const user = users.find(u => u.username === username);
	if (user) {
		res.json({ authenticated: true, role: user.role });
	} else {
		res.json({ authenticated: false });
	}
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});