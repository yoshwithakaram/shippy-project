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
import Ewaybill from './components/E-waybill/Ewaybill'
import MyExporter from './pages/MyExporter'
import Extraction from './pages/Extraction'
import DashboardAll from './components/DashboardTabs/DashboardAll'
import DashboardImport from './components/DashboardTabs/DashboardImport'
import DashboardExport from './components/DashboardTabs/DashboardExport'
import NewcontractImport from './components/NewContract/NewcontractImport'
import Myvendors from './pages/Myvendors';
import Support from './pages/Support';
import Myqueries from './pages/Myqueries'

/**
 * DATA FLOW: App Component - Root of Application
 * 
 * This is the main entry point for the Shippy application's routing structure.
 * 
 * Data Flow Pattern:
 * 1. Router wraps entire application for client-side routing
 * 2. Routes define URL-to-component mappings
 * 3. Home component acts as layout wrapper (contains Navbar, Sidebar, and Outlet)
 * 4. Nested routes render in parent's <Outlet /> component
 * 
 * Navigation Flow:
 * User clicks Sidebar button → navigate('/path') → Route matches → Component renders in Outlet
 */
function App() {
  return (
    <>
      {/* DATA FLOW: Router enables client-side navigation without page reloads */}
      <Router>
        <Routes>
          {/* DATA FLOW: Home is the layout wrapper - contains Sidebar, Navbar, and Outlet for child routes */}
          <Route path='/' element={<Home />}>
            {/* DATA FLOW: Dashboard has nested routes - renders in Home's Outlet */}
            <Route path='dashboard' element={<Dashboard />} >
              {/* DATA FLOW: Default redirect - when user visits /dashboard, automatically redirect to /dashboard/dashboard-all */}
              <Route index element={<Navigate to="dashboard-all" replace />} />
              {/* DATA FLOW: Nested routes render in Dashboard's Outlet - allow tab-based navigation */}
              <Route path='dashboard-all' element={<DashboardAll />} />
              <Route path='dashboard-import' element={<DashboardImport />} />
              <Route path='dashboard-export' element={<DashboardExport />} />
            </Route>

            {/* DATA FLOW: New Contract section with nested routes for import/export/ewaybill tabs */}
            <Route path='newcontract' element={<Newcontract />}>
              <Route index element={<Navigate to="newcontract-import" replace />} />
              <Route path='newcontract-import' element={<NewcontractImport />} />
              <Route path='newcontract-export' element={<Export />} />
              <Route path='ewaybill' element={<Ewaybill />} />
            </Route>
            {/* DATA FLOW: Single page routes - no nested routes, render directly in Home's Outlet */}
            <Route path='exporter' element={<MyExporter/>} />
            <Route path='extraction' element={<Extraction/>}/>
            <Route path='myvendors' element={<Myvendors/>}/>
            <Route path='support' element={<Support/>}/>
            <Route path='myqueries' element={<Myqueries/>}/>

          </Route>
        </Routes>
      </Router>

    
    </>
      
  )
}

export default App
