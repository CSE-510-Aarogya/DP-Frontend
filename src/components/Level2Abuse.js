import { Link, BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Component } from 'react';
import{Breakpoint,BreakpointProvider} from 'react-socks';

class Level2Abuse extends Component { 
  constructor(props) {
    super(props);      
  }
    componentDidMount() {
        window.scrollTo(0, 0)
      } 
      handleSubmit = () => {
        sessionStorage.setItem("disorder", "Substance Abuse");
        var q1 = document.querySelector("input[id=q1]:checked").value;
        var q2 = document.querySelector("input[id=q2]:checked").value;
        var q3 = document.querySelector("input[id=q3]:checked").value;
        var q4 = document.querySelector("input[id=q4]:checked").value;
        var q5 = document.querySelector("input[id=q5]:checked").value;
        var q6 = document.querySelector("input[id=q6]:checked").value;
        var q7 = document.querySelector("input[id=q7]:checked").value;

        var sub = parseInt(q1)+parseInt(q2)+parseInt(q3)+parseInt(q4)+parseInt(q5)+parseInt(q6)+parseInt(q7);
        if( sub <= 2)
          sessionStorage.setItem("intensity", "No/Mild");

        else
          sessionStorage.setItem("intensity", "Extreme");

       this.props.history.push("/DSM5Analysis")
      } 
    render(){
    return (
      <BreakpointProvider>
      <Breakpoint medium down>
      <div class="container">
      <hr style={{backgroundColor:"#1AF286"}}/>
        <h3>LEVEL 2 — Substance-Abuse Adult</h3><br />
        <h6 style={{color: "#6F8BA4"}}>During the past TWO (2) WEEKS, about how often did you use any of the following  medicines ON YOUR OWN, that is, without a doctor’s prescription, in greater amounts  or longer than prescribed?

</h6>
<form>
        <div class="container mt-sm-5 my-5">

        <div class="question mx-auto">    
        <Card sx={{ maxWidth: 900 }}>
      
        <CardContent>
          <div class="question1 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group1">
          <div class="py-2 h6"><b>Painkillers (like Vicodin) </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q1" value="0" name="group1" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" value="1" id="q1" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" value="2" id="q1" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" value="3" id="q1" name="group1"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q1" value="4" name="group1"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>
          
    <div class="question2 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group2">
          <div class="py-2 h6"><b>Stimulants (like Ritalin, Adderall) </b></div>
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q2" value="0" name="group2" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q2" value="1" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q2" value="2" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q2" value="3" name="group2"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q2" value="4" name="group2"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>

    <div class="question3 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group3">
          <div class="py-2 h6"><b>Sedatives or tranquilizers (like sleeping  pills or Valium)</b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q3" value="0" name="group3" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q3" value="1" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q3" value="2" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q3" value="3" name="group3"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q3" value="4" name="group3"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

        </CardContent>

    </Card>
    </div>

    <h4 style={{color: "#6F8BA4"}}> or Drugs like
</h4>

   

    <div class="question mx-auto my-4">    
        <Card sx={{ maxWidth: 700 }}>
        <CardContent>
          <div class="question4 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group4">
          <div class="py-2 h6"><b>Marijuana </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q4" value="0" name="group4" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q4" value="1" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q4" value="2" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q4" value="3" name="group4"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q4" value="4" name="group4"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

    <div class="question5 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group5">
          <div class="py-2 h6"><b>Cocaine or crack </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q5" value="0" name="group5" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q5" value="1" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q5" value="2" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q5" value="3" name="group5"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q5" value="4" name="group5"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

    <div class="question6 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group6">
          <div class="py-2 h6"><b>Hallucinogens (like LSD) </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q6"value="0" name="group6" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q6" value="1" name="group6"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q6" value="2" name="group6"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q6" value="3" name="group6"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q6" value="4" name="group6"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

    <div class="question7 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group7">
          <div class="py-2 h6"><b>Methamphetamine (like speed)</b></div>
    
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q7" value="0" name="group7" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q7" value="1" name="group7"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q7" value="2" name="group7"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q7" value="3" name="group7"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q7" value="4" name="group7"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div> 
        </CardContent>
    </Card>
    </div>

    
    

    
   

</div>
                        <div class="btn-container" style={{float:"right"}}>
                        <button onClick= {this.handleSubmit} type="submit" class="btn btn-main-2 btn-icon btn-round-full">Generate Insights<i class="icofont-simple-right ml-2  "></i></button>                                   
                       </div>
</form>
<div style={{width:"100%",height:150}}>
</div>
</div>
      </Breakpoint>
      <Breakpoint large up>
      <div class="container">
        <h2>LEVEL 2—Substance-Abuse-Adult</h2><br />
        <h4 style={{color: "#6F8BA4"}}>During the past TWO (2) WEEKS, about how often did you use any of the following  medicines ON YOUR OWN, that is, without a doctor’s prescription, in greater amounts  or longer than prescribed?

</h4>
<form>
        <div class="container mt-sm-5 my-5">

        <div class="question mx-auto">    
        <Card sx={{ maxWidth: 900 }}>
      
        <CardContent>
          <div class="question1 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group1">
          <div class="py-2 h6"><b>Painkillers (like Vicodin) </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q1" value="0" name="group1" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" value="1" id="q1" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" value="2" id="q1" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" value="3" id="q1" name="group1"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q1" value="4" name="group1"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>
          
    <div class="question2 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group2">
          <div class="py-2 h6"><b>Stimulants (like Ritalin, Adderall) </b></div>
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q2" value="0" name="group2" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q2" value="1" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q2" value="2" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q2" value="3" name="group2"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q2" value="4" name="group2"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>

    <div class="question3 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group3">
          <div class="py-2 h6"><b>Sedatives or tranquilizers (like sleeping  pills or Valium)</b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q3" value="0" name="group3" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q3" value="1" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q3" value="2" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q3" value="3" name="group3"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q3" value="4" name="group3"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

        </CardContent>

    </Card>
    </div>

    <h4 style={{color: "#6F8BA4"}}> or Drugs like
</h4>

   

    <div class="question mx-auto my-4">    
        <Card sx={{ maxWidth: 700 }}>
        <CardContent>
          <div class="question4 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group4">
          <div class="py-2 h6"><b>Marijuana </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q4" value="0" name="group4" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q4" value="1" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q4" value="2" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q4" value="3" name="group4"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q4" value="4" name="group4"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

    <div class="question5 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group5">
          <div class="py-2 h6"><b>Cocaine or crack </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q5" value="0" name="group5" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q5" value="1" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q5" value="2" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q5" value="3" name="group5"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q5" value="4" name="group5"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

    <div class="question6 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group6">
          <div class="py-2 h6"><b>Hallucinogens (like LSD) </b></div>
        
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q6"value="0" name="group6" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q6" value="1" name="group6"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q6" value="2" name="group6"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q6" value="3" name="group6"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q6" value="4" name="group6"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div>  

    <div class="question7 ml-sm-0 pl-sm-0 pt-2">
          <fieldset id="group7">
          <div class="py-2 h6"><b>Methamphetamine (like speed)</b></div>
    
        <div class="ml-md-3 ml-sm-1 pl-md-1 pt-sm-0 pt-0" id="options"> 
        <label class="options">Not at All <input type="radio" id="q7" value="0" name="group7" checked/> <span class="checkmark"></span> </label> 
        <label class="options">One or two days<input type="radio" id="q7" value="1" name="group7"/> <span class="checkmark"></span> 
        </label> <label class="options">Several days<input type="radio" id="q7" value="2" name="group7"/> <span class="checkmark"></span> 
        </label> <label class="options">More than several days<input type="radio" id="q7" value="3" name="group7"/> <span class="checkmark"></span> </label> 
        <label class="options">Everyday<input type="radio" id="q7" value="4" name="group7"/> <span class="checkmark"></span> </label> 
        </div>
        </fieldset>
    </div> 
        </CardContent>
    </Card>
    </div>

    
    

    
   

</div>
                        <div class="btn-container" style={{float:"right"}}>
                        <button onClick= {this.handleSubmit} type="submit" class="btn btn-main-2 btn-icon btn-round-full">Generate Insights<i class="icofont-simple-right ml-2  "></i></button>                                   
                       </div>
</form>
</div>
      </Breakpoint>
      </BreakpointProvider>

    );
  }
}
  export default Level2Abuse;