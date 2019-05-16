import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { listBrand } from "../../store/actions";

class ListBrand extends Component {
  componentDidMount() {
    this.props.listBrand();
  }

  handleChangeBrandList = event => {
    console.log(event.target.value);
  };

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
      <form>
        <select onChange={this.handleChangeBrandList}>
          <option>Selecione uma Marca</option>
          {itemsOptions()}
        </select>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  list: state.fipe.list,
  brand: state.fipe.brand
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ listBrand }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBrand);
