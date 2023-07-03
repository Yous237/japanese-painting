import React from 'react'
import './kwansei.css'
import kwansei from '../../assets/kwansei.png'

const Kwansei = () => {
  return (
    <div className="painting__kwansei section__padding">
        <div className="painting__kwansei-image">
            <img src={kwansei} alt="" />
        </div>
        <div className="painting__kwansei-content">
            <h1>Three Beauties of the Kwansei Period</h1>
            <p className="p">Kitagawa Utamaro (喜多川 歌麿) - c. 1791</p>
            <p>Main artist of bijin-ga, the ukiyo-e representation of beautiful people, Kitagawa Utamaro is one of the most influent ukiyo-e artist known for his prints of bijin and his triptych.</p>
            <p>Three Beauties of the Kwansei Period, also know as “Three Beautifes of the Present Day” is a polychrome woodblock print, ink and color on paper created on circa 1791.This work is reminiscent of the famous geisha and oiran who are lost nowadays in Japan. The triangular composition represents the busts of a geisha and two of her servants with similar features, each honoring their coats of arms. </p>
            <p>Stunning detail can be seen in the 15 1/4 in. x 10 1/8 in. (37.9 x 24.9cm) Indeed, the color and fineness of the hair is reminiscent of Shunshō's work as the two artists share common works.</p>
            <p>Novelty is what characterizes this print. Indeed, Utamaro puts forward a portrait resembling the reality, out the notion of portrait was not yet established. Moreover, the portrait is a close-up, which brings a new vision of the ukiyo-e style.</p>
        </div>
    </div>
  )
}

export default Kwansei