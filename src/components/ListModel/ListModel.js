import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { selectedModel } from '../../store/actions'

class ListModel extends Component {
  state = {
    redirect: false
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.selectedModel(this.props.brand, this.refs.selectModel.value)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) return <Redirect to='/ano' />

    const itemsOptions = () => {
      const options = this.props.modelList || []
      return options.map((option, index) => (
        <option key={index} value={option.codigo}>
          {option.nome}
        </option>
      ))
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <select ref='selectModel'>
          <option>Selecione o Modelo</option>
          {itemsOptions()}
        </select>
        <button type='submit'>Selecionar</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  modelList: state.fipe.listModel,
  brand: state.fipe.brand
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectedModel }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListModel)
