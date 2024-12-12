
import styles from "./App.module.css";
import { Hero } from "./componets/Hero/Hero";
import { NavBar } from "./componets/Navbar/Navbar";
import { About } from "./components/About/About";

function App() {
 return (
     <div className={styles.App}>
 <NavBar />
 <Hero />
 <About />
 </div>
 );
}

export default App
