import Head from 'next/head';
import Layout, { siteTitle }from '../components/layout';
import NavBar from '../components/navbar';
import bg from '../public/assets/img/person/person_1.jpg';
import Filtre from '../components/filtre';

export default function Home() {
  //const img = require("assets/img/person/person_3.jpg");
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          {/* <script src="/assets/js/google-maps.js"/>
          <script async defer
		            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM&callback=initMap"></script> */}
        </Head>

        <NavBar home/>

        <div className='filtre'>
          <Filtre/>
        </div>

        <div className="page-section">
          <div className="containers-fluid mt-4">
            <div className="text-center justify-content-center mb-5">
              <h2 className="title-section">PARTENAIRES</h2>
              <p className="subhead">Petite description</p>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0 anyClass">
                <div className="list-group">
                  <a href="/ense/1" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                      <div className="col-lg-3 anyImg"
                        style={{backgroundRepeat: 'no-repeat', backgroundImage: `url(${bg.src})`}}>
                      </div>
                      <div className="col-lg-9">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                          risus varius blandit.</p>
                      </div>
                    </div>
                  </a>
                  <a href="blog.html" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                      <div className="col-lg-3 anyImg"
                        style={{backgroundRepeat: 'no-repeat', backgroundImage: `url(${bg.src})`}}>
                      </div>
                      <div className="col-lg-9">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                          risus varius blandit.</p>
                      </div>
                    </div>
                  </a>
                  <a href="blog.html" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                      <div className="col-lg-3 anyImg"
                        style={{backgroundRepeat: 'no-repeat', backgroundImage: `url(${bg.src})`}}>
                      </div>
                      <div className="col-lg-9">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                          risus varius blandit.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                      <div className="col-lg-3 anyImg"
                        style={{backgroundRepeat: 'no-repeat', backgroundImage: `url(${bg.src})`}}>
                      </div>
                      <div className="col-lg-9">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                          risus varius blandit.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                      <div className="col-lg-3 anyImg"
                        style={{backgroundRepeat: 'no-repeat', backgroundImage: `url(${bg.src})`}}>
                      </div>
                      <div className="col-lg-9">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                          risus varius blandit.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="row">
                      <div className="col-lg-3 anyImg"
                        style={{backgroundRepeat: 'no-repeat', backgroundImage: `url(${bg.src})`}} >
                      </div>
                      <div className="col-lg-9">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                          risus varius blandit.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-8 px-0">
                <div className="maps-container">
                  <div id="google-maps"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="container">
            <div className="text-center wow fadeInUp">
               <div className="subhead">Our services</div> 
              <h2 className="title-section">Principaux partenaires</h2>
              <div className="divider mx-auto"></div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-business"></span>
                  </div>
                  <h5>OnSite SEO</h5>
                  <p>We analyse your website's structure, internal architecture & other key</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-business"></span>
                  </div>
                  <h5>OnSite SEO</h5>
                  <p>We analyse your website's structure, internal architecture & other key</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-business"></span>
                  </div>
                  <h5>OnSite SEO</h5>
                  <p>We analyse your website's structure, internal architecture & other key</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-business"></span>
                  </div>
                  <h5>OnSite SEO</h5>
                  <p>We analyse your website's structure, internal architecture & other key</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    </div>
  )
}
