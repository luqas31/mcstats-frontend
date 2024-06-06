import { createHashRouter } from 'react-router-dom';
import App from './App';

import Initial from './pages/Initial/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import ResetPassword from './pages/ResetPassword/index';
import Stats from "./pages/Stats/index";
import CreatedAccount from "./pages/CreatedAccount/index";
import Ranking from "./pages/Ranking/index";

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Initial />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <SignUp />,
			},
			{
				path: 'recovery',
				element: <ResetPassword />,
			},
			{
				path: 'stats',
				element: <Stats />,
			},
			{
				path: 'ranking',
				element: <Ranking />,
			},
			{
				path: 'created',
				element: <CreatedAccount />,
			}
		],
	},
]);
