const {User} = require("../models");
const jwt = require('jsonwebtoken');
const MD5 = require("crypto-js/md5");

const RenderLoginPage = (req,res)=>{
    res.sendFile('login.html', { root: './templates/' });
}
const Verify = (req,res,next)=>{
    try{
        const token = req.cookies.data;
        if(token){
            jwt.verify(token.accessToken,'secret',(err)=>{
                if(err)
                    return res.status(401).send({message:'Invalid token'})
                else{
                    next();
                }
            })
        }
        else{
            res.send('Non authorized Access');
        }
    }catch(e){
        console.log(e);
        res.send({message:'Server Error'});
    }

}

const generateAccessToken=(user)=>{
    return jwt.sign(({name:user.name}),
        'secret',
        {expiresIn:'12h'});
}


const HandleLogin = async (req,res)=>{
    try{
        await User.findOne({where:{name:req.body.name}})
            .then(async (user)=>{
                if(!user)
                    await res.send({message:'No such user!'});
                else if(user.password!==MD5(req.body.password).toString()){
                    await res.send({message:'Wrong password'});
                }
                else{
                    const accessToken = generateAccessToken(user);
                    if (!accessToken)
                        await res.send({message: 'something went wrong'});
                    else{
                        await res.cookie('data',{name:user.name, accessToken:accessToken})
                        await res.send({message:'Success'});
                    }   
                }
            })
    }
    catch (err){
        await res.send({message:'Error !'});
    }
}

module.exports = {RenderLoginPage,HandleLogin,Verify}