import { useContext, useState } from "react"
import context from "../context/Context"

export default function BtnUpdate(props) {

    const {getItems,updateItem} = useContext(context)


    const [text,setText] = useState("")
    const [input,setInput] = useState({
        name:props.name
    })

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            await updateItem(props.id,input.name)
            getItems()
        } catch (error) {
            setText(error)
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modalUpgrade"+props.id}>
                🖊️
            </button>

            <div className="modal fade" id={"modalUpgrade"+props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal actualizar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <input className="form-control my-2" name="name" onChange={handleChange} defaultValue = {props.name}></input>
                                <button className="btn btn-secondary" onClick={handleUpdate} type="submit">actualizar</button>
                            </form>
                        </div>
                        <div className="modal-footer text center">
                            <h6>{text}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}