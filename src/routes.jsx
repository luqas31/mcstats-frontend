import { createHashRouter } from 'react-router-dom';
import App from './App';

import Initial from './pages/Initial/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import ResetPassword from './pages/ResetPassword/index';

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
		],
	},
]);
