import Map from '../components/map';
import { useEffect, useState } from 'react';

export default function Body(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/abonnes")
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
    }, []);

    if(error) {
        return <div>Erreur: {error.message}</div>;
    }else if(!isLoaded){
        return <div>...</div>
    }else {
    return (
    <>
        <div className='filtre'>
            <div className="row">
				<div className="col-sm-10">
					<form action="#" className="form-search-blog form-filtre">
						<div className="input-group">
							<div className="input-group-prepend">
								<select id="categories" className="custom-select bg-light">
									<option>Tous les types</option>
									<option value="pays">Pays</option>
									<option value="...">...</option>
								</select>
							</div>
							<input type="text" className="form-control" placeholder="Entrer un mot clé.."/>
						</div>
					</form>
				</div>
				<div className="col-sm-2 text-sm-center">
					<button className="btn btn-success">Appliquer</button>
				</div>
			</div>
        </div>

        <div className="page-section">
            <div className="containers-fluid mt-4">
                <div className="text-center justify-content-center mb-5">
                    <h2 className="title-section">PARTENARIATS</h2>
                    <p className="subhead">Nous travaillons avec des clients présents dans plusieurs pays de la sous région</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        {/* <div className="list-group">
                        {items.map(item => (
                            <a href={'/ense/'+item.id} className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="row">
                                <div className="col-lg-3 anyImg"
                                style={{backgroundRepeat: 'no-repeat', backgroundImage: `url(${item.profil})`, backgroundSize: 'cover'}}>
                                </div>
                                <div className="col-lg-9">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{item.nom}</h5>
                                </div>
                                <p>{item.description}</p>
                                </div>
                            </div>
                            </a>
                        ))}
                        </div> */}
                        <div className='widget-box anyClass'>
                            <h4>Nos partenaires</h4>
                            <div className='divider'></div>
                            {items.map(item =>(
                                <div className='blog-item'>
                                    <a className='post-thumb' href={'/ense/'+item.id}>
                                        <img src={item.profil} alt=""/>
                                    </a>
                                    <div className='content'>
                                        <h6 className='post-title'><a href={'/ense/'+item.id}>{item.nom}</a></h6>
                                        <div className='meta'>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='col-lg-8 mb-5 mb-lg-0'>
                        <div className='maps-container' id='google-maps'>
                        <Map/>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    );
}
}