import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD, DELETE } from "./Actions"
export default function Home() {
    const [Nom, SetNom] = useState('')
    const [Prenom, SetPrenom] = useState('')
    const dispatch = useDispatch()
    const [Message, SetMessage] = useState('')
    const Clients = useSelector(state => state.Clients)

    function Ajouter(event) {
        event.preventDefault()
        if (Nom.trim() && Prenom.trim()) {
            const Obj = { Nom, Prenom }
            dispatch(ADD(Obj))
            SetNom('')
            SetPrenom('')
            SetMessage('') 
        } else {
            SetMessage('Remplissez tous les champs !')
            setTimeout(() => SetMessage(''), 3000)
        }
    }
    function Supprimer(index){
        dispatch(DELETE(index))

    }

    function Modifier(index){
        
    }

    return (
        <div className="mt-5 text-center mb-5">
            <h1>Ajouter un client</h1>

            {Message && (
                <div className="alert alert-warning">
                    {Message}
                </div>
            )}

            <form onSubmit={Ajouter}>
                <label>Nom : </label>
                <input 
                    name="nom" 
                    type="text" 
                    value={Nom}
                    onChange={(e) => SetNom(e.target.value)} 
                />

                <label>Prenom : </label>
                <input 
                    name="prenom" 
                    type="text" 
                    value={Prenom}
                    onChange={(e) => SetPrenom(e.target.value)} 
                />
                <button type="submit">Ajouter</button>
            </form>

            <div>
                {Clients.map((e, index) => (
                    <div key={index}>
                    <p>{e.Nom} {e.Prenom}</p>
                    <button onClick={() => Supprimer(index)}>Supprimer</button>
                    <button onClick={() => Modifier(index)}>Modifier</button>
                    </div>
                ))}
            </div>

        </div>
    )
}