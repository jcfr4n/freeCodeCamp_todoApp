// jshint esversion: 6

/**
 * First, target all ID's selectors from HTML
 */

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

/**
 * Create submit event listener
 */

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Button Clicked');

    formValidation();
});

/**
 * formValidation function
 */

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

/**
 * Create data object
 */

let data = {};

let acceptData = () => {
    data.text = input.value;
    console.table(data);
    createPost();

};

/**
 * Create posts
 */

 let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };

  /**
   * Delelte post
   */

  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  /**
   * Edit post
   */

   let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };