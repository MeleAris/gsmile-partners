import Layout, {siteTitle} from "../../components/layout";
import Head from "next/head";
import NavBar from "../../components/navbar";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function (){

	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({});
    const [itemp, setItemp] = useState([]);
    const [itema, setItema] = useState([]);
    const [itemc, setItemc] = useState([]);
	const params = useParams()

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/abonnes/"+ 2)
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
			setItem(result);
            setItemp(result['produits']);
			setItema(result['actualites']);
			setItemc(result['certifications']);
			console.log(result['produits']);
        },
        (error) => {
            setIsLoaded(false);
            setError(error);
        }
        )
    }, []);

    return (
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
					<li className="breadcrumb-item active">{item.nom}</li>
				</ul>
			</nav>

			<div className="row">
				<div className="col-lg-8">
					<div className="blog-single-wrap">
						<div className="header">
							<div className="post-thumb">
								<img src={item.banniere} alt=""/>
							</div>
							<div className="meta-header mt-2 mb-2">
								<div className="post-sharer">
									{item.facebook !==null?<a target='_blank' href={item.facebook} className="btn social-facebook"><span
											className="mai-logo-facebook-f"></span></a>:<></>}
									
									{item.youtube !==null?<a target='_blank' href={item.youtube} className="btn social-facebook"><span
											className="mai-youtube-f"></span></a>:<></>}
									
									{item.linkedin !==null?<a target='_blank' href={item.linkedin} className="btn social-linkedin"><span
											className="mai-logo-linkedin"></span></a>:<></>}
									
									{item.siteWeb !==null?<a target='_blank' href={item.siteWeb} className="btn social-twitter"><span
											className="mai-globe"></span></a>:<></>}
								</div>
							</div>
						</div>
						<h1 className="post-title text-primary">{item.nom}</h1>
						<div className="post-content">
							<p>{item.presentation}</p>
							<blockquote className="quote">“{item.description}”
								<span className="author">― admin</span>
							</blockquote>
							<p>Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex,
								tristique sit amet
								suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget
								eleifend neque
								blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies
								elementum. Phasellus
								vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae
								vestibulum. Praesent id
								nibh arcu. Vivamus sagittis accumsan felis, quis vulputate</p>
						</div>
					</div>

					<div className="comment-form-wrap pt-5">
						<h2 className="mb-5">Contacter</h2>
						<form action="#" className="">
							<div className="form-row form-group">
								<div className="col-md-6">
									<label htmlFor="name">Name <span className="text-danger">*</span></label>
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
					<div className="maps-container">
						<div id="google-maps"></div>
					</div>
				</div>
			</div>
		</div>
	    </div>
        </div>
        </Layout>
    );
}