function addItem(){
	var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
  li.onclick = function() {this.parentNode.removeChild(this);}
      if (ul.childElementCount == 0) {  
          ul.appendChild(li);       
      }
      else {
          ul.insertBefore(li, ul.firstChild);
      }
  }
  

document.querySelector('ul').appendChild(node);



let el = document.getElementById('myEl')

el.addEventListener('click', function(event){
    alert("Successfully added to to-do list!")
})

el.addEventListener('mouseover', function(event){
    el.innerHTML = 'Added';
})

document.querySelector('.outer').addEventListener('click', function(e){
    
    console.log(e.target, e.currentTarget);
})


