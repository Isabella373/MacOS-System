import './index.scss';

import React from 'react';

import Header from '../Header';
import Main from '../Main';

const App: React.FC = (): JSX.Element => (
    <div className="App">
        <Header />
        <Main />
    </div>
);

export default App;
