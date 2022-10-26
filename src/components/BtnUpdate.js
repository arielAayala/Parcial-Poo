import { useContext, useState } from "react"
import context from "../context/Context"

export default function BtnUpdate(props) {

    const {getItems,updateItem} = useContext(context)


    const [text,setText] = useState("")
    const [input,setInput] = useState({
        "descripcion":props.descripcion,
        "existenciasIniciales":props.existenciasIniciales

    })

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            await updateItem(props.id,input.descripcion,input.existenciasIniciales)
            getItems()
        } catch (error) {
            setText(error)
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modalActualizarExistencia"+props.id}>
                🖊️
            </button>

            <div className="modal fade" id={"modalActualizarExistencia"+props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal actualizar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <input className="form-control my-2" name="descripcion" onChange={handleChange} defaultValue = {props.descripcion}></input>
                                <input className="form-control my-2" name="existenciasIniciales" onChange={handleChange} defaultValue = {props.existenciasIniciales}></input>
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