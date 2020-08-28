import React from 'react';
import './homepage.styles.scss';
import Directory from "components/directory/directory.component";

class HomePage extends React.Component<any, any>
{
    render() {
        return <div className={'homepage'}>
            <Directory/>
        </div>
    }
}

export default HomePage;
