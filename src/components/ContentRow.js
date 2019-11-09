import React from "react";



function ContentRow(props) {
    const barWidth = {
        width:props.barWidth+"%"
    };
    return (
        <div className="row">
                <div className="title">
                    <input className="check"type="checkbox" />
                    <p className="">{props.title}</p>
                </div>
                <div className="slider-container">
                    <div className="progress">
                        <div style={barWidth} className="bar">
                            <span className="circle"></span>
                        </div>
                    </div>
                </div>
                <p>Level 1{/*props.level*/}</p>
                <p>Critique{/*props.coments*/}</p>
                <p>10:20AM{/*props.time*/}</p>
        </div>
    )
}

export default ContentRow;