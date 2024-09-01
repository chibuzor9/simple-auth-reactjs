import { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/authContext';

function App() {
	const context = useContext(AuthContext);

	return (
		<>
			<MainHeader />
			<main>
				{!context.isLoggedIn && (
					<Login  />
				)}
				{context.isLoggedIn && (
					<Home />
				)}
			</main>
		</>
	);
}

export default App;
