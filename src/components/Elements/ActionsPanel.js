import {useParams} from 'react-router-dom';
import axios from "axios";
axios.defaults.withCredentials = true;

const url = 'http://localhost:7000/';

function ActionsPanel({setActive}){
    const {index} = useParams();
    function CreateNewAction(e){
        e.preventDefault();
        const amount = document.getElementById('amount').value;
        const reason = document.getElementById('reason').value;
        let elem = document.getElementById('message');
        axios.post(url+`actions/${index}`,{
            'amount':amount,
            'reason':reason
        }).then((resp)=>{
            if(resp.data.message==='Success'){
                elem.textContent = 'Success';
                elem.style.color = 'green';
            }
            else{
                elem.textContent = resp.data.message;
                elem.style.color = 'crimson';
            }
        })
    }
    return (
        <div className='panel'>
            <div className="center">
            <h1 id="message">Create new Action</h1>
            <form>
                <input id="amount" type="number" required placeholder="Amount.."/>
                <input id="reason" type="text" required placeholder="Reason/Sourse.."/>
                <button onClick={CreateNewAction}>Save</button>
            </form>
            <form id="cancel">
                <button type="button" className="exit" onClick={()=>{setActive(false)}}>Cancel</button>
            </form>
            </div>
        </div>)
}

export default ActionsPanel;