import { useDispatch, useSelector } from "react-redux"
import { ADD, DELETE, UPDATE, SET_SEARCH } from "./Actions"
import { useState } from "react"

export default function Home() {
    const [Nom, SetNom] = useState('')
    const [Prenom, SetPrenom] = useState('')
    const dispatch = useDispatch()
    const [Message, SetMessage] = useState('')

    const Clients = useSelector(state => state.Clients)
    const SearchValue = useSelector(state => state.SearchValue)

    function Ajouter(event) {
        event.preventDefault()
        if (Nom.trim() && Prenom.trim()) {
            dispatch(ADD({ Nom, Prenom }))
            SetNom('')
            SetPrenom('')
            SetMessage('')
        } else {
            SetMessage('Remplissez tous les champs !')
            setTimeout(() => SetMessage(''), 3000)
        }
    }

    function Supprimer(index) {
        dispatch(DELETE(index))
    }

    function Modifier(index) {
        const NewNom = prompt('Entrer le nouveau nom :', Clients[index].Nom)
        const NewPrenom = prompt('Entrer le nouveau prénom :', Clients[index].Prenom)
        if (NewNom && NewPrenom) {
            dispatch(UPDATE({ Nom: NewNom, Prenom: NewPrenom }, index))
        }
    }

    function HandleSearch(e) {
        dispatch(SET_SEARCH(e.target.value))
    }

    const ClientsFiltres = Clients.filter(client =>
        client.Nom.toLowerCase().includes(SearchValue.toLowerCase()) ||
        client.Prenom.toLowerCase().includes(SearchValue.toLowerCase())
    )

    return (
        <div className="container mt-5 mb-5">
            {/* Formulaire d'ajout */}

            {Message && (
                <div className="alert alert-warning text-center">
                    {Message}
                </div>
            )}

            <form onSubmit={Ajouter} className="mb-4">
                <div className="row g-3 justify-content-center">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nom"
                            value={Nom}
                            onChange={e => SetNom(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Prénom"
                            value={Prenom}
                            onChange={e => SetPrenom(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2 d-grid">
                        <button type="submit" className="btn btn-primary">
                            Ajouter
                        </button>
                    </div>
                </div>
            </form>

            {/* Recherche */}
            <div>
                <input
                    type="text"
                    placeholder="Rechercher un client..."
                    value={SearchValue}
                    onChange={HandleSearch}
                />
            </div>

            {/* Liste filtrée */}
            <div className="row justify-content-center mt-3">
                {ClientsFiltres.length === 0 ? (
                    <p className="text-center">Aucun client correspondant à la recherche.</p>
                ) : (
                    ClientsFiltres.map((e, index) => (
                        <div key={index} className="col-md-6 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="card-title mb-0">
                                            {e.Nom} {e.Prenom}
                                        </h5>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-sm btn-outline-danger me-2"
                                            onClick={() => Supprimer(index)}
                                        >
                                            Supprimer
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => Modifier(index)}
                                        >
                                            Modifier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
