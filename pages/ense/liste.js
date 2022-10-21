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

    const [type, setType] = useState("");
    const [mot, setMot] = useState("");

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
        )
    }, []);

    const indexOfLoastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLoastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLoastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const choixType = (e) => {
        let value = e.target.value;
        setType(value);
    }

    const choixMot = (e) => {
        let value = e.target.value;
        setMot(value);
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
                <div className="row">
                    <div className="col">
                        <form action="#" className="form-search-blog form-filtre">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <select id="categories" name="type" onChange={choixType} className="custom-select bg-light">
                                        <option>Tous les types</option>
                                        <option value="pays">Pays</option>
                                        <option value="ville">ville</option>
                                    </select>
                                </div>
                                <input type="text" required className="form-control" name="mot" onChange={choixMot} placeholder="Entrer un mot clé..."/>
                            </div>
                        </form>
                    </div>
                </div>

                {error?
                    <div>Erreur</div>
                :!isLoaded?
                    <div>...</div>
                :
                    <div className="row my-5 page">
                        {currentItems.filter(function(val){
                            if (type == "pays") {
                                return val.pays.toLowerCase().includes(mot.toLocaleLowerCase());
                            }else if(type == "ville"){
                                return val.ville.toLowerCase().includes(mot.toLocaleLowerCase())
                            }else{
                                return val;
                            }
                        }).map(item => (
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