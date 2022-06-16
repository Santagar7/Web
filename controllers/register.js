const {User} = require("../models");
const MD5 = require("crypto-js/md5");

const RenderRegisterPage = (req,res)=>{
    res.sendFile('register.html', { root: './templates/' });
}

const HandleRegister = async(req,res)=>{
    try{
        let username_user = await User.findOne({where:{name:req.body.name}});
        let email_user = await User.findOne({where:{email:req.body.email}});
        if(username_user)
            await res.send({message:'Username occupied'})

        else if(email_user)
            await res.send({message:'Email occupied'})

        else{
            const new_user = User.build(
                {name:req.body.name,
                 password:MD5(req.body.password).toString(),
                 firstname:req.body.firstname,
                 lastname:req.body.lastname,
                 email:req.body.email})
            await new_user.save();
            await res.send({message:'Success'});
        }
    }
    catch (err){
        await res.send({message:'Error !'})
    }
}

module.exports = {RenderRegisterPage,HandleRegister}