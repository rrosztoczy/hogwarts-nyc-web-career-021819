import React from 'react';
import cherub from '../hog-imgs/cherub.jpg'

const ProfileCard = (props) => {

// const hog_img = `../hog-imgs/${props.pig.img}`
console.log("img url", `./${props.pig.img}`)

return (
    <div>
    <img src={require(`../hog-imgs/${props.pig.img}`)}></img>
    <p>Name: {props.pig.name}</p>
    </div>
)

// {`./${props.pig.img}`}
}

export default ProfileCard