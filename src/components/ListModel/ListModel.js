import React, { Component } from "react";
import { connect } from "react-redux";
import { array, func, string } from "prop-types";
import { Redirect } from "react-router-dom";

import { Options } from "../Form";

import { bindActionCreators } from "redux";
import { selectedModel } from "../../store/actions";

class ListModel extends Component {
  state = {
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.selectedModel(this.props.brand, this.refs.selectModel.value);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/ano" />;

    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-select">
            <select ref="selectModel">
              <Options
                list={this.props.modelList}
                place="Selecione um Modelo"
              />
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

ListModel.propType = {
  modelList: array,
  brand: string,
  selectedModel: func
};

const mapStateToProps = state => ({
  modelList: state.fipe.listModel,
  brand: state.fipe.brand
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectedModel }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListModel);
