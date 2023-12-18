import express from 'express';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json())

const users = [
]

app. post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    
    users.push({
        username, 
        password: hash
    });

    console.log(users);

    res.send('ok');
});

app.listen(3000, () => console.log('listen on port 3000'))