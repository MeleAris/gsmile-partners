
export default function NavBar({home}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
			<div className="container">
				<a href="/" className="navbar-brand">Gsmiles<span className="text-primary">Partners</span></a>

				<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent"
					aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="navbar-collapse collapse" id="navbarContent">
					<ul className="navbar-nav ml-auto">
						{home?(
							<>
								<li className="nav-item active">
									<a className="nav-link" href="/">Accueil</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/ense/liste">Entreprises</a>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<a className="nav-link" href="/">Accueil</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="/ense/liste">Entreprises</a>
								</li>
							</>
						)
						}
						
					</ul>
				</div>
			</div>
		</nav>
    );
}