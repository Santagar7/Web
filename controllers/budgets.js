const {User,Budget,Member} = require("../models");

const RenderBudgetsPage = async (req,res)=>{
    await res.sendFile('budgets.html', { root: './templates/' });
}

const HandleGetBudgets = async(req,res)=>{
    const {data} = req.cookies;
    const user =await User.findOne({where:{name:data.name}});
    const ids = await Member.findAll({where:{user_id:user.id}});
    const budgets = await Budget.findAll({where:{id:ids.map(budget=>budget.budget_id)}});
    await res.send({data:budgets||[]});
}

module.exports = {RenderBudgetsPage,HandleGetBudgets}