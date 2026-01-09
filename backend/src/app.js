import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running successfully');
});

//routes import
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';


app.use('/api/v1/users',userRouter);
app.use('/api/v1/posts',postRouter);


export default app;
