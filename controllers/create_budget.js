const {User,Budget,Member} = require("../models");

const RenderCreateBudgetPage = async (req,res)=>{
    await res.sendFile('create_budget.html', { root: './templates/' });
}
const generate_index=()=>{
    let res ='';
    const signs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const len = 12;

    for(let i=0;i<len;i++)
        res += signs.charAt(Math.floor( Math.random() * signs.length ));
    return res;
}

const CreateBudget = async(req,res)=>{
    try{
        const owner = await User.findOne({where:{name:req.cookies.data.name}});
    const new_budget = Budget.build(
        {name:req.body.name,
         index:generate_index(),
         money:0,
         owner_id:owner.id
         })
    await new_budget.save();
    const new_member = Member.build({
        user_id:owner.id,
        budget_id:new_budget.id
    })
    new_member.save();
    await res.send({message:'Success'});
    }
    catch (e){
        console.log(e)
        await res.send({message:'Error !'});
    }
}

module.exports = {RenderCreateBudgetPage,CreateBudget}