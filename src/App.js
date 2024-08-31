import { GiButterflyFlower } from "react-icons/gi";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import AllItems from "./components/Gallery/AllItems";

function App() {
  return (
    <div className="font-primary">
      <div>
        <Header />
        <div className="text-center lg:py-10 pb-6 pt-12">
          <h2 className="font-semibold">Welcome in </h2>
          <h1
            style={{ textShadow: "2px 3px 4px rgb(163, 162, 162)" }}
            className="text-4xl font-secondary font-semibold text-gray-800"
          >
            <span className="text-main">A</span>brar Muthana Galler
            <span className="relative">
              y
              <span className="absolute">
                <GiButterflyFlower className="text-main -ml-9 -mt-6" />
              </span>
            </span>
          </h1>
        </div>
        <div className="lg:px-12 p-4">
          <AllItems />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
