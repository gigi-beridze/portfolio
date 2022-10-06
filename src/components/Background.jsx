import React from 'react'
import '../js/moveBackground'
import Meteor1 from '../assets/img/background/meteor1.png'
import Meteor2 from '../assets/img/background/meteor2.png'
import Meteor3 from '../assets/img/background/meteor3.png'
import Meteor4 from '../assets/img/background/meteor4.png'
import Meteor5 from '../assets/img/background/meteor5.png'
import Meteor6 from '../assets/img/background/meteor6.png'
import Meteor7 from '../assets/img/background/meteor7.png'
import Bigmeteor from '../assets/img/background/bigmeteor.png'
import Bigmeteor2 from '../assets/img/background/bigmeteor2.png'

function Background() {
  return (
    <div>
      <div className="backImage">
        <img className="meteors met1 parallaxed" src={Meteor1} alt="gfd" />
        <img className="meteors met2 parallaxed" src={Meteor2} alt="gfd" />
        <img className="meteors met3 parallaxed" src={Meteor3} alt="gfd" />
        <img className="meteors met4 parallaxed" src={Meteor4} alt="gfd" />
        <img className="meteors met5 parallaxed" src={Meteor5} alt="gfd" />
        <img className="meteors met6 parallaxed" src={Meteor6} alt="gfd" />
        <img className="meteors met6 parallaxed" src={Meteor7} alt="gfd" />
        <img className="meteors met7 parallaxed" src={Bigmeteor} alt="gfd" />
        <img className="meteors value1 parallaxed" src={Bigmeteor2} alt="gfd" />
        <img className="meteors value2 parallaxed" src={Meteor7} alt="gfd" />
        <img className="meteors value3 parallaxed" src={Meteor7} alt="gfd" />
      </div>
    </div>
  )
}

export default Background