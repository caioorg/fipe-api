import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { array } from 'prop-types'
import { connect } from 'react-redux'

import './DetailsCar.css'
// import { Container } from './styles';

class DetailsCar extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/' className='go-back'>
          Voltar
        </Link>
        <div className='details-car'>
          <h1>Ficha Técnica</h1>
          <div className='details-cars__infos'>
            <div className='details-cars__infos--description'>
              <label>Marca</label>
              <p>{this.props.details.Marca}</p>
            </div>
            <div className='details-cars__infos--description'>
              <label>Modelo</label>
              <p>{this.props.details.Modelo}</p>
            </div>

            <div className='details-cars__infos--description'>
              <label>Ano do Modelo</label>
              <p>{this.props.details.AnoModelo}</p>
            </div>
            <div className='details-cars__infos--description'>
              <label>Combustivel</label>
              <p>
                {this.props.details.SiglaCombustivel} -{' '}
                {this.props.details.Combustivel}
              </p>
            </div>
            <div className='details-cars__infos--description'>
              <label>CodigoFipe</label>
              <p>{this.props.details.CodigoFipe}</p>
            </div>

            <div className='details-cars__infos--description'>
              <label>Última atualização</label>
              <p>{this.props.details.MesReferencia}</p>
            </div>
          </div>
          <div className='details-cars__value'>{this.props.details.Valor}</div>
        </div>
      </Fragment>
    )
  }
}

DetailsCar.propType = {
  details: array
}

const mapStateToProps = state => ({
  details: state.fipe.details
})

export default connect(
  mapStateToProps,
  null
)(DetailsCar)
