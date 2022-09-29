import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import TasksList from './components/tasksList';

function App() {
  return (
    <div className="task-manager-app">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo} />
      </div>

      <div className="tasks-list-main">
        <h1>My tasks!</h1>
        <TasksList />
      </div>

    </div>
  );
}

export default App;
