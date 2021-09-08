const quizDB=[
     {
     	question:"Q1:what is the full form of HTML ?",
     	a:"Hello to my Land",
     	b:"Hey Text",
     	c:"hyper",
     	d:"Hypertext Markup Language",
     	ans:"ans4"
     	},
     	
     	{
     	question:"Q2:what is the full form of css ?",
     	a:"cascading style sheet",
     	b:"csdS",
     	c:"CArtoon",
     	d:"carrot",
     	ans:"ans1"
     	},
     	
     	{
     	question: "Q3:what is full form of www ?",
     	a:"world wide web",
     	b:"wordet",
     	c:"wonder",
     	d:"weaker",
     	ans:"ans1"
     	},
     	
     	{
     	question: "Q4:what is full form of js ?",
     	a:"javascript",
     	b:"java",
     	c:"javadeveloper",
     	d:"javas",
     	ans:"ans1"
     	}
     	
     ]; 
     
     const question=document.querySelector('.question');
      const option1=document.querySelector('#option1');
       const option2=document.querySelector('#option2');
        const option3=document.querySelector('#option3');
         const option4=document.querySelector('#option4');
          const submit=document.querySelector('#submit');
      const answers=document.querySelectorAll('.answer');    
       const ShowScore=document.querySelector('#ShowScore');   
       
     let questionCount = 0;
     let score=0;
      const loadQuestion=()=>{
	   const questionList=quizDB[questionCount];
	   question.innerText=questionList.question;
	   
	   option1.innerText=questionList.a;
	      option2.innerText=questionList.b;
	         option3.innerText=questionList.c;
	            option4.innerText=questionList.d;
	            
	}
	
	loadQuestion();
	
	const getCheckAnswer=()=>{
	let answer;
	answers.forEach((curAnsElem)=>{
		if(curAnsElem.checked){
		   answer=curAnsElem.id;
		   }
		
	   });
	    return answer;
	 };
	
	const deselectAll = () => {
	answers.forEach((curAnsElem) => curAnsElem.checked = false );
	
	}
	
	 submit.addEventListener('click',()=>{
	 
	 	const checkedAnswer=getCheckAnswer();
	 	console.log(checkedAnswer);
	 	if(checkedAnswer == quizDB[questionCount].ans){
	 	     score++;
	 	     };
	 	     questionCount++;
	 	     deselectAll();
	 	     if(questionCount < quizDB.length)
	 	     {
	 	     	loadQuestion();
	 	     }
	 	     else
	 	     {
	 	     ShowScore.innerHTML= `
	 	           <h3> your scored ${score}/${quizDB.length}   </h3>
	 	           <button class="btn" onclick="location.reload()">play again</button>
	 	           `;
	 	           
	 	           ShowScore.classList.remove('scoreArea');
	 	      }
	 	     
	 	});
	

	   
