export default function Filtre(){
    return (
        <div className="">
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
					<button className="btn btn-success">Filtrer <span className="mai-filter"></span></button>
				</div>
			</div>
        </div>
    );
}