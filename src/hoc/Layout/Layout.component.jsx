import React, { Component } from 'react';
import Aux from '../Aux/Aux.component';

class Layout extends Component{
   
    render() {
        return(
            <Aux>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;