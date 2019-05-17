/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from "react";

import "./Options.css";

export default class Select extends Component {
  render() {
    const itemsOptions = () => {
      const options = this.props.list || [];
      return options.map((option, index) => (
        <option key={index} value={option.codigo}>
          {option.nome}
        </option>
      ));
    };

    return (
      <Fragment>
        <option>{this.props.place}</option>
        {itemsOptions()}
      </Fragment>
    );
  }
}
