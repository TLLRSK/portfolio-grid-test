import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const [onProject, setOnProject] = useState({ onProject: false, projectName: null });

  const pathname = useLocation().pathname;
  const projectName = pathname.replace("/","");

  const gridItemList = [
    { path: '/a', title: 'a' },
    { path: '/b', title: 'b' },
    { path: '/c', title: 'c' },
    { path: '/d', title: 'd' }
  ];

  const displaySelectedItem = (path) => {
    return onProject.onProject && onProject.projectName !== path ? 'display-none' : 'ok';
  }
  
  const GridItem = ({ path, title, showProject }) => (
    <Link
      to={path}
      className={`grid-item ${displaySelectedItem(title)}`}>
        {title}
    </Link>
  );

  const setProject = () => {
    pathname === '/' ? 
      setOnProject({onProject: false, projectName: null})
      :
      setOnProject({onProject: true, projectName: projectName});
  }

  useEffect(() => {
    console.log(onProject);
    setProject();
  },[pathname])

  return (
    <>
      <div className={`grid ${onProject.onProject ? 'on-project' : ''}`}>
        {gridItemList.map(item => (
          <GridItem key={item.title} path={item.path} title={item.title}/>
        ))}
      </div>
    </>
  );
}

export default App;


 // <Link
    //   to={path}
    //   className={`grid-item ${displaySelectedItem(title)}`}
    //   onClick={() => showProject(title)}>
    //     {title}
    // </Link>