import React from 'react';


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';

    }
}

// noinspection JSAnnotator
const SeasonConfig = {
    summer: {
        textm: 'winter season',
        iconName: 'snowflake'
    },
    Winter: {
        textm: 'summmer sun',
        iconName: 'sun'
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'winter' : 'summer ';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
   const {textm,iconName}=SeasonConfig[season];

    console.log(props.lat);

    return <div>
        <i className={`${iconName} icon`}/>
        <h1>{textm}</h1>
        <i className={`${iconName} icon`}/>
    </div>
}

export default SeasonDisplay;