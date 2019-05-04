import React from 'react';
import '../App.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Masonry from 'react-masonry-css'

class Portal extends React.Component{
   grid = () => {
    var items = [
        {id: 1, name: 'My First Item My First Item My First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First Item'},
        {id: 2, name: 'Another itemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First Item'},
        {id: 3, name: 'Third ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First Item'},
        {id: 4, name: 'Here is the FourthMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First Item'},
        {id: 5, name: 'High FiveMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First Item'},
        {id: 5, name: 'High FiveMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First Item'},
        {id: 5, name: 'High FiveMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItFirst ItemMy First Item'},
        {id: 5, name: 'High FiveMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First ItemMy First Ite First ItemMy First ItemMy First ItemMy First Item'}
      ];

      return items.map(function(item) {
        return <div key={item.id}>{item.name}</div>
      });
   }

  render() {
    const myBreakpointsAndCols = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
    
      return <MuiThemeProvider>
          <div className="portal">
            <div className="header">
                <div className="title">Angel Hack</div>
                <div className="tabs">
                    <div className="active">Applications</div>
                    <div>Selections</div>
                </div>
            </div>
            <Masonry 
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                breakpointCols={3}>
                {this.grid()}
            </Masonry>
          </div>
      </MuiThemeProvider>
  }
}

export default Portal;