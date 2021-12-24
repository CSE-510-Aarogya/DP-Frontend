import { useLocation,Link } from 'react-router-dom';
import { Component, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import{Breakpoint,BreakpointProvider} from 'react-socks';
import { VictoryChart, VictoryPie,VictoryLine, VictoryScatter, VictoryGroup,VictoryLabel,VictoryAxis } from 'victory';

class CatPoint extends Component {
  render() {
    const {datum} = this.props; // VictoryScatter supplies x, y and datum
    var cat;
    if(datum.y == 1 )
      cat = "Love";
    else if(datum.y== 2 )
    cat = "Joy";
    else if(datum.y == 3 )
    cat = "Surprised";
    else if(datum.y == 4 )
     cat = "Sad";
    else if(datum._y == 5 )
     cat = "Fear";
    else if(datum._y == 6 )
     cat = "Disgust";
    else if(datum.y == 7 )
     cat = "Angry";
    return (
      <text fontSize={15}>
        {cat}
      </text>
    );
  }
}
function TwitterAnalysis() { 
  const [isOpen, setIsOpen] = useState(false);

const showModal = () => {
  setIsOpen(true);
};

const hideModal = () => {
  setIsOpen(false);
};
const [isOpen2, setIsOpen2] = useState(false);

const showModal2 = () => {
  setIsOpen2(true);
};

const hideModal2 = () => {
  setIsOpen2(false);
};
 
  window.scrollTo(0, 0)
  var tweetData = JSON.parse(sessionStorage.getItem("tweetData"))
  console.log(tweetData['emotions'])
  var sentiments = tweetData['sentiments']
  var neg = 0, pos=0, neut=0;
  for(var i = 0; i < sentiments.length; i++){
    if(sentiments[i] == -1)
    neg++;
    else if(sentiments[i] == 1)
    pos++
    else
    neut++;
  }
  
    return (
      <BreakpointProvider>
      <Breakpoint medium down>
      <div>
      <hr style={{backgroundColor:"#1AF286"}}/>
        <section>
        <div>
            <div>
                <div>
                <div>
                <VictoryChart>
                <VictoryLabel text="Monthly Mood Chart/Tweet" x={195} y={20} textAnchor="middle"
                 style={{ fontSize: 20 }}/>
          <VictoryGroup 
          // data={[
          //   { x: "Tweet 1", y: 2 },
          //   { x: "Tweet 2", y: 1 },
          //   { x: "Tweet 3", y: 5 },
          //   { x: "Tweet 4", y: 7 },
          //   { x: "Tweet 5", y: 3 }
          // ]}
          data ={tweetData['emotions']}
          domain={{ y: [0, 8] }}>
            <VictoryAxis dependentAxis
            style={{ tickLabels: { fontSize: 30} }}
      tickFormat={[
        " ",
        "😍",
        "😀",
        "😲",
        "😔",
        "😰",
        "🤢",
        "😡"
      ]}
    />
    <VictoryAxis/>
          <VictoryLine />
        <VictoryScatter
          dataComponent={<CatPoint/>}
          style={{ data: { fill: "#c43a31", type: "star" } }}
          data={tweetData['emotions']}         
        />
      </VictoryGroup>
      </VictoryChart><br />
                <hr/>
                <VictoryPie
                  colorScale={["cyan","tomato", "gold"]}
                  padAngle={({ datum }) => datum.y}
                  innerRadius={100}
                  labelRadius={({ innerRadius }) => innerRadius + 30 }
  data={[
    { x: "Positive", y: pos },
    { x: "Negative", y: neg },
    { x: "Neutral", y: neut }
  ]}
/>
                </div>
                </div>
            </div>
        </div>
    </section>

<section class="features2">
<div class="container">
    <div >
      <br/>
<h5>Feeling Low?</h5><br/>
<h6 style={{color: "#6F8BA4"}}>Try one of our recommended activities!</h6><br/>
</div>
    <div class="row">
        <div class="col-lg-12">
            <div class="feature-block d-lg-flex">
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-page"></i>
                    </div>
                    <span>Read an article about how small lifestyle changes can significantly improve your mental health</span>
                    <a href="https://www.psychologytoday.com/us/blog/where-science-meets-the-steps/201504/4-lifestyle-changes-will-boost-your-mental-health" target="_blank">
                        <i class="icofont-arrow-right"></i></a>
                    </div>
            
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-music-notes"></i>
                    </div>
                    <span>Soothe your mind with a thereaputic song from our carefully curated list</span>
                    <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs" target="_blank"><i class="icofont-arrow-right"></i></a>
                </div>
            
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-video-clapper"></i>
                    </div>
                    <span>Watch a funny clip to cheer yourself up</span>
                    <a href="https://www.youtube.com/watch?v=BGEAiUeiaKs" target="_blank"><i class="icofont-arrow-right"></i></a>
                    </div>
                    <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-law-document"></i>
                    </div>
                    <span>Take a DSM5 test to understand your condition more</span>
                    <Link to={'/dsm5'}><i class="icofont-arrow-right"></i></Link>
                    </div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
</Breakpoint>
      <Breakpoint large up>
        <div>
        <section class="banner3">
        <h3 style={{color: "#6F8BA4", marginLeft:"600px"}}>Your Analysis</h3><br/>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12 col-xl-5">
                </div>
                <div class="col-lg-7 col-md-12 col-xl-5" style={{marginTop:"110px"}}>
                {/* <Line data={data1} options={options} /><br /><br /> */}
                <VictoryChart>
                <VictoryLabel text="Monthly Mood Chart/Tweet" x={195} y={20} textAnchor="middle"
                 style={{ fontSize: 20 }}/>
          <VictoryGroup 
          // data={[
          //   { x: "Tweet 1", y: 2 },
          //   { x: "Tweet 2", y: 1 },
          //   { x: "Tweet 3", y: 5 },
          //   { x: "Tweet 4", y: 7 },
          //   { x: "Tweet 5", y: 3 }
          // ]}
          data ={tweetData['emotions']}
          domain={{ y: [0, 8] }}>
            <VictoryAxis dependentAxis
            style={{ tickLabels: { fontSize: 30} }}
      tickFormat={[
        " ",
        "😍",
        "😀",
        "😲",
        "😔",
        "😰",
        "🤢",
        "😡"
      ]}
    />
    <VictoryAxis/>
          <VictoryLine />
        <VictoryScatter
          dataComponent={<CatPoint/>}
          style={{ data: { fill: "#c43a31", type: "star" } }}
          data={tweetData['emotions']}         
        />
      </VictoryGroup>
      </VictoryChart>
      </div>          
                </div>
            </div>
            </section>
            <div class="row">
            <div class="col-lg-7 col-md-12 col-xl-4">
                </div>
                <div class="col-lg-7 col-md-12 col-xl-5">
                  <h4 style={{marginLeft:"200px"}}>Pattern of Words Used</h4>
                  <VictoryPie
                  colorScale={["cyan","tomato", "gold"]}
                  padAngle={({ datum }) => datum.y}
                  innerRadius={100}
                  labelRadius={({ innerRadius }) => innerRadius + 30 }
  data={[
    { x: "Positive", y: pos },
    { x: "Negative", y: neg },
    { x: "Neutral", y: neut }
  ]}
/>
            </div>
            </div>
        
   

<section class="features2">
<div class="container">
    <div >
<br/><h2>Feeling Low?</h2><br/>
<h3 style={{color: "#6F8BA4"}}>Try one of our recommended activities!</h3><br/>
</div>
    <div class="row">
        <div class="col-lg-12">
            <div class="feature-block d-lg-flex">
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-page"></i>
                    </div>
                    <span>Read an article about how small lifestyle chages can significantly improve your mental health</span>
                    <a href="https://www.psychologytoday.com/us/blog/where-science-meets-the-steps/201504/4-lifestyle-changes-will-boost-your-mental-health" target="_blank">
                        <i class="icofont-arrow-right"></i></a>
                    </div>
            
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-music-notes"></i>
                    </div>
                    <span>Soothe your mind with a thereaputic song from our carefully curated list</span>
                     <button type="button" class="btn" style = {{paddingLeft:"0px"}} onClick={showModal}>
                    <i class="icofont-arrow-right"></i></button>
                </div>

          <Modal animation={false} show={isOpen} onHide={hideModal}>
        <ModalHeader>
          <ModalTitle>What type of music would you fancy?</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <a href="https://www.youtube.com/watch?v=kpK4cDk2bRs" target="_blank"><label class="btn btn-outline-info" for="success-outlined">Instrumental</label></a>
        <a href="https://www.youtube.com/watch?v=VqhCQZaH4Vs" target="_blank"><label class="btn btn-outline-info" for="success-outlined">Jazz</label></a>
        <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs" target="_blank"><label class="btn btn-outline-info" for="success-outlined">Pop</label></a>
        <a href="https://www.youtube.com/watch?v=wfF0zHeU3Zs" target="_blank"><label class="btn btn-outline-info" for="success-outlined">Classical</label></a>

        </ModalBody>
        <ModalFooter>
          <button class="btn btn-danger" onClick={hideModal}>Cancel</button>
        </ModalFooter>
      </Modal>
            
                <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                        <i class="icofont-video-clapper"></i>
                    </div>
                    <span>Watch a funny clip to cheer yourself up</span>
                    <button type="button" class="btn" style = {{paddingLeft:"0px"}} onClick={showModal2}>
                    <i class="icofont-arrow-right"></i></button></div>

                     {/* <!-- Modal 2 --> */}

        <Modal animation={false} show={isOpen2} onHide={hideModal2}>
        <ModalHeader>
          <ModalTitle>What type of music would you fancy?</ModalTitle>
        </ModalHeader>
        <ModalBody> 
      <a href="https://www.youtube.com/watch?v=Xnk4seEHmgw" target="_blank"><label class="btn btn-outline-info" for="success-outlined">The Office</label></a>
    <a href="https://www.youtube.com/watch?v=q8WgsfkofOM" target="_blank"><label class="btn btn-outline-info" for="success-outlined">Friends</label></a>
    <a href="https://www.youtube.com/watch?v=S_acAHyAKuI" target="_blank"><label class="btn btn-outline-info" for="success-outlined">Schitt's Creek</label></a>
    <a href="https://www.youtube.com/watch?v=6ERddYRZU0E" target="_blank"><label class="btn btn-outline-info" for="success-outlined">Impractical Jokers</label></a>
        </ModalBody>
        <ModalFooter>
          <button class="btn btn-danger" onClick={hideModal2}>Cancel</button>
        </ModalFooter>
      </Modal>
      <div class="feature-item mb-5 mb-lg-0">
                <div class="feature-icon mb-4">
                        <i class="icofont-law-document"></i>
                    </div>
                    <span>Take a DSM-5 diagnosis to understand your condition more</span>
                    <Link to={'/dsm5'}><i class="icofont-arrow-right"></i></Link>
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
export default TwitterAnalysis