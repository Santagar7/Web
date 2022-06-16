const {Budget,Action, User} = require("../models");

const RenderMenuPage = (req,res)=>{
    res.sendFile('menu.html', { root: './templates/' });
}


const HandleGetBudgetData = async(req,res)=>{
    const budget = await Budget.findOne({where:{index:req.params.index}});
    const actions = await Action.findAll({where:{budget_id:budget.id}});
    const arr = await Promise.all(actions.map(async (item)=>{
        const user = await User.findOne({where:{id:item.creator_id}})
        return {
            amount:item.amount,
            reason:item.reason,
            made_by:user.name,
            time:item.time
        }
    }));
    arr.sort(function(a,b){
        return new Date(b.time) - new Date(a.time);
      });
    await res.send({message:'Success',budget,arr})
}
module.exports = {RenderMenuPage,HandleGetBudgetData}