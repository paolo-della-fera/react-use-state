import { useState } from "react";


export default function AppMain({ languages }) {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className="container mt-5">

                {/* button */}
                {
                    languages.map(language => (

                        <button onClick={() => setSelected(language)} type="button" className="btn btn-primary mx-3" key={language.id}>
                            {language.title}
                        </button>

                    ))
                }


                {/* card */}
                {selected && (
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title">{selected.title}</h5>
                            <p className="card-text">{selected.description}</p>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}