let users = [
  {
    name: "Ayesha Khan",
    pic: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Frontend developer who loves React and chai ☕."
  },
  {
    name: "Rohan Verma",
    pic: "https://randomuser.me/api/portraits/men/12.jpg",
    bio: "Backend engineer passionate about Node.js and MongoDB."
  },
  {
    name: "Fatima Ali",
    pic: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Full-stack dev and part-time illustrator ✍️."
  },
  {
    name: "Amit Sharma",
    pic: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Cloud architect with a love for clean code and coffee."
  },
  {
    name: "Fatima Sheikh",
    pic: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "UI/UX designer who makes pixels pretty 🎨."
  },
  {
    name: "John Doe",
    pic: "https://randomuser.me/api/portraits/men/30.jpg",
    bio: "DevOps ninja automating all the things ⚙️."
  },
  {
    name: "Meher Rizvi",
    pic: "https://randomuser.me/api/portraits/women/20.jpg",
    bio: "JavaScript wizard and open source contributor 🧙‍♀️."
  },
  {
    name: "Kabir Mehta",
    pic: "https://randomuser.me/api/portraits/men/60.jpg",
    bio: "Mobile app dev with a love for Flutter & fast UIs."
  }
];
//  display the card 
function displayUsers(arr) {
arr.forEach(el => {
    let userCard = document.createElement("div");
    userCard.className = "user-card";
    
    let userImage = document.createElement("img");
    userImage.classList.add("user-image");
    userImage.src = el.pic;
    userImage.alt = el.name;
    
    let userName = document.createElement("h3");
    userName.textContent = el.name;
    
    let userBio = document.createElement("p");
    userBio.classList.add("user-bio");
    userBio.textContent = el.bio;
    
    userCard.appendChild(userImage);
    userCard.appendChild(userName);
    userCard.appendChild(userBio);
    
    document.getElementById("results").appendChild(userCard);
});


}

displayUsers(users);

// search the user in card
let inp=document.querySelector("input");
inp.addEventListener("input",function () {
     const searchValue = inp.value.toLowerCase();
    let searchItem=users.filter((el) => {
        return el.name.toLowerCase().startsWith(searchValue);
        
    })
   if (searchItem.length === 0) {
        document.querySelector('p').textContent = "No results found";
        document.getElementById("results").innerHTML = ""; // Clear previous results
        return;
    }

    document.querySelector('p').textContent = "";
    // console.log(searchItem);
    document.getElementById("results").innerHTML = ""; // Clear previous results
    displayUsers(searchItem);
    


    
})
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");
  toggleBtn.textContent = isLight ? "🌙 Enable Dark Mode" : "🌞 Enable Light Mode";
});
