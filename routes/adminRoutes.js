import express from 'express'
import { blockuser, deletePost, getAllUsers, getDashboardCount, getPostsByMonth, getallPosts, login, searchPost, searchUser } from '../controllers/adminController.js'
const router = express.Router()

router.post('/', login)
router.get('/getAllUsers', getAllUsers)

router.put('/userblock/:id', blockuser)
router.get('/searchUser/:key', searchUser)
router.get('/searchPost/:key', searchPost)

/*POST ACTIONS*/

router.get('/getallposts', getallPosts)
router.put('/deletePost/:id', deletePost)

router.get('/getDashboardCount', getDashboardCount)
router.get('/getPostsByMonth', getPostsByMonth)

export default router;  