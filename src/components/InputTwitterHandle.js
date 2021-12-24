import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from "axios";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

class InputTwitterHandle extends Component {  

    constructor(props) {
        super(props);
        this.twitterHandle = React.createRef(); 
          
      }
    componentDidMount() {
        window.scrollTo(0, 0)
      } 
      submitHandler(event) {
        event.preventDefault();
        const twitterHandle = this.twitterHandle.current.value;
        
        if (twitterHandle.trim().length === 0) {
          alertify.alert('','Invalid username');
            return;
          }
          alertify.success('Generating Analysis. Please wait');
          let token = sessionStorage.getItem("access_token");
          axios.get('http://18.216.173.124:8081/tweet/query_to_tweeter_model/'+twitterHandle,
          { 'headers': { 'Authorization': `Bearer ${token}` } })
          .then((response) => {
            console.log("success1");
            let res = response.data
            sessionStorage.setItem("tweetData",JSON.stringify(res))
            this.props.history.push("/twitterAnalysis")
          })
          .catch(function (error) {
            console.log(error);
          });
        //console.log(this.state.res)  
    }
    render(){
    return (
        <section class="banner2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xl-9">
                    <div class="block">                      
                        <h1>Your Twitter Handle</h1>
                        <form>
                        <div class="form-group">
                        <input type="email" class="form-control  form-rounded" id="exampleInputTwitter"  
                        placeholder="johnjohnnydepp" required
                        ref={this.twitterHandle}/>
                        </div>
                        <div class="btn-container "
                        onClick={(e) => {
                            this.submitHandler(e);
                          }}>
                        <button type="submit" /* state={{ result: this.state.res }} */
                         class="btn btn-main-2 btn-icon btn-round-full">Generate Insights<i class="icofont-simple-right ml-2  "></i></button>                                   
                        </div>
                        </form>                     
                    </div>
                </div>
            </div>
        </div>
    </section>
            );
        }
    }    
export default InputTwitterHandle;