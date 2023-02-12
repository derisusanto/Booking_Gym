import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ComponentLayout from './component/layout/Layout';
// import Schedule from './pages/schedule/schedule/index';
// import TableComponent from './component/table/TableData';
// import TableComponent from './component/table/TableData';
import { RouteAuth } from './routes/auth';
import { RouteAdmin } from './routes/admin';

// const PageNotFound = React.lazy(() =>
// 	import('./component/notFound/pageNotFound')
// );

function App() {
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token === 'login') setIsToken(true);
		if (token === 'logout') setIsToken(false);
	}, []);

	return (
		<div className="App">
			<Router>
				{!isToken ? (
					<Routes>
						{RouteAuth.map((route, index) => {
							return (
								<Route
									key={index}
									exact={route.exact}
									path={route.path}
									element={
										<Suspense fallback={<div>Loading ..</div>}>
											{route.element}
										</Suspense>
									}
								/>
							);
						})}
					</Routes>
				) : (
					<ComponentLayout>
						<Routes>
							{RouteAdmin.map((route, index) => {
								return (
									<Route
										key={index}
										exact={route.exact}
										path={route.path}
										element={
											<Suspense fallback={<div>Loading ..</div>}>
												{route.element}
											</Suspense>
										}
									/>
								);
							})}
						</Routes>
					</ComponentLayout>

					// Route path="/signin" element={<Signin />} />
					// <Route path="/member/registered" element={<Signup />} />
					// <Route
					// 	path="*"
					// 	element={
					// 		<Suspense fallback="">
					// 			<PageNotFound />
					// 		</Suspense>
					// 	}
					// />
				)}
				{/* </Routes> */}
				{/* <ComponentLayout>
					<Routes>
						<Route path="/" element={<TableComponent />} />
						<Route path="/Dashboard" element={<TableComponent />} />
						<Route path="/Schedule" element={<Schedule />} />

					</Routes>
				</ComponentLayout> */}
			</Router>
		</div>
	);
}

export default App;
