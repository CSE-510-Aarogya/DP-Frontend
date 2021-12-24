import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

class UploadTranscript extends Component {

    state = {
        selectedFile: null,
        data: null
    }

    constructor() {
        super()
        this.fileEl = React.createRef();
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      } 

      renderRedirect() {
        let email = sessionStorage.getItem("email")
        if (!email) {
          return <Redirect to = "/"/>
        }
      }

      handleSubmission(event) {
        event.preventDefault()

        let access_token = sessionStorage.getItem("access_token")
        
        let string_csv = JSON.stringify(this.state.data)
        

        axios(
        {
            url: 'http://18.216.173.124:8081/therapy/query_string_to_therapy_model/',
            method: "POST",
            data: string_csv,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
            },
        }
        )
        .then((response) => {
           let  result = response.data
            console.log(result)
            if (result) {
                console.log("setting label = " + result.Label)
                sessionStorage.setItem("label",  result.Label)
            } else {
                sessionStorage.removeItem("label")
            }
            sessionStorage.setItem("therapistData", JSON.stringify(result))
            this.props.history.push("/transcriptAnalysis")
        })
        .catch((err) => {
            console.log(err)
            sessionStorage.removeItem("label")
        })
      }


      csvToArray = (str, delimiter = "\t") => {
        const headers = str.slice(0, str.indexOf("\r")).split(delimiter);
        const rows = str.slice(str.indexOf("\r") + 1).split("\r");

        const arr = rows.map(function (row) {
            const values = row.split(delimiter);
            const el = headers.reduce(function (object, header, index) {
              object[header] = values[index].replace(/\n/g, '');
              return object;
            }, {});
            return el;
          });
          return arr;
      }

      changeHandler = (event) => {
        event.preventDefault()

        const input = event.target.files[0]

        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target.result
            // console.log("text = "+text)
            const data = this.csvToArray(text)

            this.setState({ data: data })
        }

        reader.readAsText(input)
      }

      delayRedirect = (event, path) => {
        const { history: { push } } = this.props;
        event.preventDefault();
        setTimeout(()=>{
            if (this.fileEl.current.value) {
                push(path)
            }
        }, 1000);
      }
    
    render(){
    return (
        <section class="banner2">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-md-12 col-xl-11">
                    <div class="block">    
                        {this.renderRedirect()}
                        <h1>Upload Patient's Transcript</h1>
                        <form>
                        <div class="form-group">
                            
                        <label class="custom-file-upload">
                            <span>
                                <input type="file" ref={this.fileEl} class="form-control  form-rounded" id="exampleTranscript" required onChange={this.changeHandler}/>
                            </span>
                        </label>
                        </div>
                        <div class="btn-container ">
                            <button onClick={(e) => {this.handleSubmission(e)}}  type="submit" class="btn btn-main-2 btn-icon btn-round-full">Generate Insights<i class="icofont-simple-right ml-2  "></i></button>
                        </div>
                        </form>   
                        <br /> <br /><br /><a href="https://drive.google.com/file/d/1Ker-r9BPY0pIagXmRBWkdSwExdXVBsD8/view?usp=sharing" target="_blank" download="300_TRANSCRIPT.csv">
            <h6 style={{color: "#6F8BA4"}}>Download Sample Transcript File</h6>
            </a>                  
                    </div>
                </div>
            </div>
        </div>
    </section>
            );
        }
    }    
export default UploadTranscript;