import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import ActionsPanel from '../Elements/ActionsPanel';
import MembersPanel from '../Elements/MembersPanel';
function Navbar({index='', val=false,refresh=(()=>{})}){
    const [showActions,setShowActions] = useState(false);
    const [showMembers,setShowMembers] = useState(false);

    function LogOut(){
        console.log('log out');
    }

    function ShowActionsPanel(e){
        e.preventDefault();
        setShowActions(!showActions);
        setShowMembers(false);
    }
    function ShowMembersPanel(e){
        e.preventDefault();
        setShowMembers(!showMembers);
        setShowActions(false);
    }

    useEffect(()=>{
        refresh(!val);
    },[showActions,showMembers])

    return(
        <div className="extra">
            <div className="topnav">
                <a className="active" onClick={LogOut}>Log Out</a>
                {index===''?null:<Link id="members" to={'#'} onClick={ShowMembersPanel}>Members</Link>}
                {index===''?null:<Link to="/budgets">Budgets</Link>}
                {index===''?null:<Link id="action" to={'#'} onClick={ShowActionsPanel}>Actions</Link>}
            </div>
            {showActions?<ActionsPanel setActive={setShowActions}/>:null}
            {showMembers?<MembersPanel setActive={setShowMembers}/>:null}
        </div>
    )
// <ActionsPanel active={showActions} setActive={setShowActions}/>
}
export default Navbar;