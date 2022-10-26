import { useContext } from "react"
import context from "../context/Context"

export default function BtnDelete(props) {

    const {getItems,deleteItem} = useContext(context)

    const handleDelete = async() =>{
        try {
            await deleteItem(props.id)
            getItems()
        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <button onClick={handleDelete} className="btn btn-secondary">❌</button>
    )
}