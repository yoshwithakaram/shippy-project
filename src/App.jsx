import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Newcontract from './pages/Newcontract';
import Exporter from './pages/MyExporter'
import Export from './components/Export/Export'
import NewcontractImport from './pages/NewcontractImport'
import Ewaybill from './components/E-waybill/Ewaybill'
import MyExporter from './pages/MyExporter'
import Extraction from './pages/Extraction'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='newcontract' element={<Newcontract />}>
              <Route index element={<Navigate to="newcontract-import" replace />} />
              <Route path='newcontract-import' element={<NewcontractImport />} />
              <Route path='newcontract-export' element={<Export />} />
              <Route path='ewaybill' element={<Ewaybill />} />
            </Route>
            <Route path='exporter' element={<MyExporter/>} />
            <Route path='extraction' element={<Extraction/>}/>
          </Route>
        </Routes>
      </Router>

    
    </>
      
  )
}

export default App
