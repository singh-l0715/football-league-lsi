import React from 'react';
import { Link } from "react-router-dom";
import {style} from "../PageNotFoundLsi15/PageNotFoundLsi15.css"

function PageNotFoundLsi15() {
    return (
        <div>
             <section className="page_404">
	<div>
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		
        <h1>404</h1>

		<div className="contant_box_404">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for is not avaible!</p>
		
		<span className=".link_404">
            <Link to="/" >Go to Home</Link></span>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
        </div>
     
    )
}

export default PageNotFoundLsi15
