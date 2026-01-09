import {Router} from 'express';
import {createPost} from '../controller/post.controller.js';
import {getPosts} from '../controller/post.controller.js';

const router=Router();

router.route('/create').post(createPost);
router.route('/getPosts').get(getPosts);

export default router;