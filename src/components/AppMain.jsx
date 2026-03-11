import { useState } from "react";

import AppButton from './AppButton'
import AppCard from './AppCard'

export default function AppMain({ languages }) {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className="container mt-5">

                {/* button */}
                {
                    languages.map(language => (

                        <AppButton key={language.id} title={language.title} onClick={() => setSelected(language)} isActive={selected?.id === language.id}/>

                    ))
                }


                {/* card */}
                {selected && (

                    <AppCard title={selected.title} description={selected.description} />
                    
                )}

            </div>
        </>
    )
}