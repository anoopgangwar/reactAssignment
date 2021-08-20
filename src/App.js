import logo from './logo.svg';
import './App.css';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Search from './app/components/Search';
import Result from './app/components/Result';

function App() {
  return (
    <div className="App">
     <Header/>
      <Search />
      <Result />
     <Footer/>
    </div>
  );
}

export default App;
