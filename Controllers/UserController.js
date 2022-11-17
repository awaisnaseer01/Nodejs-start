const User = require("../Models/user.models")

class USER {

createUSER = async (req) => {
    let user= req
console.log(user)
try{
    const res=await new User(user).save();
    return res;
}
catch (error)
{
    throw new Error (error);
}
};




    // saveData = ()=> {
    //     console.log("DATA IS SAVE")
    // }





    // callBack= (err, data)=>{
    //     if(err){
    //         return;
        
    //     }

    //     callBack2=(err2, data) => {
    //         if(err2){
    //             return;
    //         }

    //         callBack3=(err3, data) => {
    //             return;
    //         };
    //     };
    // };

 

//     const res= await callBack(err,data)
//     callBack(err,data).then(res=>{

//     }).then(data=>{

//     })


//    const res= Promise.all(
//         callBack(err,data)
//         callBack2(err2,data)
//     )

};

module.exports = new USER();