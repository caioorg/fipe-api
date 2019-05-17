import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { array, func, string } from "prop-types";

import { Options } from "../Form";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { detailsCar } from "../../store/actions";

// import { Container } from './styles';

class ListYears extends Component {
  state = {
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.detailsCar(
      this.props.brand,
      this.props.model,
      this.refs.selectYear.value
    );

    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/detalhes" />;

    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-select">
            <select ref="selectYear">
              <Options list={this.props.list} place="Selecione ano do modelo" />
            </select>
          </div>
          <button className="form-button" type="submit">
            Selecionar
          </button>
        </form>
      </div>
    );
  }
}

ListYears.propType = {
  list: array,
  brand: string,
  model: string,
  detailsCar: func
};

const mapStateToProps = state => ({
  list: state.fipe.listYears,
  brand: state.fipe.brand,
  model: state.fipe.model
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ detailsCar }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListYears);
