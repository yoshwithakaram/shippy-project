import Dataheader from "../Dataheader/Dataheader";
import Datarow from "../Datarow/Datarow";


function DashboardAll(){
    return(
        <>
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