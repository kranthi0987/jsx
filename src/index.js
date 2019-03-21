import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails.js';
import AprovalCard from './AprovalCard.js';

// var faker=require('faker');
// import '../semantic/dist/semantic.min.css'
//rect

//
const App = () => {

    return (
        <div className="ui container comments">
            <AprovalCard>
                <CommentDetails author="sam" timeago="Today date: 6:00Pm" avatar={faker.image.avatar()}
                                comment="comment"/>
            </AprovalCard>


            <CommentDetails author="best" timeago="Today date: 9:00Pm" avatar={faker.image.avatar()}/>

        </div>)
};

class App1 extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            err => console.error(err)
        );

        return <div>Latitude:</div>;
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
);