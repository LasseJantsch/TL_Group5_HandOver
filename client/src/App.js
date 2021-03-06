import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Needy from './components/Needy'
import Gastro from './components/Gastro'
import Donator from './components/Donator'
import Contact from './components/Contact'
import CMS from './components/CMS'
import Stories from './components/Stories/Stories'
import Story from './components/Stories/Story'
import FourOFour from './components/404'
import Map from './components/Map'
import About from './components/About'

import { StoryContextProvider } from './Context/StoriesContext'
import { ContactProvider } from './Context/ContactContext'
import { CMSContextProvider } from './Context/CMSContext'
import { MapContextProvider } from './Context/MapContext'


function App() {

  const [hide, setHide] = useState()

  return (
    <BrowserRouter>
      <div className="App">
        {window.location.pathname !== "/cms" ? <Navbar/>: null}
          <Switch>  
            <Route exact path='/'>
              <StoryContextProvider> 
                <Home />
              </StoryContextProvider>
            </Route>
            <Route path="/stories">
              <StoryContextProvider> 
                <Stories />
              </StoryContextProvider>
            </Route>
            <Route path='/story/:id'>
              <StoryContextProvider> 
                <Story />
              </StoryContextProvider>
            </Route> 
            <Route path='/needy'>
              <Needy />
            </Route>
            <Route path='/gastro'>
              <Gastro />
            </Route>
            <Route path='/donator'>
              <Donator />
            </Route>
            <Route path='/contact'>
              <ContactProvider>
                <Contact />
              </ContactProvider>
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/map'>
              <MapContextProvider>
                <Map setHide= {setHide} hide={hide}/>
              </MapContextProvider>
            </Route>
            <Route path="/cms">
              <CMSContextProvider>
                <CMS />
              </CMSContextProvider> 
            </Route> 
            <Route path = "*">
              <FourOFour />
            </Route>
          </Switch> 
        {hide? null :<Footer/> }
      </div>
    </BrowserRouter> 
  )
}


export default App;

