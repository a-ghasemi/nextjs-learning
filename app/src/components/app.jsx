import React from "react";
import { createRoot } from 'react-dom/client';

import MainPage from "./mainpage"

const app = document.getElementById('app');

console.log('App rendered');

const root = createRoot(app);
root.render(<MainPage />)
