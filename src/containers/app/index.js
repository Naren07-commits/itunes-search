import React from 'react';
import {Route} from 'react-router-dom'
import Home from '../home'


const App = () => (
    <div>
        <main id="main">
            {/* <span className='pushMenu' onClick={openNav}>&#9776;</span> */}
            <Route exact  path="/react-itune-search/" component={Home}/>
            <Route exact  path="/" component={Home}/>
        </main>
    </div>
);




export default App