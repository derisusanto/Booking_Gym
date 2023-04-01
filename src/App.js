import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ComponentLayout from './component/layout/Layout';
import { RouteAuth } from './routes/auth';
import { RouteAdmin } from './routes/admin';
import { RouteMember } from './routes/member';
import { ICON } from './assets/icons/icons';

const PageNotFound = React.lazy(() =>
	import('./component/notFound/pageNotFound')
);

function App() {
	let roleId = localStorage.getItem('lnkl34r');
	roleId = parseInt(roleId);

	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('xyzopsat');
		setIsToken(token);
	}, []);

	return (
		<div className="App">
			<Router>
				{' '}
				{!isToken ? (
					<Routes>
						{RouteAuth.map((route, index) => {
							return (
								<Route
									key={index}
									exact={route.exact}
									path={route.path}
									element={
										<Suspense
											fallback={
												<div
													style={{
														width: '100vw',
														height: '100vh',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}
												>
													<ICON.COMPANY />{' '}
												</div>
											}
										>
											{route.element}
										</Suspense>
									}
								/>
							);
						})}
						<Route
							path="*"
							element={
								<Suspense fallback="">
									<PageNotFound />
								</Suspense>
							}
						/>
					</Routes>
				) : (
					<ComponentLayout>
						{roleId === 4 ? (
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
								<Route
									path="*"
									element={
										<Suspense fallback="">
											<PageNotFound />
										</Suspense>
									}
								/>
							</Routes>
						) : (
							<Routes>
								{RouteMember.map((route, index) => {
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
								<Route
									path="*"
									element={
										<Suspense fallback="">
											<PageNotFound />
										</Suspense>
									}
								/>
							</Routes>
						)}
					</ComponentLayout>
				)}
			</Router>
		</div>
	);
}

export default App;
