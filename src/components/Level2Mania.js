import { Link, BrowserRouter } from 'react-router-dom';
import { Component } from 'react';
import { Breakpoint, BreakpointProvider } from 'react-socks';

class Level2Mania extends Component { 
    constructor(props) {
        super(props);      
      }
        componentDidMount() {
            window.scrollTo(0, 0)
          } 
          handleSubmit = () => {
            sessionStorage.setItem("disorder", "Mania");
            var q1 = document.querySelector("input[id=q1]:checked").value;
            var q2 = document.querySelector("input[id=q2]:checked").value;
            var q3 = document.querySelector("input[id=q3]:checked").value;
            var q4 = document.querySelector("input[id=q4]:checked").value;
            var q5 = document.querySelector("input[id=q5]:checked").value;
    
            var dep = parseInt(q1)+parseInt(q2)+parseInt(q3)+parseInt(q4)+parseInt(q5)/5;
            console.log(dep)
            if( dep < 5)
              sessionStorage.setItem("intensity", "No/Mild");
            else
              sessionStorage.setItem("intensity", "Severe");
    
           this.props.history.push("/DSM5Analysis")
          }
    render()
    {    return (
        <BreakpointProvider>
        <Breakpoint medium down>
        <div class="container">
        <hr style={{backgroundColor:"#1AF286"}}/>
        <h2 style={{fontSize:26}}>LEVEL 2 — Mania Adult</h2><br/>
        <h3 style={{color: "#6F8BA4",fontSize:16}}>Please read each group of statements/question carefully.</h3><br/>
        <h4 style={{color: "#94979A",fontSize:16}}>Choose the one statement in each group that best describes the way you (the individual receiving care) have been feeling for
the past week.</h4>
<h6 style={{color: "#CAD0DA",fontSize:16}}>note: The word “occasionally” when used here means once or twice; “often” means several times or more and
“frequently” means most of the time.</h6>
    <br/> 

   <form>
   <div class="container mt-sm-5 my-1">
    
    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group1">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:16}}>I do not feel happier or more cheerful than usual.<input type="radio" id="q1" value ="0" name="group1" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:16}}>I occasionally feel happier or more cheerful than usual.<input type="radio" id="q1" value ="1" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I often feel happier or more cheerful than usual.<input type="radio" id="q1" value ="2" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I feel happier or more cheerful than usual most of the time.<input type="radio" id="q1" value ="3" name="group5"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:16}}>I feel happier of more cheerful than usual all of the time. <input type="radio" id="q1" value ="4" name="group5"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />

<div class="question2 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group2">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:16}}>I do not feel more self-confident than usual.<input type="radio" id="q2" value ="0" name="group2" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:16}}>I occasionally feel more self-confident than usual.<input type="radio" id="q2" value ="1" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I often feel more self-confident than usual.<input type="radio" id="q2" value ="2" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I frequently feel more self-confident than usual.<input type="radio" id="q2" value ="3" name="group2"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:16}}>I feel extremely self-confident all of the time.<input type="radio" id="q2" value ="4" name="group2"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />

<div class="question3 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group3">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:16}}>I do not need less sleep than usual.<input type="radio" id="q3" value ="0" name="group3" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:16}}>I occasionally need less sleep than usual.<input type="radio" id="q3" value ="1" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I often need less sleep than usual.<input type="radio" id="q3" value ="2" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I frequently need less sleep than usual.<input type="radio" id="q3" value ="3" name="group3"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:16}}>I can go all day and all night without any sleep and still not feel tired.<input type="radio" id="q3" value ="4" name="group1"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />

