import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/product/:id' element={<Product />} />

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
