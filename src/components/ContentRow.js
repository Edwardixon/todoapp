import React from "react";



function ContentRow(props) {
    const barWidth = {
        width:props.barWidth+"%"
    };
    return (
        <div>
            <div className="row">
                    <div className="title">
                        <input 
                            className="check"
                            type="checkbox"
                            checked={props.checked}
                            onChange={() => props.handleChange(props.index)}
                         />
                        <p className="">{props.title}</p>
                    </div>
                    <div className="slider-container">
                        <div className="progress">
                            <div style={barWidth} className="bar">
                                <span className="circle"></span>
                            </div>
                        </div>
                    </div>
                    {/*TODO: Make this scrollable side ways*/}
                    <p>{props.subtask}</p>
                    <p>Critique{/*props.coments*/}</p>
                    <p>10:20AM{/*props.time*/}</p>
            </div>
            <hr />
        </div>
    )
}

export default ContentRow;