import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Planing from './Components/Planing';
import Statistics from './Components/Statistics';
import Login from './Components/Login';
import Admin from './Components/Admin';

interface task {
  category: string;
  date: string;
  description: string;
  endTime: string;
  headline: string;
  id: string;
  startTime: string;
  timeSpent: number;
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
  const [page, setPage] = useState<string>('homePage');
  const [tasks, setTasks] = useState<task[]>([]);
  const [startTime, setStartTime] = useState<string>(
    new Date().toLocaleTimeString('sv-se')
  );
  const [date, setDate] = useState<string>(
    new Date().toLocaleDateString('sv-se')
  );
  const [updateTasks, setUpdateTasks] = useState<boolean>(false);
  const [selectedTask, setselectedTask] = useState<task>({
    category: '',
    date: date,
    description: '',
    endTime: new Date().toLocaleTimeString('sv-se'),
    headline: '',
    id: '',
    startTime: new Date().toLocaleTimeString('sv-se'),
    timeSpent: 0,
  });
  const [newTask, setNewTask] = useState<task>({
    category: '',
    date: date,
    description: '',
    endTime: new Date().toLocaleTimeString('sv-se'),
    headline: '',
    id: '',
    startTime: new Date().toLocaleTimeString('sv-se'),
    timeSpent: 0,
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
        <Navbar setPage={setPage} />
        {{
          homePage: <Home />,
          about: <About />,
          planing: <Planing {...props} />,
          statistics: (
            <Statistics setUpdateTasks={setUpdateTasks} updateTasks={updateTasks}  />
          ),
          admin: <Admin />,
          login: <Login />,
        }[page]}
      </div>
    </>
  );
}

export default App;
