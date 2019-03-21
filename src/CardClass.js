import React from 'react';
import ReactDom from 'react-dom';

class CardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            err => console.error(err)
        );

        return <div>Latitude:</div>;
    };
};

export default CardClass;