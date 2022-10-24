import { useEffect, useState } from 'react';
import { api } from "../public/const";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';
import Link from "next/link";

const containerStyle = {
    width: '100%',
    height: '100%'
  };

const center = {
    lat: 6.163284296223614,
    lng: 1.2161105679585265
  };

function Body(){

    const [error, setError] = useState(null);
    const [isLoad, setIsLoad] = useState(false);

    const [items, setItems] = useState([]);
    const [cert, setCert] = useState([]);
    const [prod, setProd] = useState([]);
    const [pays, setPays] = useState([]);

    const [pa, setPa] = useState("");
    const [ce, setCe] = useState("");
    const [po, setPo] = useState("");


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

    useEffect(()=>{
        fetch(api+"abonnes")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoad(true);
            setItems(result['hydra:member']);
        },
        (error) => {
            setIsLoad(false);
            setError(error);
        }
        );
        fetch(api+"certifications")
        .then(res => res.json())
        .then(
        (result) => {
            setCert(result['hydra:member']);
        });

        fetch(api+"produits")
        .then(res => res.json())
        .then(
        (result) => {
            setProd(result['hydra:member']);
        });

        fetch(api+"pays")
        .then(res => res.json())
        .then(
        (result) => {
            setPays(result['hydra:member']);
        });
    }, []);

    const handler_Pa = (e) => {
        let value = e.target.value;
        setPa(value);
    }
    const handler_Ce = (e) => {
        let value = e.target.value;
        setCe(value);
    }
    const handler_Po = (e) => {
        let value = e.target.value;
        setPo(value);
    }

    if(error) {
        return <div>Erreur: {error.message}</div>;
    }else if(!isLoad){
        return <div>...</div>
    }else {
    return isLoaded ?(
    <>
        <div className='filtre'>
            <div className="row">
				<form className="form-search-blog form-filtre">
                    <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select id="" name='Pays' onChange={handler_Pa} className="custom-select bg-light">
                                        <option value="">Pays</option>
                                        {pays.map(item => (
                                            <option value={item.id}>{item.nom}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select id="" name='Certif' onChange={handler_Ce} className="custom-select bg-light">
                                        <option value="">Certifications</option>
                                        {cert.map(item => (
                                            <option key={item.id} value={item.id}>{item.nom}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select id="" name='Prod' onChange={handler_Po} className="custom-select bg-light">
                                        <option value="">Produits</option>
                                        {prod.map(item => (
                                            <option key={item.id} value={item.id}>{item.nom}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    </div>
				</form>
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
                        <div className='widget-box anyClass'>
                            <h4>Nos partenaires</h4>
                            <div className='divider'></div>
                            {items.map(val =>(
                                <div className='blog-item' key={val.id}>
                                    <Link className='post-thumb' href={'/ense/details/'+val.id}>
                                        <img src={val.profil} alt="" height="100" width="100"/>
                                    </Link>
                                    <div className='content'>
                                        <h6 className='post-title'><Link href={'/ense/details/'+val.id}>{val.nom}</Link></h6>
                                        <div className='meta'>
                                            {val.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='col-lg-8 mb-5 mb-lg-0'>
                        <div className='maps-container' id='google-maps'>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={5}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                                {items.map(val =>(
                                    <Marker
                                    position={{lat: Number(val.latitude), lng: Number(val.longitude)}}
                                    title={val.nom}
                                    />
                                ))}
                                <></>
                            </GoogleMap>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    ): <>
        <div className='filtre'>
            <div className="row">
				<form className="form-search-blog form-filtre">
                    <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select id="" name='Pays' onChange={handler_Pa} className="custom-select bg-light">
                                        <option value="">Pays</option>
                                        {pays.map(item => (
                                            <option value={item.nom}>{item.nom}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select id="" name='Certif' onChange={handler_Ce} className="custom-select bg-light">
                                        <option value="">Certification</option>
                                        {cert.map(item => (
                                            <option key={item.id} value={item.nom}>{item.nom}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select id="" name='Prod' onChange={handler_Po} className="custom-select bg-light">
                                        <option value="">Produit</option>
                                        {prod.map(item => (
                                            <option key={item.id} value={item.nom}>{item.nom}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    </div>
				</form>
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
                        <div className='widget-box anyClass'>
                            <h4>Nos partenaires</h4>
                            <div className='divider'></div>
                            {items.map(val =>(
                                <div className='blog-item' key={val.id}>
                                    <a className='post-thumb' href={'/ense/'+val.id}>
                                        <img src={val.profil} alt=""/>
                                    </a>
                                    <div className='content'>
                                        <h6 className='post-title'><a href={'/ense/'+val.id}>{val.nom}</a></h6>
                                        <div className='meta'>
                                            {val.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='col-lg-8 mb-5 mb-lg-0'>
                        <div className='maps-container' id='google-maps'>
                            Erreur carte
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
}

export default React.memo(Body)