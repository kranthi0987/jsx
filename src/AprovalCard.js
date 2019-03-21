import React from 'react';


const AprovalCard = (props) => {

    console.log(props.children);
    return (
    
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={props.avatar}/>
                    <div className="header">
                        {props.children}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AprovalCard;