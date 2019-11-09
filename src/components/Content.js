import React, {useState} from 'react';
import "../styles/Content.css";
import ContentRow from "./ContentRow"
import contentData from "../data";

function Content () {
    const [data, setData] = useState(contentData);
    const rows = data.map((item) => {
        // Calculate width for prgress bar
        let width = calcProgressBarProcent(item.subtasks)
        return (<ContentRow 
            key={item.id} 
            title={item.title} 
            barWidth={width}/>
        )
    })

    function calcProgressBarProcent(subtasks) {
        let length=subtasks.length;
        let i=0;
        let count=0;
        for (i = 0; i<subtasks.length; i++){
            if(subtasks[i].completed == true)
                count++;
        }
        let procent = 100*count/length;
        return procent;
    }

    function changeElem(){
        let copyData = data.slice();
        copyData[0].title = "new title bitch";
        setData(copyData);
        console.log(copyData);
    }

    return (
        <div className="content-grid">
            {rows}
        </div>
    )
}

/*
<p >Progress Status</p>
<p >Task Name</p>
<p >Level</p>
<p >Comments</p>
<p >Target time</p>
</div>
<div className ="row">
<div className="title">
    <input className="check"type="checkbox" />
    <p className="">dadada Status</p>
</div>

<div class="slider-container">
    <div class="progress">
        <div class="bar">
            <span class="circle"></span>
        </div>
    </div>
</div>
<p>13</p>
<p> Cyka blyat</p>
<p>10:20AM</p>
*/
export default Content;