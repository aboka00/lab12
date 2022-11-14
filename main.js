// Find Element + Change Content
let h1 = document.querySelector("h1")
h1.innerText = "Lab12 Assignment"
h1.style.color = "blue"

// Create Element
let hr = document.createElement("hr")
document.body.appendChild(hr)

// Change Style
let h2 = document.createElement("h2")
h2.innerText = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let p = document.createElement("p")
p.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p)

let ul = document.createElement("ul")
document.body.appendChild(ul)
// Change Class
let li = document.createElement("li")
li.innerHTML = "find elements in the DOM (<b>5 points</b>);"
li.classList.add = "even"
li.style.color = "green"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "create/add/remove elements (<b>5 points</b>);"
li.classList.add = "odd"
li.style.color = "purple"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "change content of the elements (<b>5 points</b>);"
li.classList.add = "even"
li.style.color = "green"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "change styles of the elements (<b>5 points</b>);"
li.classList.add = "odd"
li.style.color = "purple"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "change attributes of the elements (<b>5 points</b>);"
li.classList.add = "even"
li.style.color = "green"
ul.appendChild(li)
// Change Attribute
li = document.createElement("li")
li.innerHTML = "change classes of the elements (<b>5 points</b>)."
li.classList.add = "odd"
li.setAttribute("style", "color: purple")
ul.appendChild(li)

p = document.createElement("p")
p.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a href='https://github.com/yessen/nu_web_programming/tree/main/week12'>link.</a>"
document.body.appendChild(p)

hr = document.createElement("hr")
document.body.appendChild(hr)

h2 = document.createElement("h2")
h2.innerText = "Submission"
h2.style.color = "red"
document.body.appendChild(h2)

p = document.createElement("p")
p.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p)

ul = document.createElement("ul")
document.body.appendChild(ul)
//
li = document.createElement("li")
li.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
li.classList.add = "even"
li.style.color = "green"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "Clone this repository to your local machine and work inside it."
li.classList.add = "odd"
li.style.color = "purple"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).'
li.classList.add = "even"
li.style.color = "green"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
li.classList.add = "odd"
li.style.color = "purple"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li.classList.add = "even"
li.style.color = "green"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li.classList.add = "odd"
li.style.color = "purple"
ul.appendChild(li)
//
li = document.createElement("li")
li.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li.classList.add = "even"
li.style.color = "green"
ul.appendChild(li)

hr = document.createElement("hr")
document.body.appendChild(hr)

console.log(document)