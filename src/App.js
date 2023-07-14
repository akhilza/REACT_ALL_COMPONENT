import './App.css';
import Navbar from './component/Navbar';


const links = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Contact", url: "/contact" },
];

function App() {
  return (
    <div className="">
          <Navbar  links={links}/>
    </div>
  );
}

export default App;
