import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Home from './Components/Home';
import Planing from './Components/Planing';
import Statistics from './Components/Statistics';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Register from './Components/Register';

interface task {
  category: string;
  date: string;
  description: string;
  endTime: string;
  headline: string;
  id: string;
  startTime: string;
  timeSpent: number;
  active: boolean;
}

interface Props {
  tasks: task[];
  setTasks: React.Dispatch<React.SetStateAction<task[]>>;
  selectedTask: task;
  setselectedTask: React.Dispatch<React.SetStateAction<task>>;
  startTime: string;
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  updateTasks: boolean;
  setUpdateTasks: React.Dispatch<React.SetStateAction<boolean>>;
  newTask: task;
  setNewTask: React.Dispatch<React.SetStateAction<task>>;
}

function App() {
  const [page, setPage] = useState<string>('');
  const[login,setLogin] = useState<boolean>(false);
  const[logedin,setLogedin] = useState<boolean>(false);
  const [tasks, setTasks] = useState<task[]>([]);
  const [startTime, setStartTime] = useState<string>(
    new Date().toLocaleTimeString('sv-se',{hour: '2-digit', minute: '2-digit'})
  );
  const [date, setDate] = useState<string>(
    new Date().toLocaleDateString('sv-se')
  );
  const [updateTasks, setUpdateTasks] = useState<boolean>(false);
  const [selectedTask, setselectedTask] = useState<task>({
    category: '',
    date: date,
    description: '',
    endTime: new Date().toLocaleTimeString('sv-se',{hour: '2-digit', minute: '2-digit'}),
    headline: '',
    id: '',
    startTime: new Date().toLocaleTimeString('sv-se',{hour: '2-digit', minute: '2-digit'}),
    timeSpent: 0,
    active: false,
  });
  const [newTask, setNewTask] = useState<task>({
    category: '',
    date: date,
    description: '',
    endTime: new Date().toLocaleTimeString('sv-se',{hour: '2-digit', minute: '2-digit'}),
    headline: '',
    id: '',
    startTime: new Date().toLocaleTimeString('sv-se',{hour: '2-digit', minute: '2-digit'}),
    timeSpent: 0,
    active: false,
  });

  const props: Props = {
    tasks,
    setTasks,
    selectedTask,
    setselectedTask,
    startTime,
    setStartTime,
    date,
    setDate,
    updateTasks,
    setUpdateTasks,
    newTask,
    setNewTask,
  };

  useEffect(() => {
    if(localStorage.getItem('token')==undefined){
      setLogedin(false);
    }
    else{
      setLogedin(true);
    }
  }, []);

  useEffect(() => {
    let pageUrl = page;

    if (!pageUrl) {
      const queryparam = new URLSearchParams(window.location.search);
      const getUrl = queryparam.get('page');

      if (getUrl) {
        pageUrl = getUrl;
        setPage(getUrl);
      } else {
        pageUrl = 'homePage';
      }
    }

    window.history.pushState(null, '', `?page=${pageUrl}`);
  }, [page]);

  return (
    <>
      <div>
        <Navbar setLogedin={setLogedin} logedin={logedin} setLogin={setLogin} setPage={setPage} />
        {login &&<Login setLogedin={setLogedin} setLogin={setLogin} setPage={setPage}/>}
        {{
          homePage: <Home />,
          planing: <Planing {...props} />,
          statistics: (
            <Statistics setUpdateTasks={setUpdateTasks} updateTasks={updateTasks} selectedTask={props.selectedTask} setSelectedTask={props.setselectedTask}  />
          ),
          admin: <Admin />,
          register: <Register setPage={setPage}/>
        }[page]}
      </div>
    </>
  );
}

export default App;
