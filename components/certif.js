import { useEffect, useState } from 'react';
import { api } from "../public/const";

export default function Certifications(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch(api+"certifications")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setItems(result['hydra:member']);
        },
        (error) => {
            setIsLoaded(false);
            setError(error);
        }
        )
    }, [])

    return (
        <>
            <div className="page-section">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        {/* <div className="subhead">Our services</div>  */}
                        <h2 className="title-section">Certifications de nos clients</h2>
                        <div className="divider mx-auto"></div>
                    </div>

                    <div className="row">
                        {items.map(item => (
                            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn" key={item.id}>
                                <div className="features">
                                    <div className="header mb-3" style={{backgroundRepeat: 'no-repeat',         backgroundImage: `url(${item.image})`, backgroundSize: 'cover'}}>
                                    </div>
                                    <h5>{item.nom}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}