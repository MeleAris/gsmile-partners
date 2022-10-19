

export default function Entreprise(data){
    return (
        <>
        	<div className="row my-5">
					<div className="col-lg-4 py-3">
					<div className="card-blog">
						<div className="header">
							<div className="post-thumb">
								<img src="../assets/img/blog/blog-1.jpg" alt=""/>
							</div>
						</div>
						<div className="body">
							<h5 className="post-title"><a href="/ense/1">Lorem ipsum</a></h5>
							<div className="post-date">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
						</div>
					</div>
				</div>
			</div>

			<nav aria-label="Page Navigation">
				<ul className="pagination justify-content-center">
					<li className="page-item disabled">
						<a className="page-link" href="#">Previous</a>
					</li>
					<li className="page-item"><a className="page-link" href="#">1</a></li>
					<li className="page-item active" aria-current="page">
						<a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
					</li>
					<li className="page-item"><a className="page-link" href="#">3</a></li>
					<li className="page-item">
						<a className="page-link" href="#">Next</a>
					</li>
				</ul>
			</nav>
    </>
    );
}