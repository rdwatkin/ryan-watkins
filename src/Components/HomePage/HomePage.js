import React from 'react';
import './HomePage.css';
import Ryan from "../../assets/img/ryan.JPG"

function HomePage() {


    return (
        <div class="container">
		<div class="content">
            <aside class="side"> 
				<figure class="picture">
					<div class="picture-shadow"></div>
					<img id="pictureImage" class="picture-image"
						src={Ryan} 
						alt="Portrait of Ryan Watkins"
						width="320"
						height="320"/> 
				</figure>
			</aside>
			<main class="about">
				<h1 class="name">
					Hi, I'm Ryan Watkins
				</h1>
				<p class="job">
			      	Software Engineer
			    </p>
				<hr class="hr"/>
				<div class="description">
					<p>
						I spend my time playing video games, playing basketball, video editing, coding and (occasionally) trying new things!
					</p> 
				</div>
				<div class="contact">
					<a class="button" href="mailto:rdwatkin@outlook.com">
			        Get in touch
			      </a>
		   		</div>
	  		</main>
        </div>
        </div>
    );
}

export default HomePage;