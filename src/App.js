import Greeting from "./component/Greetings/Greeting";
import Header from "./component/Header/Header";
import Task from "./component/Task/Task";
import Calendar from "./component/calendar/Calendar";
import './index.css'



function App() {  
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Calendar />
      <Task />
    </div>
  );
}

export default App;
