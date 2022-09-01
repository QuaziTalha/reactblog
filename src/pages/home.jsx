import React from "react"
import AllPost from "../containers/all-posts";
function Home() {
    return (
        <div>
            {/* <!-- Page Header --> */}
            {/* <!-- Set your background image for this header on the line below. --> */}
            <header
                className="intro-header"
                style={{ backgroundImage: "url('img/home-bg.jpg')" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <hr className="small" />
                                <span className="subheading">
                                    A Clean Blog Theme by Start Bootstrap
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
  
<AllPost/>
         
        </div>
    );
}
export default Home;