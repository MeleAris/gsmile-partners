import Layout, {siteTitle} from "../../../components/layout";
import Head from "next/head";
import NavBar from "../../../components/navbar";
import { useEffect, useState } from 'react';
import { api } from "../../../public/const";
import dateFormat from 'dateformat';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react'

const containerStyle = {
    width: '100%',
    height: '100%'
  };

export const getStaticPaths = async () => {
	const res = await fetch(api+"abonnes");
	const datas = await res.json();
	const data = datas['hydra:member'];

	const paths = data.map(d => {
		return {
			params : { id: d.id.toString()}
		}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(api+"abonnes/" + id);
	const data = await res.json();

	return {
		props: {ense: data}
	}
}

const id = ({ense}) => {

    const [itemp, setItemp] = useState([]);
    const [itema, setItema] = useState([]);
    const [itemc, setItemc] = useState([]);

	const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM"
    })

    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds({lat: Number(ense.latitude), lng: Number(ense.longitude)});
        map.fitBounds(bounds);
        setMap(map);
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    useEffect(()=>{
		setItemp(ense['produits']);
		setItema(ense['actualites']);
		setItemc(ense['certifications']);
    }, []);

    return isLoaded?(
        <Layout>
		<Head>
			<title>Partner | {siteTitle}</title>
		</Head>	

		<NavBar/>

        <div>
            <div className="page-section pt-5">
		<div className="container">
			<nav aria-label="Breadcrumb">
				<ul className="breadcrumb p-0 mb-0 bg-transparent">
					<li className="breadcrumb-item"><a href="/">Accueil</a></li>
					<li className="breadcrumb-item"><a href="/ense/liste">Entreprises</a></li>
					<li className="breadcrumb-item active">{ense.nom}</li>
				</ul>
			</nav>

			<div className="row">
				<div className="col-lg-8">
					<div className="blog-single-wrap">
						<div className="header">
							<div className="post-thumb">
								<img src={ense.banniere} alt=""/>
							</div>
							<div className="meta-header mt-2 mb-2">
								<div className="post-sharer">
									{ense.facebook !==null?<a target='_blank' href={ense.facebook} className="btn social-facebook"><span
											className="mai-logo-facebook-f"></span></a>:<></>}
									
									{ense.youtube !==null?<a target='_blank' href={ense.youtube} className="btn social-youtube"><span
											className="mai-logo-youtube"></span></a>:<></>}
									
									{ense.linkedin !==null?<a target='_blank' href={ense.linkedin} className="btn social-linkedin"><span
											className="mai-logo-linkedin"></span></a>:<></>}
								</div>
								<div className="post-sharer">
									{ense.siteWeb !==null?<a target='_blank' href={ense.siteWeb} className="btn social-web"><span>Visiter mon site</span></a>:<></>}
								</div>
							</div>
						</div>
						<h1 className="post-title text-primary">{ense.nom}</h1>
						<div className="post-content">
							<p>{ense.presentation}</p>
							<blockquote className="quote">“{ense.description}”
								<span className="author">― {ense.nom}</span>
							</blockquote>
						</div>
					</div>

					<div className="comment-form-wrap pt-5">
						<h2 className="mb-5">Contacter</h2>
						<form action="#" className="">
							<div className="form-row form-group">
								<div className="col-md-6">
									<label htmlFor="name">Nom <span className="text-danger">*</span></label>
									<input type="text" className="form-control" id="name"/>
								</div>
								<div className="col-md-6">
									<label htmlFor="email">Email <span className="text-danger">*</span></label>
									<input type="email" className="form-control" id="email"/>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea name="msg" id="message" cols="30" rows="8" className="form-control"></textarea>
							</div>
							<div className="form-group">
								<input type="submit" value="Envoyer" className="btn btn-primary"/>
							</div>

						</form>
					</div>

				</div>
				<div className="col-lg-4">
					<div className="widget">
						<div className="widget-box">
							<h4 className="widget-title">Produits</h4>
							<div className="divider"></div>

							<ul className="categories">
								{itemp.map(p => (
									<li><a href="#">{p.nom}</a></li>
								))}
							</ul>
						</div>
                        <div className="widget-box">
							<h4 className="widget-title">Actualités</h4>
							<div className="divider"></div>
							{itema.map( a => (
								<div className="blog-item">
									<a className="post-thumb" href="">
										<img src={a.image} alt=""/>
									</a>
									<div className="content">
										<h6 className="post-title"><a href="#">{a.contenu}</a>
										</h6>
										<div className="meta">
											<a href="#"><span className="mai-calendar"></span>{a.createdAt}</a>
											<a href="#"><span className="mai-person"></span> Admin</a>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="widget-box">
							<h4 className="widget-title">Certifications</h4>
							<div className="divider"></div>

							<div className="tag-clouds">
								{itemc.map(c => (
									<a href="#" className="tag-cloud-link m-1">{c.nom}</a>
								))}
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className="row blogMap">
				<div className="col px-0">
					<div className="maps-container" id="google-maps">
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={{lat: Number(ense.latitude), lng: Number(ense.longitude)}}
							zoom={9}
							onLoad={onLoad}
							onUnmount={onUnmount}
						>
							<Marker
							position={{lat: Number(ense.latitude), lng: Number(ense.longitude)}}
							title={ense.nom}
							/>
							<></>
						</GoogleMap>
					</div>
				</div>
			</div>
		</div>
	    </div>
        </div>
        </Layout>
    ):<></>;
}

export default React.memo(id)