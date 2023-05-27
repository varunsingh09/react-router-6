import React from 'react';
import MainRoutes from './router/Routes'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='site-layout sidebar-responsive active'>
     
     {/** Sidebar */}
     <Sidebar/>

     {/** Inner container */}
    <MainRoutes/>
    </div>

  );
}

export default App;
