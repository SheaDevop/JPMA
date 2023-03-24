import React from 'react';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ProSidebarProvider } from 'react-pro-sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserRoute from './components/UserRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';


//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);


const App = () => {
  return (
    <>
      <ToastContainer/>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ProSidebarProvider>
          <BrowserRouter>
				    <Routes>
				  	  <Route path='/' element={<Home/>}/>
              <Route path='/search/location/:location' element={<Home/>}/>
              <Route path='/search/:keyword' element={<Home/>}/>
              <Route path='/login' element={<LogIn/>}/>
              <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC/></UserRoute>}/>
              <Route path='/user/me' element={<UserRoute><UserJobsHistoryHOC/></UserRoute>}/>
		  	  		<Route path='*' element={<NotFound/>}/>
			    	</Routes>
			    </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  )
}

export default App;



