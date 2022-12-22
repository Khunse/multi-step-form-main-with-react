import React from "react";
import {createRoot} from 'react-dom/client'
import App from "./App";
import './css/style.css';

let a=createRoot(document.getElementById('root'));

a.render(<App/>)