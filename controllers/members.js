const {User,Budget,Member} = require("../models");
const RenderMembersPage = (req,res)=>{
    res.sendFile('members.html', { root: './templates/' });
}

const HandleGetAllMembers = async (req,res)=>{
    try{
        const budget = await Budget.findOne({where:{index:req.params.index}});
        const members = await Member.findAll({where:{budget_id:budget.id}});
        const users = await User.findAll({where:{id:members.map(item=>item.user_id)}});

        res.send({message:'Success',members:users.map(user=>user.name)})
    }
    catch(e){
        console.log(e);
        res.send({message:'Error'})
    }
}

module.exports = {RenderMembersPage,HandleGetAllMembers}