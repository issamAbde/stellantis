import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <ProductList />
    </div>
  );
}

export default App;
