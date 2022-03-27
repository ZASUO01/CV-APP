import express, {Application} from 'express';
import path from 'path';

const app:Application = express();
const serverPort = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));