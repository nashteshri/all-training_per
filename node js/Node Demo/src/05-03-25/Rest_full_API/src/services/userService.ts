import {userRespositories1} from '../repositories/userRepositories';
class userService{
    async getAllUser(){
        return await userRespositories1.getAllUser();
    }
}
export const userService1=new userService();




