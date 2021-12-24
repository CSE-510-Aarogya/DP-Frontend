import Home from "./components/Home";
import { Switch, HashRouter, Route, withRouter, Redirect } from "react-router-dom";
import InputTwitterHandle from "./components/InputTwitterHandle";
import { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import "./components/css/style.css";
import Footer from "./components/Footer";
import FormDSM5 from "./components/FormDSM5";
import Level2Anxiety from "./components/Level2Anxiety";
import Level2Abuse from "./components/Level2Abuse";
import Level2Mania from "./components/Level2Mania";
import Level2Depression from "./components/Level2Depression";
import TwitterAnalysis from "./components/TwitterAnalysis";
import DSM5Analysis from "./components/DSM5Analysis";
import TherapistLogin from "./components/TherapistLogin";
import TherapistSignUp from "./components/TherapistSignUp";
import UploadTranscript from "./components/UploadTranscript";
import TranscriptAnalysis from "./components/TranscriptAnalysis";
import Contact from "./components/Contact";
import Services from "./components/Services";

class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    loggedIn: false,
    email: ""
  }

  componentDidMount() {
    let email = sessionStorage.getItem("email")
        if (email) {
            this.setState({ loggedIn: true, email: email })
        } else {
            this.setState({ loggedIn: false, email: "" })
        }
        console.log(this.state.loggedIn)

    window.addEventListener("storage_event", e => {
        let email = sessionStorage.getItem("email")
            if (email) {
                this.setState({ loggedIn: true, email: email })
                console.log(this.state.loggedIn)
            } else {
                this.setState({ loggedIn: false, email: "" })
            }
          console.log(this.state.loggedIn)
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <HashRouter>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route
              path="/twitterInput"
              component={withRouter(InputTwitterHandle)}
            />
            <Route
              path="/twitterAnalysis"
              component={withRouter(TwitterAnalysis)}
            />
            <Route path="/contact" component={withRouter(Contact)} />
            <Route path="/services" component={withRouter(Services)} />
            <Route path="/dsm5" component={withRouter(FormDSM5)} />
            <Route path="/Anxiety" component={withRouter(Level2Anxiety)} />
            <Route path="/Mania" component={withRouter(Level2Mania)} />
            <Route path="/Depression" component={withRouter(Level2Depression)} />
            <Route path="/Abuse" component={withRouter(Level2Abuse)} />
            <Route path="/DSM5Analysis" component={withRouter(DSM5Analysis)} />
            <Route path="/login" component={withRouter(TherapistLogin)} />
            <Route path="/signup" component={withRouter(TherapistSignUp)} />
            <Route
              path="/uploadTranscript"
              component={withRouter(UploadTranscript)}
            >
              {!this.state.loggedIn && (<Redirect from="/#/uploadTranscript" to="/login" />)}
            </Route>
            <Route
              path="/transcriptAnalysis"
              component={withRouter(TranscriptAnalysis)}
              >
              {!this.state.loggedIn && (<Redirect from="/#/transcriptAnalysis" to="/login" />)}
            </Route>
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}
export default App;
