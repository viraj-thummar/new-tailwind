import * as api from "../api";

// Action creators
export const getLogos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLogos();
    dispatch({ type: "FETCH_ALL_LOGOS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilteredLogos = (categories) => async (dispatch) => {
  try {
    const { data } = await api.fetchFilteredLogos(categories);
    dispatch({ type: "FETCH_FILTERED", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createLogo = (logo) => async (dispatch) => {
  try {
    const { data } = await api.createLogo(logo);
    dispatch({ type: "CREATE_LOGO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
