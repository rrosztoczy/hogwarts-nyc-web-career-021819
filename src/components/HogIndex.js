import React from 'react';
import ProfileCard from './ProfileCard'

const HogIndex = (props) => {

    function renderCards() {
        // console.log("props:", props)
        console.log("props hogs:", props.allHogs[0])
    
    return props.allHogs.map(hog => <li><ProfileCard pig={hog}/></li>)
    // return <p>hi</p>
    // props.allHogs.map(hog => null)
    }

    return <ul>{renderCards()}</ul>

//    renderCards();
//    return <div>HogIndex</div>
}

export default HogIndex

// {/* <ProfileCard displayhog={hog} /> */}