<div class="question4 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group4">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:16}}>I do not talk more than usual.<input type="radio" id="q4" value ="0" name="group4" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:16}}>I occasionally talk more than usual.<input type="radio" id="q4" value ="1" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I often talk more than usual.<input type="radio" id="q4" value ="2" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I frequently talk more than usual.<input type="radio" id="q4" value ="3" name="group4"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:16}}>I talk constantly and cannot be interrupted.<input type="radio" id="q4" value ="4" name="group4"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
        <div class="question5 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group5">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:16}}>
        I have not been more active (either socially, sexually, at work, home, or school) than usual.<input type="radio" id="q5" value ="0" name="group5" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:16}}>I have occasionally been more active than usual.<input type="radio" id="q5" value ="1" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I have often been more active than usual.<input type="radio" id="q5" value ="2" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:16}}>I have frequently been more active than usual.<input type="radio" id="q5" value ="3" name="group5"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:16}}>I am constantly more active or on the go all the time.<input type="radio" id="q5" value ="4" name="group5"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
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
        <h2>LEVEL 2—Mania—Adult</h2><br />
        <h3 style={{color: "#6F8BA4"}}>Please read each group of statements/question carefully.</h3><br/>
        <h4 style={{color: "#94979A"}}>Choose the one statement in each group that best describes the way you (the individual receiving care) have been feeling for
the past week.</h4>
<h6 style={{color: "#CAD0DA"}}>note: The word “occasionally” when used here means once or twice; “often” means several times or more and
“frequently” means most of the time.</h6>
    <br/> 

   <form>
   <div class="container mt-sm-5 my-1">
    
    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group1">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:18}}>I do not feel happier or more cheerful than usual.<input type="radio" id="q1" value ="0" name="group1" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:18}}>I occasionally feel happier or more cheerful than usual.<input type="radio" id="q1" value ="1" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I often feel happier or more cheerful than usual.<input type="radio" id="q1" value ="2" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I feel happier or more cheerful than usual most of the time.<input type="radio" id="q1" value ="3" name="group5"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:18}}>I feel happier of more cheerful than usual all of the time. <input type="radio" id="q1" value ="4" name="group5"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />

<div class="question2 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group2">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:18}}>I do not feel more self-confident than usual.<input type="radio" id="q2" value ="0" name="group2" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:18}}>I occasionally feel more self-confident than usual.<input type="radio" id="q2" value ="1" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I often feel more self-confident than usual.<input type="radio" id="q2" value ="2" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I frequently feel more self-confident than usual.<input type="radio" id="q2" value ="3" name="group2"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:18}}>I feel extremely self-confident all of the time.<input type="radio" id="q2" value ="4" name="group2"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />

<div class="question3 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group3">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:18}}>I do not need less sleep than usual.<input type="radio" id="q3" value ="0" name="group3" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:18}}>I occasionally need less sleep than usual.<input type="radio" id="q3" value ="1" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I often need less sleep than usual.<input type="radio" id="q3" value ="2" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I frequently need less sleep than usual.<input type="radio" id="q3" value ="3" name="group3"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:18}}>I can go all day and all night without any sleep and still not feel tired.<input type="radio" id="q3" value ="4" name="group1"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />

<div class="question4 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group4">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:18}}>I do not talk more than usual.<input type="radio" id="q4" value ="0" name="group4" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:18}}>I occasionally talk more than usual.<input type="radio" id="q4" value ="1" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I often talk more than usual.<input type="radio" id="q4" value ="2" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I frequently talk more than usual.<input type="radio" id="q4" value ="3" name="group4"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:18}}>I talk constantly and cannot be interrupted.<input type="radio" id="q4" value ="4" name="group4"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
<hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
        <div class="question5 ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group5">
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options" style={{fontSize:18}}>
        I have not been more active (either socially, sexually, at work, home, or school) than usual.<input type="radio" id="q5" value ="0" name="group5" checked/> <span class="checkmark"></span> </label> 
        <label class="options" style={{fontSize:18}}>I have occasionally been more active than usual.<input type="radio" id="q5" value ="1" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I have often been more active than usual.<input type="radio" id="q5" value ="2" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options" style={{fontSize:18}}>I have frequently been more active than usual.<input type="radio" id="q5" value ="3" name="group5"/> <span class="checkmark"></span> </label> 
                 <label class="options" style={{fontSize:18}}>I am constantly more active or on the go all the time.<input type="radio" id="q5" value ="4" name="group5"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
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
</BreakpointProvider>
    );
  }
}
  export default Level2Mania;