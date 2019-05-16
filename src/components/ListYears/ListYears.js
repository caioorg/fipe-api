import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { detailsCar } from '../../store/actions'

// import { Container } from './styles';

class ListYears extends Component {
  state = {
    redirect: false
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.detailsCar(
      this.props.brand,
      this.props.model,
      this.refs.selectYear.value
    )

    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) return <Redirect to='/detalhes' />

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
        <select ref='selectYear'>
          <option>Selecione ano do modelo</option>
          {itemsOptions()}
        </select>
        <button type='submit'>Selecionar</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  list: state.fipe.listYears,
  brand: state.fipe.brand,
  model: state.fipe.model
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ detailsCar }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListYears)
