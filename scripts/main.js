
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("> Welcome to my Portfolio!");
  await delay(700);
  createCode("cmd -h", "See all commands.");
  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/home/dipa/portfolio";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "cmd -h"){
    trueValue(value);
    
    createCode("cmd -h", "See all commands.");
    createCode("cat about", "Who am i and what do i do.");
    createCode("ls projects", "See my projects.");
    createCode("ls certs", "See my certifications.");
    createCode("ls hof", "See my Hall of Fame.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "ls projects"){
    trueValue(value);
    createText("<a href='https://www.pentestingmadesimple.it/blog/' target='_blank'><i class='fab fa-wordpress white'></i> Pentesting Made Simple - Blog</a>")
  }
  else if(value === "cat about"){
    trueValue(value);
    createText("Hello i'm Dipa ;)")
    createText("I'm a <span class='blue'>CS Student</span>, <span class='blue'>Penetration Tester</span> & <span class='blue'>BugHunter.</span>")
    createText("Focus on <span class='blue'>Web Application Security</span> & <span class='blue'>Mobile Application Security.</span>")
    createText("Use the other commands to find out more about me.")
  }
  else if(value === "ls certs"){
    trueValue(value);
    createText("<a href='https://verified.elearnsecurity.com/certificates/e4602a44-80a4-4a20-a474-8ecffec6da8a' target='_blank'><i class='fab fa-readme'></i> eMAPT - eLearnSecurity Mobile Penetration Tester</a>")
    createText("<a href='https://verified.elearnsecurity.com/certificates/0a88f549-36d1-4fb5-af45-77b3fdf12ac6' target='_blank'><i class='fab fa-readme'></i> eWPT - eLearnSecurity Web Application Penetration Tester</a>")
    createText("<a href='https://learn.fastwebdigital.academy/badges/badge.php?hash=214cadd9ea48708fb6a386df14c866217f540285' target='_blank'><i class='fab fa-python'></i> Fastweb Digital Academy - Advanced Python Course</a>")
  }
  else if(value === "ls hof"){
    trueValue(value);
    createText("<a href='https://hackerone.com/dipa996' target='_blank'><i class='fas fa-car'></i> Ford Company</a>")
    createText("<a href='https://www.fastweb.it/corporate/responsible-disclosure/' target='_blank'><i class='fas fa-window-restore'></i> Fastweb Italia</a>")
    createText("<a href='https://memegenerator.net/img/instances/27992760/stallowned.jpg' target='_blank'><i class='fas fa-graduation-cap'></i> University of Cambridge</a>")
    createText("<a href='https://hackerone.com/dipa996' target='_blank'><i class='fas fa-gamepad'></i> Sony Company</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText("Command not found, you can 'cmd -h' for list commands")
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = code + '<br/><span class=text>' + text + '</span>';
  app.appendChild(p);
}

open_terminal();
