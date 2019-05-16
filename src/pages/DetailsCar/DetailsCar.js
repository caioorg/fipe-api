import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { Container } from './styles';

class DetailsCar extends Component {
  render() {
    console.log(this.props.details)
    return <div />
  }
}

const mapStateToProps = state => ({
  details: state.fipe.details
})

export default connect(
  mapStateToProps,
  null
)(DetailsCar)
