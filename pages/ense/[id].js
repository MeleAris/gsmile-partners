import Layout, {siteTitle} from "../../components/layout";
import Head from "next/head";
import NavBar from "../../components/navbar";

export default function (){
    return (
        <Layout>
		<Head>
			<title>Partner | {siteTitle}</title>
		</Head>	

		<NavBar/>

        <div>
            <div class="page-section pt-5">
		<div class="container">
			<nav aria-label="Breadcrumb">
				<ul class="breadcrumb p-0 mb-0 bg-transparent">
					<li class="breadcrumb-item"><a href="/">Accueil</a></li>
					<li class="breadcrumb-item"><a href="/ense/entreprise">Entreprises</a></li>
					<li class="breadcrumb-item active">Nom entreprise</li>
				</ul>
			</nav>

			<div class="row">
				<div class="col-lg-8">
					<div class="blog-single-wrap">
						<div class="header">
							<div class="post-thumb">
								<img src="../assets/img/blog/blog-1.jpg" alt=""/>
							</div>
							<div class="meta-header mt-2 mb-2">
								<div class="post-sharer">
									<a href="#" class="btn social-facebook"><span
											class="mai-logo-facebook-f"></span></a>
									<a href="#" class="btn social-twitter"><span class="mai-logo-twitter"></span></a>
									<a href="#" class="btn social-linkedin"><span class="mai-logo-linkedin"></span></a>
									<a href="#" class="btn social-twitter" aria-label="Site web"><span
											class="mai-globe"></span></a>
								</div>
							</div>
						</div>
						<h1 class="post-title text-primary">Nom de l'entreprise</h1>
						<div class="post-content">
							<p>MCSE boot camps have its supporters and its detractors. Some people do not understand why
								you should
								have to spend money on boot camp when you can get the MCSE study materials yourself at a
								fraction of the
								camp price. However, who has the willpower.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe aliquid perferendis
								neque eos
								commodi nulla, veniam ex mollitia, quod dignissimos id exercitationem corporis. At optio
								laudantium
								suscipit in nam!</p>
							<blockquote class="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I
								am out of
								control and at times hard to handle. But if you can't handle me at my worst, then you
								sure as hell don't
								deserve me at my best.”
								<span class="author">― Marilyn Monroe</span>
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

					<div class="comment-form-wrap pt-5">
						<h2 class="mb-5">Contacter</h2>
						<form action="#" class="">
							<div class="form-row form-group">
								<div class="col-md-6">
									<label for="name">Name <span class="text-danger">*</span></label>
									<input type="text" class="form-control" id="name"/>
								</div>
								<div class="col-md-6">
									<label for="email">Email <span class="text-danger">*</span></label>
									<input type="email" class="form-control" id="email"/>
								</div>
							</div>
							<div class="form-group">
								<label for="message">Message</label>
								<textarea name="msg" id="message" cols="30" rows="8" class="form-control"></textarea>
							</div>
							<div class="form-group">
								<input type="submit" value="Envoyer" class="btn btn-primary"/>
							</div>

						</form>
					</div>

				</div>
				<div class="col-lg-4">
					<div class="widget">
						<div class="widget-box">
							<h4 class="widget-title">Produits</h4>
							<div class="divider"></div>

							<ul class="categories">
								<li><a href="#">LifeStyle</a></li>
								<li><a href="#">Food</a></li>
								<li><a href="#">Healthy</a></li>
								<li><a href="#">Sports</a></li>
								<li><a href="#">Entertainment</a></li>
							</ul>
						</div>
                        <div class="widget-box">
							<h4 class="widget-title">Recent Post</h4>
							<div class="divider"></div>

							<div class="blog-item">
								<a class="post-thumb" href="">
									<img src="../assets/img/blog/blog-1.jpg" alt=""/>
								</a>
								<div class="content">
									<h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a>
									</h6>
									<div class="meta">
										<a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
										<a href="#"><span class="mai-person"></span> Admin</a>
										<a href="#"><span class="mai-chatbubbles"></span> 19</a>
									</div>
								</div>
							</div>

							<div class="blog-item">
								<a class="post-thumb" href="">
									<img src="../assets/img/blog/blog-2.jpg" alt=""/>
								</a>
								<div class="content">
									<h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a>
									</h6>
									<div class="meta">
										<a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
										<a href="#"><span class="mai-person"></span> Admin</a>
										<a href="#"><span class="mai-chatbubbles"></span> 19</a>
									</div>
								</div>
							</div>

							<div class="blog-item">
								<a class="post-thumb" href="">
									<img src="../assets/img/blog/blog-3.jpg" alt=""/>
								</a>
								<div class="content">
									<h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a>
									</h6>
									<div class="meta">
										<a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
										<a href="#"><span class="mai-person"></span> Admin</a>
										<a href="#"><span class="mai-chatbubbles"></span> 19</a>
									</div>
								</div>
							</div>

						</div>
						<div class="widget-box">
							<h4 class="widget-title">Certifications</h4>
							<div class="divider"></div>

							<div class="tag-clouds">
								<a href="" class="tag-cloud-link">Projects</a>
								<a href="#" class="tag-cloud-link">Design</a>
								<a href="#" class="tag-cloud-link">Travel</a>
								<a href="#" class="tag-cloud-link">Brand</a>
								<a href="#" class="tag-cloud-link">Trending</a>
								<a href="#" class="tag-cloud-link">Knowledge</a>
								<a href="#" class="tag-cloud-link">Food</a>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="row blogMap">
				<div class="col px-0">
					<div class="maps-container">
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