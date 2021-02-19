import React from 'react';
import {Component} from "react";


const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

class Zoom extends Component {
  state = {
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%'
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render = () =>
  <div className="root">
    <figure onMouseMove={this.handleMouseMove} style={this.state}>
      <img src={src} width="100px" />
    </figure>
	</div>
}

export default Zoom;

//https://codepen.io/robertkirsz/pen/ZvorjB
