import React from 'react';
import {Switch, Router, Route} from "react-router-dom";
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import './style/style.css';
import { Link } from 'react-router';

export default ({children}) => {
  return <div>{children}</div>
};