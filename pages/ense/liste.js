import Layout, {siteTitle} from "../../components/layout";
import Head from "next/head";
import NavBar from "../../components/navbar";
import { useEffect, useState } from 'react';
import {api} from '../../public/const';
import Pagination from "../../components/pagination";
import Link from "next/link";

const Entreprise = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);

    const [cert, setCert] = useState([]);
    const [prod, setProd] = useState([]);
    const [pays, setPays] = useState([]);

    const [pa, setPa] = useState("");
    const [ce, setCe] = useState("");
    const [po, setPo] = useState("");

    useEffect(()=>{
        fetch(api+"abonnes")
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

    const indexOfLoastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLoastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLoastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

    return (
    <div>
        <Layout>
            <Head>
                <title>Partenaires | {siteTitle}</title>
            </Head>

            <NavBar/>

            <div className="container">
                <div className="pages-banner">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                                    <li className="breadcrumb-item active">Entreprises</li>
                                </ul>
                            </nav>
                            <h1 className="text-center">Entreprises</h1>
                        </div>
                    </div>
                </div>
		    </div>
            <div className="container pt-5">
                <div className="rowa align-center">
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

                {error?
                    <div>Erreur</div>
                :!isLoaded?
                    <div>...</div>
                :
                    <div className="row my-5 page">
                        {currentItems.map(item => (
                            <div className="col-lg-4 py-3" key={item.id}>
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="post-thumb">
                                            <img src={item.profil} alt={item.nom}/>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <h5 className="post-title"><Link href={'/ense/details/'+item.id}>{item.nom}</Link></h5>
                                        <div className="post-date">{item.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="mt-3">
                            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    </div>
    );
}

export default Entreprise;