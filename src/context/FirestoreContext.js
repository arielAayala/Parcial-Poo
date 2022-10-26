import DbContext from "./Context"
import {setDoc,doc,updateDoc,deleteDoc,getDocs,collection} from "firebase/firestore"
import db from "../services/firebase"
import { useState } from "react"

export default function FirestoreContext(props) {
    const {children} = props

    const [items,setItems] = useState([])

    const incrementalID = async() =>{
        let count = -1
        const snap = await getDocs(collection(db,"items"))
        snap.forEach((i)=>{
            if(parseInt(i.id)  > count){
                count = parseInt(i.id)
            }
        })
        return count + 1
    }

    const getItems = async() =>{
        const lst = []
        const snap = await getDocs(collection(db,"items"))
        snap.forEach((i)=>{
            lst.push({
                ...i.data(),
                id:i.id
            })
        })
        setItems(lst)
    }

    const addItem = async(name) =>{
        await setDoc(doc(db,"items", (await incrementalID()).toString() ),{
            "name":name
        })
    }

    const deleteItem = async(id)=>{
        await deleteDoc(doc(db,"items",id))
    }

    const updateItem = async (id,name)=>{
        await updateDoc(doc(db,"items",id),{
            "name":name
        })
    }

    return(
        <DbContext.Provider value={{
            addItem,
            deleteItem,
            updateItem,
            getItems,
            lstItems:items
        }} >{children} </DbContext.Provider>
    )
}