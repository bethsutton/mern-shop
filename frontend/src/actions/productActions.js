import axios from 'axios';
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
	try {
		// set state - loading to true and product list to empty array
		dispatch({ type: PRODUCT_LIST_REQUEST });

		// make request
		const { data } = await axios.get('/api/products');

		// set state - loading to false and product list to data
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
