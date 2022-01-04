import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import background from './img/background.png'

import Search from './components/Search';
import HomebrewSearch from './components/HomebrewSearch';

import AllFeats from './components/AllFeats';
import OneFeat from './components/OneFeat';

import AllClassFeats from './components/AllClassFeats';
import OneClassFeat from './components/OneClassFeat';

import AllSpells from './components/AllSpells';
import OneSpell from './components/OneSpell';

import HomebrewAllFeats from './components/HomebrewAllFeats';
import HomebrewOneFeat from './components/HomebrewOneFeat';
import CreateFeat from './components/CreateFeat';
import EditFeat from './components/EditFeat';

import HomebrewAllClassFeats from './components/HomebrewAllClassFeats';
import HomebrewOneClassFeat from './components/HomebrewOneClassFeat';
import CreateClassFeat from './components/CreateClassFeat';
import EditClassFeat from './components/EditClassFeat';

import HomebrewAllSpells from './components/HomebrewAllSpells';
import HomebrewOneSpell from './components/HomebrewOneSpell';
import CreateSpell from './components/CreateSpell';
import EditSpell from './components/EditSpell';


function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <div className="background">
    <BrowserRouter>
      <div className="App" className="d-flex flex-column align-items-center">
        <h1>DnD Info Cards</h1>
        <Link to="/"><button className="navbtn">Home</button></Link>
        <Link to="/homebrew"><button className="navbtn">Homebrew</button></Link>
        <hr/>


        <Switch>

          <Route exact path="/">
          <Search/>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="m-4">
                <AllSpells/>
              </div>
              <div className="d-flex justify-content-center">
                <div className="m-4">
                  <AllClassFeats/>
                </div><div className="m-4">
                  <AllFeats/>
                </div>
              </div>
            </div>
          </Route>

        <Route exact path="/search/:infoType/:searchName">
          <Search/>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="m-4">
                <AllSpells/>
              </div>
              <div className="d-flex justify-content-center">
                <div className="m-4">
                  <AllClassFeats/>
                </div><div className="m-4">
                  <AllFeats/>
                </div>
              </div>
            </div>
        </Route>

          <Route exact path="/spell/:index">
            <OneSpell/>
          </Route>

          <Route exact path="/classfeat/:index">
            <OneClassFeat/>
          </Route>

          <Route exact path="/feat/:index">
            <OneFeat/>
          </Route>
        </Switch>

          <Route exact path="/homebrew">
            <HomebrewSearch/>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="m-4">
                <HomebrewAllSpells/>
              </div>
              <div className="d-flex justify-content-center">
                <div className="m-4">
                  <HomebrewAllClassFeats/>
                </div><div className="m-4">
                  <HomebrewAllFeats/>
                </div>
              </div>
            </div>
          </Route>


          <Route exact path="/homebrewSearch/:infoType/:searchName">
          <HomebrewSearch/>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="m-4">
                <HomebrewAllSpells/>
              </div>
              <div className="d-flex justify-content-center">
                <div className="m-4">
                  <HomebrewAllClassFeats/>
                </div><div className="m-4">
                  <HomebrewAllFeats/>
                </div>
              </div>
            </div>
          </Route>


          <Route exact path="/homebrew/feat/:id">
            <HomebrewOneFeat/>
          </Route>

          <Route exact path="/feat/create/:id">
            <CreateFeat formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

          <Route exact path="/feat/edit/:id">
            <EditFeat formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>


          <Route exact path="/homebrew/classfeat/:id">
            <HomebrewOneClassFeat/>
          </Route>

          <Route exact path="/classfeat/create/:id">
            <CreateClassFeat formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

          <Route exact path="/classfeat/edit/:id">
            <EditClassFeat formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>


          <Route exact path="/homebrew/spell/:id">
            <HomebrewOneSpell/>
          </Route>

          <Route exact path="/spell/create/:id">
            <CreateSpell formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

          <Route exact path="/spell/edit/:id">
            <EditSpell formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>


        <div className="d-flex justify-content-center fixed-bottom">
          <a className="linkbtn" href="https://github.com/VirtualShaman/DnD_Cards">GitHub Link</a>
          <a className="linkbtn" href="https://www.dnd5eapi.co/docs/#feats-section">DnD API</a>
        </div>

      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
