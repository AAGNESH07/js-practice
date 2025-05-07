//document.getElementById("myBtn").addEventListener("click", function() {
    //document.getElementById("myPara").innerText = "The paragraph text has been changed!";
  //});

  


 // let isLight = true;

//document.getElementById("toggleBtn").addEventListener("click", function () {
 // if (isLight) {
   // document.body.style.backgroundColor = "black";
    //document.body.style.color = "white";
  //} else {
    //document.body.style.backgroundColor = "white";
    //document.body.style.color = "black";
  //}
  //isLight = !isLight; 
//});


//document.getElementById("addBtn").addEventListener("click", function () {
  //const input = document.getElementById("itemInput");
  //const newItemText = input.value.trim();

  //if (newItemText !== "") {
    //const newItem = document.createElement("li");
    //newItem.innerText = newItemText;
    //document.getElementById("myList").appendChild(newItem);
    //input.value = ""; // Clear input after adding
  //} else {
    //alert("Please enter something!");
  //}
//});
//




//document.getElementById("myForm").addEventListener("submit", function(event) {
  //const name = document.getElementById("name").value.trim();
  //const email = document.getElementById("email").value.trim();
  //const error = document.getElementById("error");

  //if (name === "" || email === "") {
    //event.preventDefault(); // Stop form submission
    //error.textContent = "Please fill in both name and email.";
  //} else {
    //error.textContent = ""; // Clear error if all good
    //alert("Form submitted successfully!");
  //}
//});

document.getElementById("showPassword").addEventListener("change", function () {
  const passwordField = document.getElementById("password");

  if (this.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});




// 1. Live Character Counter
message.oninput = () => {
  charCount.textContent = message.value.length;
};

// 2. Accordion Toggle
document.querySelectorAll(".accordion").forEach(header => {
  header.onclick = () => {
    const panel = header.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  };
});

// 3. Search Filter
searchInput.oninput = () => {
  const filter = searchInput.value.toLowerCase();
  document.querySelectorAll("#nameList li").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(filter) ? "list-item" : "none";
  });
};

// 4. Quiz App
document.getElementById("quizForm").onsubmit = function (e) {
  e.preventDefault();
  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value === "4") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "Paris") score++;

  result.textContent = `Your score: ${score}/2`;
};
