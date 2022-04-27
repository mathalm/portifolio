import Header from "../components/Header";
import Loader from "../components/Loader";
import Main from "../components/Main";
import Helmet from 'react-helmet'
import svg from '../images/SVGport.png'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet title="Portifólio">
        <link rel="icon" type="image/png" href={svg} sizes="16x16" />
      </Helmet>
      <Loader />
      <Header />
      <Main />
    </div>
  );
}

export default App;
