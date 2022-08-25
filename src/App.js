
import './App.css';
import Header from './components/Share/Header';
// import Home from './components/Home/Home';
import React, { Suspense } from 'react';
import loader from './assets/829.gif'
import { makeStyles } from '@material-ui/styles';

const useStyles=makeStyles({
  loaderContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh'
  },
  loaderImg:{
    width:'100px'
  }
})

function App() {
  const Home = React.lazy(() => import('./components/Home/Home'));
  const classes=useStyles()
  return (
    <div className='app'>
      <Header />
      <Suspense
        fallback={<div
          className={classes.loaderContainer}
          
        >
          <img  className={classes.loaderImg} src={loader} alt='loader' />
        </div>}
      >
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
