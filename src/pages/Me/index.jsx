import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      <div>
        me....
        <Link to='calendar'>運動簽到</Link>
      </div>
    )
  }
}
