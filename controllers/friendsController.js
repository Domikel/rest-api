import {Friend} from '../models/friends.js'
export const getFriendsByUser = async(req, res)=>{
    try{
        const friends = await Friend.find({friendId: req.params.id}).populate('user')
        res.status(200).json(friends)
    }catch(err){
        res.status(404).json({message: err.message})
    }
 
}
export const getFriend = async(req, res)=>{
    try{
        const friend = await Friend.findById(req.params.id)
        res.status(200).json(friend)
    }catch(err){
        res.status(404).json({message: err.message})
    }
}
export const addFriend = async(req, res)=>{
    const friend = req.body
    const newFriend = new Friend(friend)
    try{
        await newFriend.save()
        res.status(201).json(newFriend)
    }catch(err){
        res.status(409).json({message: err.message})
    }
}
export const deleteFriend = async(req, res)=>{
    try{
        await Friend.findByIdAndRemove(req.params.id)
        res.status(200).json({message: 'Friend deleted'})
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const getAllFriends = async(req, res)=> {
    try{
        const friends = await Friend.find()
        res.status(200).json(friends)
    }catch(err){
        res.status(404).json({message: err.message})
    }
}