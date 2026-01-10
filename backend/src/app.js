import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running successfully');
});

//routes import
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import updateRouter from './routes/post.route.js';
import deleteRouter from './routes/post.route.js';


app.use('/api/v1/users',userRouter);
app.use('/api/v1/posts',postRouter);
app.use('/api/v1/update',updateRouter);
app.use('/api/v1/delete',deleteRouter);


export default app;

//learned all the backend api's and compeleted the CRUD operations for posts and user authentication.