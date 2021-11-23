import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Search from './components/Search';

import AllFeats from './components/AllFeats';
import AllFeatsSearch from './components/AllFeatsSearch';
import OneFeat from './components/OneFeat';

import AllClassFeats from './components/AllClassFeats';
import AllClassFeatsSearch from './components/AllClassFeatsSearch';
import OneClassFeat from './components/OneClassFeat';

import AllSpells from './components/AllSpells';
import AllSpellsSearch from './components/AllSpellsSearch';
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
    <BrowserRouter>
      <div className="App" className="d-flex flex-column align-items-center">
      <h1>DnD Info Cards</h1>
      <Link to="/"><button>Home</button></Link>
      <Link to="/homebrew"><button>Homebrew</button></Link>
      <hr/>
        <Switch>

        <Route exact path="/search/:infoType/:searchName">
          <Search/>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="m-4">
                <AllSpellsSearch/>
              </div>
              <div className="d-flex justify-content-center">
                <div className="m-4">
                  <AllClassFeatsSearch/>
                </div><div className="m-4">
                  <AllFeatsSearch/>
                </div>
              </div>
            </div>
        </Route>

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

          <Route exact path="/homebrew">
          <Search/>
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

        <div className="d-flex justify-content-center fixed-bottom background">
          <a className="bg-dark px-1 border border-2 border-dark rounded" href="https://github.com/VirtualShaman/DnD_Cards">GitHub Link</a>
          <a className="bg-dark px-1 border border-2 border-dark rounded" href="https://www.dnd5eapi.co/docs/#feats-section">DnD API</a>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
