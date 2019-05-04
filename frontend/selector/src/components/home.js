import React from 'react';
import '../App.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";

class Home extends React.Component{
  render() {
      return <MuiThemeProvider>
      <div className="home">
          <div className="intro">
            <div>Welcome To Select-Proxy</div>
            <p style={{"fontSize":"24px"}}>An app which automates the process of selected the right candidate for your event.A quick hassle free solution saving tons of human effort and time.</p>
          </div>
          <div className="user">
                <div className="form">
                    <div className="hack-name">
                        <div className="icon"><img src="/images/computer-screen.png" /></div>
                            <div className="inp">
                                <TextField 
                                    fullWidth={true}                              
                                    hintText="Enter Name of Event"
                                />                           
                            </div>
                        </div>
                    <div className="hack-name">
                        <div className="icon"><img src="/images/profile.png" /></div>
                            <div className="inp">
                                <TextField
                                    fullWidth={true}                               
                                    hintText="Total Size"
                                />                           
                            </div>
                        </div>
                    <div className="hack-name">
                        <div className="icon"><img src="/images/github.png" /></div>
                        <div className="inp">
                        <SelectField floatingLabelText="Github" value={1} style={{"textAlign":"left","marginTop":"-16px"}} fullWidth={true}>
                            <MenuItem value={1} primaryText="Yes" />
                            <MenuItem value={2} primaryText="No" />
                        </SelectField>
                        </div>
                    </div>
                    <div className="hack-name">
                        <div className="icon"><img src="/images/linkedin-logo.png" /></div>
                        <div className="inp">
                        <SelectField floatingLabelText="Linkedin" value={1} style={{"textAlign":"left","marginTop":"-16px"}} fullWidth={true}>
                            <MenuItem value={1} primaryText="Yes" />
                            <MenuItem value={2} primaryText="No" />
                        </SelectField>
                        </div>
                    </div>
                    <div className="hack-name">
                        <div className="icon"><img src="/images/twitter.png" /></div>
                        <div className="inp">
                        <SelectField floatingLabelText="Social Profile" value={1} style={{"textAlign":"left","marginTop":"-16px"}} fullWidth={true}>
                            <MenuItem value={1} primaryText="Yes" />
                            <MenuItem value={2} primaryText="No" />
                        </SelectField>
                        </div>
                    </div>
                    <button className="submit"><Link to={"/portal"}> Submit</Link></button>
                </div>
          </div>
      </div>
      </MuiThemeProvider>
  }
}

export default Home;