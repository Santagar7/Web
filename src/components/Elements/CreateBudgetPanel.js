import axios from "axios";
axios.defaults.withCredentials = true;

function CreateBudgetPanel({active,func}){
    const url = 'http://localhost:7000/';
    const CreateBudget = ()=>{
        let name = document.getElementById('name').value;
        let elem = document.getElementById('message');
        axios.post(url+'create_budget',{
            'name':name
        }).then((resp)=>{
            if(resp.data.message==='Success'){
                navigator("/budgets");
            }
            else{
                elem.textContent = resp.data.message;
                elem.style.color = 'crimson';
            }
        })
    }
    return(
        <div className={active?"create_budget":"create_budget not_active"}>
            <div className="center">
                <h1 id="message">Create new budget</h1>
                <form>
                    <input id="name" type="text" required/>
                    <button onClick={CreateBudget}>Create</button>
                </form>
                <button onClick={()=>{func(false)}}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateBudgetPanel;
