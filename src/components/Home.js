import { Link, BrowserRouter } from 'react-router-dom';
import { Component } from 'react';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import bg1 from './images/bg1.jpg';
import Footer from './Footer';
class Home extends Component { 
    constructor(props) {
        super(props);
      }
    render(){
        var sectionStyle = {
            width: "100%",
            height: "400px",
            
            backgroundImage: `url(${bg1})`
          };
    return (
        <BreakpointProvider>
  
        <div >   
        <Breakpoint medium down>
            <div
             style={{backgroundColor: "#44b49c",padding:10,padding:15}}
            >
                    <h1  style={{color: "white",fontSize:24,paddingTop:10}}>Your mental health matters</h1>
                        
                        <p style={{color: "white",fontSize:16,paddingTop:15}} class="mb-4 pr-5"> Your social media interactions can say a lot about your mental wellness.</p>
                        <div class="btn-container ">
                        <Link to={'/twitterInput'}  class="btn btn-main-2 btn-icon btn-round-full">Get your analysis now <i class="icofont-simple-right ml-2  "></i></Link>                     
                        </div>
                    </div>
                    
                    <section class="features">
        <div class="container" style={{marginTop:100}}>
            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-block d-lg-flex">
                        <div class="feature-item mb-5 mb-lg-0">
                            <div class="feature-icon mb-4">
                                <i class="icofont-surgeon-alt"></i>
                            </div>
                            <span>The National Mental Health Association says that more than 80% of people who get treatment say it helps.</span>
                        </div>
                    
                        <div class="feature-item mb-5 mb-lg-0">
                            <div class="feature-icon mb-4">
                                <i class="icofont-brain-alt"></i>
                            </div>
                            <span>By detecting early signs of depression, you can get help sooner and get better faster.</span>
                        </div>
                    
                        <div class="feature-item mb-5 mb-lg-0">
                            <div class="feature-icon mb-4">
                                <i class="icofont-heart-beat"></i>
                            </div>
                            <span>Self-care is how you take your power back.</span><br /><br />
                            <Link to ='/dsm5' class="btn btn-main btn-round-full">Get your DSM-5 Score</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                    </Breakpoint>

                    <Breakpoint large up>

                    <div >   
    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-xl-7">
                    <div class="block">
                        
                        <h1  style={{color: "white"}}>Your mental health matters</h1>
                        
                        <p style={{color: "white"}} class="mb-4 pr-5"> Your social media interactions can say a lot about your mental wellness.</p>
                        <div class="btn-container ">
                        <Link to={'/twitterInput'}  class="btn btn-main-2 btn-icon btn-round-full">Get your analysis now <i class="icofont-simple-right ml-2  "></i></Link>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="features">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-block d-lg-flex">
                        <div class="feature-item mb-5 mb-lg-0">
                            <div class="feature-icon mb-4">
                                <i class="icofont-surgeon-alt"></i>
                            </div>
                            <span>The National Mental Health Association says that more than 80% of people who get treatment say it helps.</span>
                        </div>
                    
                        <div class="feature-item mb-5 mb-lg-0">
                            <div class="feature-icon mb-4">
                                <i class="icofont-brain-alt"></i>
                            </div>
                            <span>By detecting early signs of depression, you can get help sooner and get better faster.</span>
                        </div>
                    
                        <div class="feature-item mb-5 mb-lg-0">
                            <div class="feature-icon mb-4">
                                <i class="icofont-heart-beat"></i>
                            </div>
                            <span>Self-care is how you take your power back.</span><br /><br />
                            <Link to ='/dsm5' class="btn btn-main btn-round-full">Get your DSM-5 Diagnosis</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </Breakpoint>
    
    </div>
    
    </BreakpointProvider>
    );
  }
}
  export default Home;
  