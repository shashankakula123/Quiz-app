var quizData=[
    {
        id:1,
        Q1:"Q1. Which was not one of the Voldmort's Hocruxes?",
        o1:"Harry",
        o2:"Nagini",
        o3:"Helga's Diadem",
        o4:"Tom Riddle's Diary",
        name:"q1",

    },
    {
    id:2,
        Q1:"Q2. Which of these are not Hagrids Many Pets?",
        o1:"Grawp",
        o2:"Fluffy",
        o3:"Aragog",
        o4:"Noberta",
        name:"q2",
},
{
    id:3,
        Q1:" Q3. Which class did Severus Snape always want to teach?",
        o1:"Potions",
        o2:"Charms",
        o3:"Defense Against Dark Arts",
        o4:"Transfiguration",
        name:"q3",
},
{
    id:4,
        Q1:"Q4. Which Hogwarts House did Moaning Myrtle Belong in?",
        o1:"Gryffindor",
        o2:"Slytherin",
        o3:"RavenClaw",
        o4:"Hufflepuff",
        name:"q4",
},
{
    id:5,
        Q1:"Q5. What class did Neville end up teaching at hogwarts?",
        o1:"Astronomy",
        o2:"Herbology",
        o3:"Charms",
        o4:"Muggle Studies",
        name:"q5",
}

];


// var option1=document.createElement('input');
// option1.type="radio";

// option1.id="opt1";
// var newlabel1 = document.createElement("Label");
// newlabel1.setAttribute("for","opt1");
// newlabel1.innerHTML = a;
var container=document.getElementById('container');


var btn=document.createElement('input');
btn.type="submit";
btn.value="submit";
btn.id="submit";
var score=document.getElementById('score');
var marks=document.createElement('h3');
marks.innerHTML=count;
score.appendChild(marks);
score.innerHTML=0/5;
var count=0;

function createQuiz(data){

   var first=document.createElement('div');
   first.className="first";
   first.id=data.id;

    var para=document.createElement('p');
    para.id="para";
    para.innerHTML=data.Q1;


    var option1=document.createElement('input');
    option1.type="radio";
    
    option1.className="all";
    var newlabel1=document.createElement("Label");
    newlabel1.setAttribute("for","opt1");
    newlabel1.innerHTML=data.o1;
   newlabel1.className="labels";
option1.name=data.name;
option1.value=data.o1;




    var option2=document.createElement('input');
    option2.type="radio";
    
    option2.className="all";
    var newlabel2=document.createElement("Label");
    newlabel2.setAttribute("for","opt2");
    newlabel2.innerHTML=data.o2;
    newlabel2.className="labels";
    option2.name=data.name;
    option2.value=data.o2;

    


    var option3=document.createElement('input');
    option3.type="radio";

    option3.className="all";
    var newlabel3=document.createElement("Label");
    newlabel3.setAttribute("for","opt3");
    newlabel3.innerHTML=data.o3;
    newlabel3.className="labels";
    option3.name=data.name;
    option3.value=data.o3;

    

    var option4=document.createElement('input');
    option4.type="radio";
    
    option4.className="all";
    var newlabel4=document.createElement("Label");
    newlabel4.setAttribute("for","opt4");
    newlabel4.innerHTML=data.o4;
    newlabel4.className="labels";
    option4.name=data.name;
    option4.value=data.o4;


    var br1=document.createElement('br');
    var br2=document.createElement('br');
    var br3=document.createElement('br');
    var br4=document.createElement('br');

    first.appendChild(para);
    first.appendChild(option1);
    first.appendChild(newlabel1)
    first.appendChild(br1);
    first.appendChild(option2);
    first.appendChild(newlabel2)
    first.appendChild(br2);
    first.appendChild(option3);
    first.appendChild(newlabel3);
    first.appendChild(br3);
    first.appendChild(option4);
first.appendChild(newlabel4);
first.appendChild(br4);
    return first;


}

for(var i=0;i<quizData.length;i++){



container.appendChild(createQuiz(quizData[i]));
}


container.appendChild(btn);


function result(){
    
    var ele1=document.getElementsByName('q1');
    for(var i=0;i<ele1.length;i++){
    if(ele1[i].checked && ele1[i].value=="Harry"){
        count++;
        alert('incre');
    }
    }
    var ele2=document.getElementsByName('q2');
    for(var i=0;i<ele2.length;i++){
    if(ele2[i].checked && ele2[i].value=="Grawp"){
        count++;
    
    }
    }
    var ele3=document.getElementsByName('q3');
    for(var i=0;i<ele3.length;i++){
    if(ele3[i].checked && ele3[i].value=="Potions"){
        count++;
        
    }
    }
    var ele4=document.getElementsByName('q4');
    for(var i=0;i<ele4.length;i++){
    if(ele4[i].checked && ele4[i].value=="RavenClaw"){
        count++;
        
    }
    }
    var ele5=document.getElementsByName('q5');
    for(var i=0;i<ele5.length;i++){
    if(ele5[i].checked && ele5[i].value=="Charms"){
        count++;

    }
    }

    score.innerHTML=`${count} /5`;
    

}

btn.addEventListener('click',function(e){
e.preventDefault();
result();

});