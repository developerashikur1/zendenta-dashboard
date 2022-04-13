import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Notfound from "./Dashboard/Notfound";
import PatientPage from "./Dashboard/PatientPage/PatientPage";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/*' element={<Dashboard></Dashboard>}>
              <Route path="patientpage" element={<PatientPage/>}></Route>
              <Route path="*" element={<Notfound/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
