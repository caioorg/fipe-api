import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
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

    const itemsOptions = () => {
      const options = this.props.list || []
      return options.map((option, index) => (
        <option key={index} value={option.codigo}>
          {option.nome}
        </option>
      ))
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <select ref='selectBrand'>
          <option>Selecione uma Marca</option>
          {itemsOptions()}
        </select>
        <button type='submit'>Selecionar</button>
      </form>
    )
  }
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
