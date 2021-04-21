import "./App.css";
import PatientManagement from "./components/PatientManagement/PatientManagement";
import ReducerCount from "./components/ReducerCount/ReducerCount";
import Home from "./components/Home";
import ExploreRef from "./components/ExploreRef";

function App() {
  return (
    <div className="App">
      <ExploreRef />
      <Home />
      <ReducerCount />
      <PatientManagement />
    </div>
  );
}

export default App;
