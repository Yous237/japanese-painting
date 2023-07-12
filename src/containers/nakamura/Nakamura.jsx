import React from 'react'
import './nakamura.css'
import nakamura from '../../assets/nakamura.png'
const Nakamura = () => {
  return (
    <div className="painting__nakamura section__padding" id='nakamura'>
        <div className="painting__nakamura-content">
            <h1>The Actor Nakamura Nakazo I in the Role of Kan Shōjō</h1>
            <p className='painting__nakamura-content-p'>Katsukawa Shunshō (勝川春章) - c. 1775</p>
            <p>Born in 1726, Katsukawa Shunshō was a japanese painter in the ukiyo-e style and a student of the japanese ukiyo-e art school, Katsukawa School. </p>
            <p>The Actor Nakamura Nakazo I is a woodblock print, called nishiki-e, ink and color on paper created on circa 1775. </p>
            <p>The actor Nakamura Nakazo, a famous kabuki theater actor is at the center of the work. Nakazo poses with an air of vengeance as if he was about to vent his anger while holding a plum. In the background, the wind seems to agitate as if to give power to the movement of the actor in full interpretation. We recognize, from then on, the make-up specific to kabuki as well as the wigs specific to the Japanese theater. </p>
            <p>Details. This is the first word that comes to mind when one sees the details, the fineness of the hair or the folds of the clothes, considering the size of the work, 12 13/16 x 5 3/4 in. (32.5 x 14.6 cm).</p>
            <p>The title shows, contrary to what was common, that the artistic representation of an actor is no longer behind the scenes but in the middle of a role, with the aim of retranscribing reality. Moreover, Katsukawa Shunsho made a series of prints on this same actor in several roles such as samurai. </p>
           
        </div>
        <div className="painting__nakamura-image">
            <img src={nakamura} alt="Nakamura Painting id be mad not being able to see this pic !!" />
        </div>
    </div>
  )
}

export default Nakamura