const {User,Action,Budget} = require("../models");
const RenderActionsPage = (req,res)=>{
    res.sendFile('actions.html', { root: './templates/' });
}

const HandleMakeAction = async (req,res)=>{
    try{
        const user = await User.findOne({where:{name:req.cookies.data.name}});
        const {index} = req.params;
        const budget = await Budget.findOne({where:{index:index}});
        const {amount,reason} = req.body;
        const new_action = Action.build({
            amount:amount,
            reason:reason,
            budget_id:budget.id,
            creator_id:user.id,
            time:new Date()
        });
        new_action.save();
        budget.update({money:budget.money+parseInt(amount)});
        res.send({message:'Success'})
    }
    catch(e){
        console.log(e);
        res.send({message:'Error'})
    }
}

module.exports = {RenderActionsPage,HandleMakeAction}