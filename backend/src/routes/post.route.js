import {Router} from 'express';
import {createPost,getPosts,updatePost} from '../controller/post.controller.js';

const router=Router();

router.route('/create').post(createPost);
router.route('/getPosts').get(getPosts);
router.route('/update/:id').patch(updatePost);

export default router;