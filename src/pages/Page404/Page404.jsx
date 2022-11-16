import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <p>Trang tim kiem ko ton tai</p>
        <NavLink to="" className={'btn btn-warning'}>Moi ban bam vao day de tro ve trang chu</NavLink>
      </div>
    )
  }
}
