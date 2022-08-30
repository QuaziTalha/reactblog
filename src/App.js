import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
  export default function App() {
  return ( 
    <Router>
<div>
{/* <!-- Navigation --> */}
    <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/">Home</Link>
                        {/* <a href="">Home</a> */}
                    </li>
                    <li>
                        {/* <a href="about.html">About</a> */}
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <a href="post.html">Sample Post</a>
                    </li>
                    <li>
                        {/* <a href="contact.html">Contact</a> */}
                        <Link to="users">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container --> */}
    </nav>

  

    {/* <!-- Main Content --> */}
    <Routes>
          <Route path="/about" element={<About/>}/> 
          <Route path="/users" element={<Users/>}/> 
          <Route path="/" element={<Home/>}/> 
        </Routes>

    <hr/>

    {/* <!-- Footer --> */}
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <ul className="list-inline text-center">
                        <li>
                            <a href="/">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p className="copyright text-muted">Copyright &copy; Your Website 2016</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
    </Router>
  );
}
function Home() {
    return <div>
  {/* <!-- Page Header --> */}
    {/* <!-- Set your background image for this header on the line below. --> */}
    <header className="intro-header" style={{backgroundImage: "url('img/home-bg.jpg')"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="site-heading">
                        <h1>Clean Blog</h1>
                        <hr className="small"/>
                        <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    </div>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
