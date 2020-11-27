import React from 'react'

function Carousel(){
    return (
        <div>
            
            <div class="top-content">
    <div class="container">
        
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h1>return Devtube</h1>
                <div class="description">
                    <p>
                        I have a youtube channel called return Devtube where a few
                        friends and I create CS-related videos that include tutorials
                        and video discussions.
                        Here are some of our most popular videos!
                    </p>
                </div>
            </div>
        </div>
        
        
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        
                <div id="carousel-example" class="carousel slide">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example" data-slide-to="1"></li>
                        <li data-target="#carousel-example" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/aFtM4vnCY5k" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zz3yxONCt3U" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/z8JdYz8IsoA" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
        
            </div>
        </div>
        
    </div>
</div>

        </div>
    )
}

export default Carousel