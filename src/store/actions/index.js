import services from "../../services";

export const listBrand = event => {
  return dispatch => {
    services.getBrand().then(resp =>
      dispatch({
        type: "LIST_BRAND",
        payload: resp.data
      })
    );
  };
};
