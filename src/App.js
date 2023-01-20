import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./pages/Content";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
