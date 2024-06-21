import { useState } from "react";
import Tabsdata from "../components/content";

let Tabs = ()=> {
    let [tab,setTab] = useState(0);
    let [content,setContent] = useState(Tabsdata[0]);
    function Check(e){
        setContent(Tabsdata[e])
    }
return(
    <div className="container">
        <h1>heading</h1>
        <ul>
            {Tabsdata.map((v,i)=>{
                return(
                    <li><button onClick={()=>Check(i)}>{v.title}</button></li>
                )
            })}
        </ul>
        <p>
            {
                content.desc
            }
        </p>
    </div>
)
}
export default Tabs;