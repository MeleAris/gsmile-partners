import Layout, {siteTitle} from "../../components/layout";
import Head from "next/head";
import Filtre from "../../components/filtre";
import Entreprises from "../../components/entreprises";
import NavBar from "../../components/navbar";

export default function Entreprise(){
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
                <Filtre/>

                <Entreprises/>
            </div>
            
        </Layout>
    </div>
    );
}