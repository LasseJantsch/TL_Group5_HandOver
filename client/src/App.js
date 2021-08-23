import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Needy from './components/Needy'
import Gastro from './components/Gastro'
import Donator from './components/Donator'
import Contact from './components/Contact'
import Story1 from './components/Story1'
import CMS from "./components/CMS/CMSComponent"
import { ContactProvider } from './Context/ContactContext'


class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/needy' component={Needy} />
              <Route path='/gastro' component={Gastro} />
              <Route path='/donator' component={Donator} />
              <Route path="/story1" component = {Story1} />
              <Route path='/story/:id' component ={Story1}/> 
              <ContactProvider> 
                <Route path='/contact' component={Contact} />
              </ContactProvider>
             
              {/* <Route path="/stories" component = {Stories} />  */}
              <Route path="/cms" component = {CMS} /> 
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

