import ModalAdd from "../components/ModalAdd";
import Table from "../components/Table";
import TableEntradas from "../components/TablaEntradas";
import ModalAddExistencia from "../components/ModalAddExistencia";
import TableSalida from "../components/TablaSalida";
export default function Home() {


    return(
        <>
            <ModalAdd></ModalAdd>
            <Table></Table>
            <ModalAddExistencia></ModalAddExistencia>
            <TableEntradas></TableEntradas>

            <TableSalida></TableSalida>
        </>
    )
}