import { Link, BrowserRouter, Route } from 'react-router-dom';
import { Component } from 'react';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

class FormDSM5 extends Component { 
    constructor(props) {
        super(props);      
      }    
    componentDidMount() {
        window.scrollTo(0, 0)
      } 
      handleSubmit = () => {

        var q1 = document.querySelector("input[id=q1]:checked").value;
        var q2 = document.querySelector("input[id=q2]:checked").value;
        var q3 = document.querySelector("input[id=q3]:checked").value;
        var q4 = document.querySelector("input[id=q4]:checked").value;
        var q5 = document.querySelector("input[id=q5]:checked").value;
        var q6 = document.querySelector("input[id=q6]:checked").value;
        var q7 = document.querySelector("input[id=q7]:checked").value;
        var q8 = document.querySelector("input[id=q8]:checked").value;
        var q9 = document.querySelector("input[id=q9]:checked").value;
        var q10 = document.querySelector("input[id=q10]:checked").value;
        var q11 = document.querySelector("input[id=q11]:checked").value;
        var q12 = document.querySelector("input[id=q12]:checked").value;
        var q13 = document.querySelector("input[id=q13]:checked").value;
        var q14 = document.querySelector("input[id=q14]:checked").value;
        var q15 = document.querySelector("input[id=q15]:checked").value;
        var q16 = document.querySelector("input[id=q16]:checked").value;
        var q17 = document.querySelector("input[id=q17]:checked").value;
        var q18 = document.querySelector("input[id=q18]:checked").value;
        var q19 = document.querySelector("input[id=q19]:checked").value;
        var q20 = document.querySelector("input[id=q20]:checked").value;
        var q21 = document.querySelector("input[id=q21]:checked").value;
        var q22 = document.querySelector("input[id=q22]:checked").value;
        var q23 = document.querySelector("input[id=q23]:checked").value;


        console.log(parseInt(q1)+parseInt(q2)+parseInt(q3));
        var depression = parseInt(q1)+parseInt(q2)+parseInt(q11);
        var abuse = parseInt(q21)+parseInt(q22)+parseInt(q23);
        var mania = parseInt(q4)+parseInt(q5);
        var anxiety = parseInt(q6)+parseInt(q7)+parseInt(q8);

        if(depression >= 2){
            alertify.alert('','You show symptoms of depression. Fill a Level-2 questionnaire to understand your condition better');
            this.props.history.push("/Depression")
        }
        else if (mania >= 2){
            alertify.alert('','You show symptoms of mania. Fill a Level-2 questionnaire to understand your condition better');
            this.props.history.push("/Mania")
        }
        else if(anxiety >= 2){
            alertify.alert('','You show symptoms of anxiety. Fill a Level-2 questionnaire to understand your condition better');
            this.props.history.push("/Anxiety")
        }
        else if (abuse >= 2){
            alertify.alert('','You show symptoms of substance abuse. Fill a Level-2 questionnaire to understand your condition better');
            this.props.history.push("/Abuse")
        }
        else{
            alertify.alert('Cheers!','Looks like you are not diagnosed with anything serious. Have a great day ahead!');
            this.props.history.push("/")
        }
      }
    render(){
    return (
        <div class="container">
        <h2>DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure—Adult</h2><br />
        <h4 style={{color: "#6F8BA4"}}>Over the last 2 weeks, how often have you been bothered by any of the following problems? </h4>
 
        <div class="container mt-sm-5 my-1">
    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group1">
        <div class="py-2 h5"><b>Q1. Little interest or pleasure in doing things?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q1" value = "0" name="group1" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q1" value = "2" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id="q1" value = "3" name="group1"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id="q1" value = "4" name="group1"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group2">
        <div class="py-2 h5"><b>Q2. Feeling down, depressed or hopeless?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q2" value = "0" name="group2" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q2" value = "2" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id="q2" value = "3" name="group2"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id="q2" value = "4" name="group2"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group3">
        <div class="py-2 h5"><b>Q3. Feeling more irritated, grouchy, or angry than usual?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
        <label class="options">Not at all<input type="radio" id="q3" value = "0" name="group3" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id="q3" value = "2" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id="q3" value = "3" name="group3"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id="q3" value = "4" name="group3"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>
    
    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group4">
        <div class="py-2 h5"><b>Q4. Sleeping less than usual, but still have a lot of energy?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id="q4" value = "0" name="group4" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id="q4" value = "2" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id="q4" value = "3" name="group4"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id="q4" value = "4" name="group4"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group5">
        <div class="py-2 h5"><b>Q5. Starting lots more projects than usual or doing more risky things than
usual?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id="q5" value = "0" name="group5" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id="q5" value = "2" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id="q5" value = "3" name="group5"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id="q5" value = "4" name="group5"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group6">
        <div class="py-2 h5"><b>Q6. Feeling nervous, anxious, frightened, worried, or on edge?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id="q6" value = "0" name="group6" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id="q6" value = "2" name="group6"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id="q6" value = "3" name="group6"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id="q6" value = "4" name="group6"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group7">
        <div class="py-2 h5"><b>Q7. Feeling panic or being frightened?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q7" value = "0" name="group7" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q7" value = "2" name="group7"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q7" value = "3" name="group7"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q7" value = "4" name="group7"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group8">
        <div class="py-2 h5"><b>Q8. Avoiding situations that make you anxious?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q8" value = "0" name="group8" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q8" value = "2" name="group8"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q8" value = "3" name="group8"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q8" value = "4" name="group8"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>
            
    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group9">
        <div class="py-2 h5"><b>Q9. Unexplained aches and pains (e.g., head, back, joints, abdomen, legs)?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q9" value = "0" name="group9" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q9" value = "2" name="group9"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q9" value = "3" name="group9"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q9" value = "4" name="group9"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group10">
        <div class="py-2 h5"><b>Q10. Feeling that your illnesses are not being taken seriously enough?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q10" value = "0" name="group10" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q10" value = "2" name="group10"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q10" value = "3" name="group10"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q10" value = "4" name="group10"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group11">
        <div class="py-2 h5"><b>Q11. Thoughts of actually hurting yourself?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q11" value = "0" name="group11" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q11" value = "2" name="group11"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q11" value = "3" name="group11"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q11" value = "4" name="group11"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group12">
        <div class="py-2 h5"><b>Q12. Hearing things other people couldn’t hear, such as voices even when no
one was around?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q12" value = "0" name="group12" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q12" value = "2" name="group12"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q12" value = "3" name="group12"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q12" value = "4" name="group12"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group13">
        <div class="py-2 h5"><b>Q13. Feeling that someone could hear your thoughts, or that you could hear
what another person was thinking?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q13" value = "0" name="group13" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q13" value = "2" name="group13"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q13" value = "3" name="group13"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q13" value = "4" name="group13"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group14">
        <div class="py-2 h5"><b>Q14. Problems with sleep that affected your sleep quality over all?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q14" value = "0" name="group14" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q14" value = "2" name="group14"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q14" value = "3" name="group14"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q14" value = "4" name="group14"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group15">
        <div class="py-2 h5"><b>Q15. Problems with memory (e.g., learning new information) or with location
(e.g., finding your way home)?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" value = "0" id = "q15" name="group15" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q15" value = "2" name="group15"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" value = "3" id = "q15" name="group15"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q15" value = "4" name="group15"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group16">
        <div class="py-2 h5"><b>Q16. Unpleasant thoughts, urges, or images that repeatedly enter your mind?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" value = "0" id = "q16" name="group16" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" value = "2" id = "q16" name="group16"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q16" value = "3" name="group16"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" value = "4" id = "q16" name="group16"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group17">
        <div class="py-2 h5"><b>Q17. Feeling driven to perform certain behaviors or mental acts over and over
again?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" value = "0" id = "q17" name="group17" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q17" value = "2" name="group17"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q17" value = "3" name="group17"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q17" value = "4" name="group17"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group18">
        <div class="py-2 h5"><b>Q18. Feeling detached or distant from yourself, your body, your physical
surroundings, or your memories?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" value = "0" id = "q18" name="group18" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" value = "2" id = "q18" name="group18"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" value = "3" id = "q18" name="group18"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" value = "4" id = "q18" name="group18"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group19">
        <div class="py-2 h5"><b>Q19. Not knowing who you really are or what you want out of life?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q19" value = "0" name="group19" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q19" value = "2" name="group19"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" value = "3" id = "q19" name="group19"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q19" value = "4" name="group19"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group20">
        <div class="py-2 h5"><b>Q20. Not feeling close to other people or enjoying your relationships with them?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" value = "0" id = "q20" name="group20" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q20" value = "2" name="group20"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q20" value = "3" name="group20"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" value = "4" id = "q20" name="group20"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group21">
        <div class="py-2 h5"><b>Q21. Drinking at least 4 drinks of any kind of alcohol in a single day?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q21" value = "0" name="group21" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q21" value = "2" name="group21"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" value = "3" id = "q21" name="group21"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" value = "4" id = "q21" name="group21"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
        <hr
            style={{
            color: '#E8E8E8',
            backgroundColor:'#E8E8E8',
            height: 1
            }}
        />
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group22">
        <div class="py-2 h5"><b>Q22. Smoking any cigarettes, a cigar, or pipe, or using snuff or chewing tobacco?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q22" value = "0" name="group22" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q22" value = "2" name="group22"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q22" value = "3" name="group22"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q22" value = "4" name="group22"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>

    <div class="question ml-sm-5 pl-sm-5 pt-2">
    <fieldset id="group23">
        <div class="py-2 h5"><b>Q23. Using any of the following medicines ON YOUR OWN, that is, without a
doctor’s prescription, in greater amounts or longer than prescribed [e.g.,
painkillers (like Vicodin), stimulants (like Ritalin or Adderall), sedatives or
tranquilizers (like sleeping pills or Valium), or drugs like marijuana, cocaine
or crack, club drugs (like ecstasy), hallucinogens (like LSD), heroin,
inhalants or solvents (like glue), or methamphetamine (like speed)]?</b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> <label class="options">Not at all <input type="radio" id = "q23" value = "0" name="group23" checked/> <span class="checkmark"></span> </label> 
        <label class="options">Several days <input type="radio" id = "q23" value = "2" name="group23"/> <span class="checkmark"></span> 
        </label> <label class="options">More than half the days <input type="radio" id = "q23" value = "3" name="group23"/> <span class="checkmark"></span> 
        </label> <label class="options">Nearly every day <input type="radio" id = "q23" value = "4" name="group23"/> <span class="checkmark"></span> </label> </div>
        </fieldset>
    </div>
</div>
                        <div class="btn-container" style={{float:"right"}}>
                        <button onClick= {this.handleSubmit} type="submit" class="btn btn-main-2 btn-icon btn-round-full">Generate Insights<i class="icofont-simple-right ml-2  "></i></button>                                   
                        </div>

</div>
    );
  }
}
  export default FormDSM5;