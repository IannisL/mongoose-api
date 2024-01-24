import {Router} from 'express';
import User from '../models/users.js';


const router = new Router()

// get/ description returns all users

router.get('/', async(req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});

// get /:id description returns user by id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({msg: "resources not found!"});
    else res.json(user);
});

// post / description creates new user

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

// PUT/:id
router.put('/:id', async (req, res) => {
    const { id } = req.undefined;
    const { body } = req;
    const udpatedUser = await User.findByIdAndUpdate(id, body, {new: true});
    res.json(udpatedUser);
});


//DELETE/:id
router.delete('/:id', async (req, res) => {
try{
    const deletedUser =  await User.findByIdAndDelete(id)
    res.json(deletedUser);
}catch (error) {
    console.log(error);
}



})

export default router;