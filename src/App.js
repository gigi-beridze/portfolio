import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import '../src/js/cursor'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Background.sass'
import Background  from './components/Background'

const App = () => {
  return (
    <div className="App">
      <div>
        <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div id='title'>
  <span>
    PURE CSS
  </span>
  <span>
    PARALLAX PIXEL STARS
  </span>
</div>
        <NavBar />
        <Banner />
        </div>
        <Skills />
        <Projects />
        <Background />
    </div>
  );
}

export default App;
