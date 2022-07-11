import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import UserList from './pages/UserList';
import UserEdit from './pages/UserEdit';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';
import OrderList from './pages/OrderList';

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/product/:id' element={<Product />} />
						<Route path='/cart/:id' element={<Cart />} />
						<Route path='/cart/' element={<Cart />} />
						<Route path='/shipping' element={<Shipping />} />
						<Route path='/payment' element={<Payment />} />
						<Route path='/placeorder' element={<PlaceOrder />} />
						<Route path='/order/:id' element={<Order />} />

						<Route path='/admin/userlist' element={<UserList />} />
						<Route path='/admin/user/:id/edit' element={<UserEdit />} />
						<Route path='/admin/productlist' element={<ProductList />} />
						<Route path='/admin/product/:id/edit' element={<ProductEdit />} />
						<Route path='/admin/orderlist' element={<OrderList />} />

						<Route path='/search/:keyword' element={<Home />} />
						<Route path='/page/:pageNumber' element={<Home />} />
						<Route
							path='/search/:keyword/page/:pageNumber'
							element={<Home />}
							exact
						/>
						<Route path='/' element={<Home />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
