import { useContext, useEffect } from "react"
import DataTable from "react-data-table-component"
import context from "../context/Context"
import BtnDelete from "./BtnDelete"
import BtnUpdate from "./BtnUpdate"

export default function Table() {

    const {lstItems,getItems} = useContext(context)

    const col =[{
        name:"id",
        selector: i => i.id,
        sortable:true
    },{
        name:"nombre",
        selector:i => i.name,
        sortable:true
    },{
        name:"actualizar",
        selector:i => <BtnUpdate key={i.id} id={i.id} name={i.name} ></BtnUpdate>
    },{
        name:"borrar",
        selector:i=> <BtnDelete key={i.id} id={i.id} ></BtnDelete>
    }]

    useEffect(() => {
      getItems()
      console.log("cargar")
    }, [])
    

    return(
        <>
            <DataTable 
                columns={col} 
                data={lstItems}
                pagination>
            </DataTable>
        </>

    )
}