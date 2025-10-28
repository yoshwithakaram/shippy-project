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
import DashboardAll from './components/DashboardTabs/DashboardAll'
import DashboardImport from './components/DashboardTabs/DashboardImport'
import DashboardExport from './components/DashboardTabs/DashboardExport'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='dashboard' element={<Dashboard />} >
            <Route index element={<Navigate to="dashboard-all" replace />} />
              <Route path='dashboard-all' element={<DashboardAll />} />
              <Route path='dashboard-import' element={<DashboardImport />} />
              <Route path='dashboard-export' element={<DashboardExport />} />
            </Route>

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
