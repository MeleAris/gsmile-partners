import Layout, {siteTitle} from "../../components/layout";
import Head from "next/head";
import NavBar from "../../components/navbar";
import { useEffect, useState } from 'react';

export default function Entreprise(){

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
            <div className="container pt-5 pb-5">
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

                {error?
                    <div>Erreur</div>
                :!isLoaded?
                    <div>...</div>
                :
                    <div className="row my-5">
                        {items.map(item => (
                            <div className="col-lg-4 py-3">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="post-thumb">
                                        <img src={item.profil} alt=""/>
                                    </div>
                                </div>
                                <div className="body">
                                    <h5 className="post-title"><a href={'/ense/'+item.id}>{item.nom}</a></h5>
                                    <div className="post-date">{item.description}</div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                }
            </div>
            
        </Layout>
    </div>
    );
}