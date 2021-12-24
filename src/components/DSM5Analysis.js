import { Link } from 'react-router-dom';
import { Component } from 'react';
import{Breakpoint,BreakpointProvider} from 'react-socks';
import bg1 from './images/bg1.jpg';

class PHQ8Analysis extends Component {  
    componentDidMount() {
        window.scrollTo(0, 0)
      } 
    render(){
        var sectionStyle = {
            width: "100%",
            height: "200px",
            
            backgroundImage: `url(${bg1})`
          };
    return (
        <BreakpointProvider>
        <Breakpoint medium down>
        <div>
        <div style={sectionStyle}>                       
                          <br/>
                          <h5  style={{color: "white"}}>You may have {sessionStorage.getItem("intensity")} {sessionStorage.getItem("disorder")}.</h5>                     
                          <br/><br/>
      {/* <h6 style={{color: "white"}}> This indicates symptoms of severe depression.</h6> */}
        </div>
  
  <section class="features">
  <div class="container">
      <div > <br/><br/><br/><br/>             
  <h6 style={{color: "#6F8BA4"}}>We recommended you to consult nearby professionals. Here are some recommendations for you.</h6><br/>
  </div>
      <div class="row">
          <div class="col-lg-12">
              <div class="feature-block d-lg-flex">
                  <div class="feature-item mb-5 mb-lg-0">
                      <div class="feature-icon mb-4">
                          <i class="icofont-hospital"></i>
                      </div>
                      <span>CPH Mental Health Counseling</span><br />
                      <span>Counselor</span>
                      <a href="https://www.psychologytoday.com/us/therapists/ny/buffalo/742982?sid=61728c4a66356&ref=4" target="_blank">
                          <i class="icofont-arrow-right"></i></a>
                      </div>
              
                  <div class="feature-item mb-5 mb-lg-0">
                      <div class="feature-icon mb-4">
                          <i class="icofont-doctor"></i>
                      </div>
                      <span>Ashley Maracle</span><br />
                      <span>Clinical Social Worker, LCSW-R</span>
                      <a href="https://www.psychologytoday.com/us/therapists/ny/buffalo/363184?sid=61728c4a66356&ref=2" target="_blank"><i class="icofont-arrow-right"></i></a>
                  </div>
              
                  <div class="feature-item mb-5 mb-lg-0">
                      <div class="feature-icon mb-4">
                          <i class="icofont-doctor-alt"></i>
                      </div>
                      <span>Brian Costello</span><br />
                      <span>Clinical Social Work/Therapist, LMSW, CASAC 2</span>
                      <a href="https://www.psychologytoday.com/us/therapists/ny/buffalo/352130?sid=61728c4a66356&ref=5" target="_blank"><i class="icofont-arrow-right"></i></a>
                      </div>
              </div>
          </div>
      </div>
  </div>
  </section>
  <div style={{width:"100%",height:100}}>
  </div>
  </div>
        </Breakpoint>
        <Breakpoint large up>
        <div>
  <section class="banner4">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-xl-7">
                    <div class="block">                       
                        <br /><br /><br /><br /><br /><h1  style={{color: "white"}}>You may have {sessionStorage.getItem("intensity")} {sessionStorage.getItem("disorder")}.</h1>                      
                        {/* <p style={{color: "white"}} class="mb-4 pr-5"> This indicates symptoms of severe depression.</p> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

<section class="features">
<div class="container">
    <div >
<h3 style={{color: "#6F8BA4"}}>We recommended you to consult nearby professionals. Here are some recommendations for you.</h3><br/>
</div>
    <div class="row">
        <div class="col-lg-12">
            <div class="feature-block d-lg-flex">
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-hospital"></i>
                    </div>
                    <span>CPH Mental Health Counseling</span><br />
                    <span>Counselor</span>
                    <a href="https://www.psychologytoday.com/us/therapists/ny/buffalo/742982?sid=61728c4a66356&ref=4" target="_blank">
                        <i class="icofont-arrow-right"></i></a>
                    </div>
            
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-doctor"></i>
                    </div>
                    <span>Ashley Maracle</span><br />
                    <span>Clinical Social Worker, LCSW-R</span>
                    <a href="https://www.psychologytoday.com/us/therapists/ny/buffalo/363184?sid=61728c4a66356&ref=2" target="_blank"><i class="icofont-arrow-right"></i></a>
                </div>
            
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-doctor-alt"></i>
                    </div>
                    <span>Brian Costello</span><br />
                    <span>Clinical Social Work/Therapist, LMSW, CASAC 2</span>
                    <a href="https://www.psychologytoday.com/us/therapists/ny/buffalo/352130?sid=61728c4a66356&ref=5" target="_blank"><i class="icofont-arrow-right"></i></a>
                    </div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
</Breakpoint>
      </BreakpointProvider>
            );
        }
    }    
export default PHQ8Analysis ;