import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const Cart = () => {
	const { id } = useParams();
	const location = useLocation();
	const qty = Number(new URLSearchParams(location.search).get('qty'));

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty));
		}
	}, [dispatch, id, qty]);

	return <div>{typeof qty}</div>;
};

export default Cart;
