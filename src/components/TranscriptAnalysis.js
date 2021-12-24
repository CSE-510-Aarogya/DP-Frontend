import { Link, Redirect } from 'react-router-dom';
import { Component } from 'react';
import { Radar,Line,Bar } from 'react-chartjs-2';
import ReactWordcloud from 'react-wordcloud';

const data2 = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Positive words',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: '# of Neutral words',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
      stack: 'Stack 0',
    },
    {
      label: '# of Negative words',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 1',
    },
  ],
};

const options2 = {
  scales: {
    xAxes: {
        title: {
            display: true,
            text: "Per 5 sentences"
        }
    },
    y: {
      beginAtZero: true
    }
  }
};
const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};
  
class TranscriptAnalysis extends Component {  
    componentDidMount() {
        window.scrollTo(0, 0)
      } 

      componentWillUnmount() {
        sessionStorage.removeItem("label")
      }
      renderRedirect() {
        let email = sessionStorage.getItem("email")
        if (!email) {
          return <Redirect to = "/"/>
        }
      }
    render(){
      var therapistData = JSON.parse(sessionStorage.getItem("therapistData"))
      var freq = therapistData['word_freq']
      var words = therapistData['words']
      var wordCloud=[]
      for(var i = 0; i < words.length; i++){
        let w = {
          'text': words[i],
          'value': freq[i]
         }
         wordCloud.push(w);
      }
      //console.log(wordCloud)
    return (
        <div>
        {this.renderRedirect()}
        <div class="container">
        <h3>From the patient's conversation, he<strong><em>{sessionStorage.getItem("label") == 0 ? " does not ": ""}</em></strong> seems{sessionStorage.getItem("label") == 0 ? " to be ": ""} depressed</h3>
        <h4 style={{color: "#6F8BA4"}}>Here's our analysis!</h4><br/>
            <div class="row">
                <div class="col-lg-6 col-md-12 col-xl-6">
                <ReactWordcloud 
                options={options}
                words={wordCloud} />
                </div>

                  <div class="col-lg-6 col-md-12 col-xl-6">
                <div class="block">
                <h4>Word Cloud</h4><br/>
                </div>
                </div> 
                {/* <div class="col-lg-6 col-md-12 col-xl-6">
                <div class="block">
                <Bar data={sessionStorage.getItem("label") == 1 ? data2 : data4} options={options2} />
                
                </div>
                </div> */}
            </div>
        </div>

              <section class="features2">
              <div class="container">
                  <div >

              </div>
              
              </div>
              </section>
              
              
              </div>
            );
        }
    }    
export default TranscriptAnalysis ;