import React, { useState } from "react";
import TontineSection from "../../components/tontineSection";


interface Offer {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

function OffersTontine() { 
    const [data, setData] = useState<Offer[]>([
        { id: '1', name: 'Tontine A', description: 'Description de la tontine A', price: 100, image: '../../assets/images/avatar.webp' },
        { id: '2', name: 'Tontine B', description: 'Description de la tontine B', price: 200, image: '../../assets/images/avatar.webp' },
        { id: '3', name: 'Tontine A', description: 'Description de la tontine A', price: 100, image: '../../assets/images/avatar.webp' },
        { id: '4', name: 'Tontine B', description: 'Description de la tontine B', price: 200, image: '../../assets/images/avatar.webp' },
        { id: '5', name: 'Tontine A', description: 'Description de la tontine A', price: 100, image: '../../assets/images/avatar.webp' },
        { id: '6', name: 'Tontine B', description: 'Description de la tontine B', price: 200, image: '../../assets/images/avatar.webp' },
    ]);
    
    return (
        <TontineSection
            data={data}
        />
    );
}

export default OffersTontine;