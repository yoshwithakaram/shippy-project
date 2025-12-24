# Data Flow Documentation - Shippy Application

## Overview
This document outlines the data flow architecture of the Shippy application, a React-based shipping and logistics management system.

## Application Architecture

### Technology Stack
- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.9.4
- **UI Library**: React Bootstrap 2.10.10 / Bootstrap 5.3.8
- **Build Tool**: Vite 7.1.12

## Component Hierarchy

```
App (Root)
└── Router
    └── Home (Layout Component)
        ├── Navbar
        ├── Sidebar
        └── Outlet (Main Content Area)
            ├── Dashboard
            │   ├── Headerbar
            │   ├── Subheader (Navigation Tabs)
            │   ├── Dataheader (Column Headers)
            │   └── Outlet (Dashboard Content)
            │       ├── DashboardAll
            │       │   └── Multiple Datarow components
            │       ├── DashboardImport
            │       └── DashboardExport
            ├── Newcontract
            │   └── Outlet
            │       ├── NewcontractImport
            │       ├── Export
            │       └── Ewaybill
            ├── MyExporter
            ├── Extraction
            ├── Myvendors
            ├── Support
            └── Myqueries
```

## Data Flow Patterns

### 1. Route-Based Navigation Flow

**Entry Point**: `main.jsx` → `App.jsx`

```
User Action (Click Navigation) 
    → Sidebar/SidebarButton component
    → useNavigate() hook triggers route change
    → React Router matches route
    → Renders corresponding page component
```

**Example Flow**:
```javascript
// User clicks "Dashboard" in Sidebar
Sidebar.jsx (line 52) → navigate('/dashboard')
    → React Router matches path='/dashboard'
    → Renders Dashboard component
    → Dashboard renders nested Outlet
    → Default redirect to 'dashboard-all'
    → Renders DashboardAll component
```

### 2. Component Data Flow (Props)

The application uses **unidirectional data flow** through props:

**Pattern**: Parent Component → Child Component (via props)

```
DashboardAll
    ↓ (passes label prop)
Datarow (label="Importer 1")
    ↓ (passes label prop)
Datarowitem (label="Importer 1")
    ↓ (renders label in UI)
Display: "Importer 1"
```

### 3. State Management Flow

The application uses **React's built-in state management** (useState hook):

#### Local Component State Example:

**Datarow Component** (`src/components/Datarow/Datarow.jsx`):
```javascript
const [isOpen, setIsOpen] = useState(false);
    ↓
User clicks toggle button
    ↓
toggleBox() function called
    ↓
setIsOpen(!isOpen) updates state
    ↓
Component re-renders
    ↓
Conditional rendering: {isOpen && <expanded content>}
```

**State Flow Pattern**:
1. State initialized with `useState(initialValue)`
2. User interaction triggers event handler
3. Event handler calls state setter function
4. React re-renders component with new state
5. UI updates based on new state value

### 4. Layout Data Flow

**Home Component as Layout Wrapper**:
```
Home.jsx
├── Navbar (Fixed position)
├── Sidebar (Fixed position)
└── <Outlet /> (Dynamic content based on route)
    └── Child routes render here
```

The `<Outlet>` component from React Router allows nested routing, where child route components are rendered within the parent layout.

## Key Data Patterns

### 1. Static Data (Hardcoded)
Currently, the application uses **hardcoded/mock data** for display:

- **Shipment Details**: Contract IDs, dates, PO numbers (in Datarow.jsx)
- **Task Lists**: Task names, completion status (in Datarow.jsx, lines 261-416)
- **Navigation Items**: Sidebar menu items (in Sidebar.jsx)

**Example from Datarow.jsx**:
```javascript
<p className="underlined">SC10099009</p>  // Static contract ID
<p>PO-3567</p>                            // Static PO number
<p>Bill Of Entry Extracted</p>           // Static status
```

### 2. Props-Based Data Flow
Data flows from parent to child components via props:

```
Parent: DashboardAll
    props: { label: "Importer 1" }
    ↓
Child: Datarow
    receives: { label }
    props: { label: "Importer 1" }
    ↓
Child: Datarowitem
    receives: { label }
    displays: label value in UI
```

### 3. Event-Driven State Updates
User interactions trigger state changes:

```
User Event (click, input, etc.)
    ↓
Event Handler Function
    ↓
State Setter (setState)
    ↓
Component Re-render
    ↓
UI Update
```

## Routing Data Flow

### Route Configuration (`App.jsx`)

```
/ (Home - Layout)
    ├── /dashboard
    │   ├── /dashboard/dashboard-all (default)
    │   ├── /dashboard/dashboard-import
    │   └── /dashboard/dashboard-export
    ├── /newcontract
    │   ├── /newcontract/newcontract-import (default)
    │   ├── /newcontract/newcontract-export
    │   └── /newcontract/ewaybill
    ├── /exporter
    ├── /extraction
    ├── /myvendors
    ├── /support
    └── /myqueries
```

### Navigation Flow Process

1. **User clicks navigation element** (e.g., SidebarButton)
2. **onClick handler** calls `navigate('/path')`
3. **React Router** matches the route path
4. **Route component** is rendered in the nearest `<Outlet />`
5. **Browser URL** updates (client-side routing)

**Example from Sidebar.jsx (lines 51-52)**:
```javascript
<SidebarButton
    label="Dashboard"
    onClick={() => { navigate('/dashboard') }}
/>
```

## Data Styling Flow

### Conditional Styling Based on Data

**Pattern**: Data value determines CSS class

```javascript
// Datarow.jsx (lines 50-53)
let borderClass = 'custom-border'; // default

if (label.startsWith('Exporter')) 
    borderClass = 'orange-border';
else if (label.startsWith('Importer')) 
    borderClass = 'green-border';
```

**Flow**:
```
Data (label prop) 
    → JavaScript logic checks value
    → Sets appropriate CSS class
    → Component renders with styled border
```

## Current Data Management Limitations

### No Global State Management
- **No Context API** usage
- **No Redux** or other state management library
- **No data fetching** from APIs (fetch/axios)
- **No backend integration**

### All data is:
1. **Hardcoded** in components
2. **Passed via props** from parent to child
3. **Managed locally** with useState for UI state only

## Future Data Flow Enhancements

To support a real application, consider implementing:

### 1. API Integration
```javascript
// Example future pattern
useEffect(() => {
    fetch('/api/shipments')
        .then(res => res.json())
        .then(data => setShipments(data))
}, []);
```

### 2. Global State Management
- **Context API** for shared state
- **Redux** or **Zustand** for complex state
- **React Query** for server state management

### 3. Data Models
Define TypeScript interfaces or PropTypes for data structures:
```javascript
// Example
interface Shipment {
    id: string;
    label: string;
    contractId: string;
    date: Date;
    poNumber: string;
    status: string;
}
```

## Summary

The Shippy application currently implements a **simple, component-based data flow**:

1. **Routing**: React Router manages page navigation
2. **Props**: Data flows unidirectionally from parent to child
3. **Local State**: useState manages UI interaction state
4. **Static Data**: Hardcoded values in components
5. **No Backend**: No API calls or global state management

**Primary Data Flow Direction**: 
```
App → Routes → Pages → Components (via props) → UI Elements
```

**State Flow Direction**: 
```
User Interaction → Event Handler → setState → Re-render → UI Update
```
