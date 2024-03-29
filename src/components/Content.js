import React, {useState} from 'react';
import "../styles/Content.css";
import ContentRow from "./ContentRow"

function Content (props) {
    
    const rows = props.data.map((item, index) => {


        // Calculate width for prgress bar
        let width = calcProgressBarProcent(item.subtasks)
        let firstUncompletedSubtask;
        // Get first subtask
        item.subtasks.forEach(subtask => {
            if(subtask.completed == false){
                firstUncompletedSubtask= subtask;
            }
        })

        console.log(firstUncompletedSubtask);
        return (<ContentRow 
            key={item.id} 
            subtask={firstUncompletedSubtask ? firstUncompletedSubtask.text : "ALL COMPLETED"}
            title={item.title} 
            barWidth={width}
            checked={item.completed}

            index={index}
            handleChange={props.handleChange}
            />
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

    /*function changeElem(){
        let copyData = props.data.slice();
        copyData[0].title = "new title bitch";
        setData(copyData);
        console.log(copyData);
    }*/

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