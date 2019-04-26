import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex'


// TODO: Skeleton component tree as drawn, with profile on click same level
// TODO: Conditional rendering of components on hover
// Bonus: Have data show in card on hover on transparent gray image over

// ex. data as part of array: {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// }

// TODO: Create a mapped hogs object iwth images in . 
// Lowercase the name, fill " " with _, add .png


class App extends Component {

  imgfyHog = (hog) => {
    const hog_url = hog.name.toLowerCase().replace(/ /g, "_") + ".jpg";
    hog.img = hog_url
    console.log("hog:", hog)
  }

  EnhancedHogData = () => { 
    hogs.forEach(hog => this.imgfyHog(hog))
    console.log(hogs)
    return hogs
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <HogIndex allHogs={this.EnhancedHogData()}/>
      </div>
    )
  }
}

export default App;
