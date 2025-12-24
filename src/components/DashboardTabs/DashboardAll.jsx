import Dataheader from "../Dataheader/Dataheader";
import Datarow from "../Datarow/Datarow";


/**
 * DATA FLOW: DashboardAll Component - Displays All Shipments
 * 
 * This component renders the "All" tab content in the Dashboard.
 * Currently uses hardcoded/static data to render multiple Datarow components.
 * 
 * Data Flow:
 * 1. Component renders multiple Datarow components
 * 2. Passes label prop to each Datarow (e.g., "Importer 1", "Exporter 1")
 * 3. Each Datarow receives the label and renders shipment details
 * 4. Datarow passes label down to Datarowitem component
 * 
 * Props Flow: DashboardAll → Datarow (label prop) → Datarowitem (label prop) → UI Display
 * 
 * Note: Data is currently static/hardcoded. In a real application, this would fetch
 * data from an API and map over the array to render Datarow components.
 */
function DashboardAll(){
    return(
        <>
        {/* DATA FLOW: Each Datarow receives a label prop that identifies the shipment type */}
        <Datarow label="Importer 1"/>
        <Datarow label="Exporter 1"/>
        <Datarow label="Exporter 2"/>
        <Datarow label="Importer 2"/>
        <Datarow label="Importer 3"/>
        <Datarow label="Importer A"/>
        <Datarow label="Exporter 4"/>
        <Datarow label="Exporter C"/>
        <Datarow label="Importer 5"/>
        <Datarow label="Exporter X"/>
        <Datarow label="Exporter Z"/>
        </>
    );
}

export default DashboardAll