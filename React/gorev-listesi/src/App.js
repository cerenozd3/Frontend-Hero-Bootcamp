import React from "react";
import TaskList from "./components/TaskList";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Router>
          <Routes>
              <Route path="/" element={<TaskList/>}></Route>
              <Route path="/task/:taskId" element={<TaskDetail/>}></Route>
          </Routes>  
        </Router>
        </TaskProvider>
    </div>
  );
}

export default App;
