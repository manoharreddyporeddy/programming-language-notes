import React from 'react';

import AppComp1 from './AppComp1.jsx';
import RRAppComp3 from './RRAppComp3.jsx';
import MyHOCComponent, { MyComponent } from './AppCompHOC5.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <AppComp1 />
                <RRAppComp3 />
                <MyComponent data="my component" />
                <MyHOCComponent data="my component" />

                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />

                <br />
                <br />
                <br />
            </div>
        );
    }
}

// --------------
export default App;
