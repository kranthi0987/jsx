import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails.js';
import AprovalCard from './AprovalCard.js';
import CardClass from './CardClass.js';
import SeasonDisplay from './SeasonDisplay.js';


// var faker=require('faker');
// import '../semantic/dist/semantic.min.css'
//rect

//
const App = () => {
    const movieItems = [];
    for (var i=0; i < 10; i++) {
        movieItems.push(<AprovalCard>
            <CommentDetails author="sam" timeago="Today date: 6:00Pm" avatar={faker.image.avatar()}
                comment="comment" />
        </AprovalCard>);
    }
    return (
        <div className="ui container comments">

            {movieItems}
            <CommentDetails author="best" timeago="Today date: 9:00Pm" avatar={faker.image.avatar()} />
            <CardClass />
        </div>)
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);