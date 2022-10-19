import Head from "next/head";
import Footer from "./footer";
import BackToTop from "./backToTop";

export const siteTitle = 'GSmilePartners';

export default function Layout({children, home}){
    return(
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Application de mise de promotion des clients de Give Smile Solution dans le cadre du projet GSmileAgri"/>

                <meta name="og:title" content={siteTitle}/>

                <script src="/assets/js/jquery-3.5.1.min.js"/>
                <script src="/assets/js/bootstrap.bundle.min.js"/>
                <script src="/assets/vendor/wow/wow.min.js"/>
                <script src="/assets/js/theme.js"/>
            </Head> 

            <main>
                <BackToTop/>
                {children}
            </main>

            <Footer/>
        </div>
    );
}