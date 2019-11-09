import React from 'react';

function Content () {
    return (
        <div className="App-content-grid">
            <p >Progress Status</p>
            <p >Task Name</p>
            <p >Level</p>
            <p >Comments</p>
            <p >Target time</p>

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
            </div>
            
            <div class="slider-container">
                <div class="progress">
                    <div class="bar">
                        <span class="circle"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;