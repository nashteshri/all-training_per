import { userService1 } from "../services/userService";

class userController{
    async getAllUsers(req,res){
        try{
            const user=await userService1.getAllUser();
            res.json(user)
        }catch(err){
            res.status(500).json({error:err.message});
        }
    }
}
export const userController1=new userController();