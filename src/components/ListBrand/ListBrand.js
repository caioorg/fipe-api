import React, { Component } from 'react'
import { array, func } from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Options } from '../Form'

import { bindActionCreators } from 'redux'
import { listBrand, modelCar } from '../../store/actions'

class ListBrand extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.props.listBrand()
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.modelCar(this.refs.selectBrand.value)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) return <Redirect to='/modelo' />

    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-select'>
            <select ref='selectBrand' id='brand'>
              <Options list={this.props.list} place='Selecione uma Marca' />
            </select>
          </div>
          <button className='form-button' type='submit'>
            Selecionar
          </button>
        </form>
      </div>
    )
  }
}

ListBrand.propType = {
  list: array,
  listBrand: func,
  modelCar: func
}

const mapStateToProps = state => ({
  list: state.fipe.listBrand
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ listBrand, modelCar }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBrand)
