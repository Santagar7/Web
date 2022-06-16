const {User,Budget,Member} = require("../models");
const RenderAddMembersPage = (req,res)=>{
    res.sendFile('add_members.html', { root: './templates/' });
}

const HandleAddMembers = async (req,res)=>{
    try{
        const budget = await Budget.findOne({where:{index:req.params.index}});
        const {email} = req.body;
        const user = await User.findOne({where:{email:email}});
        if(user){
            if(await Member.findOne({where:{user_id:user.id,budget_id:budget.id}}))
                res.send({message:'Already a member'});
            else{
                const member = Member.build({user_id:user.id,budget_id:budget.id});
                member.save();
                res.send({message:'Success'});
            }
        }
        else{
            res.send({message:'User not found'});
        }
    }
    catch(e){
        console.log(e);
        res.send({message:'Error'})
    }
}

module.exports = {RenderAddMembersPage,HandleAddMembers}