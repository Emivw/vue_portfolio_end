<template>
<section id="contact" class="py-5 px-5">

<div class="section-title py-5">
        <h2>get in touch</h2>
      </div>
<form action="https://formspree.io/f/xrgjyewq" method="POST">
  <div>
  <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon">
   </div>
  <input type="text" placeholder="Name (required)" required>
  <input type="text" placeholder="Return address (required)" required>
  <input type="text" placeholder="Topic (required)" required>
  <textarea placeholder="Subject (required)" required></textarea>
  <input type="submit" value="Send" class="btn-grad">
</form>
</section>
</template>
    
<script>
</script>
    
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: bordera-box;
}

body {
  background-color: black;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items:center;
}

form {
  padding-left:25px;
  padding-right:25px;
  padding-top:60px;
  margin: 12px auto;
  border: 2px solid #ccc;
  border-radius: 20px;
  position:relative;
  z-index:1;
}

form > div{
  position:absolute;
  top:0;
  left:50%;
  padding:0 20px;
  transform:translate(-50%,-50%);
  background-color:black;
  border: 2px solid #ccc;
  border-radius: 20px;
  text-align:center;
}

form > div > img{
  filter:invert(1);
  width:100px;
}

form > input,
form > textarea {
  padding: 12px;
  margin: 12px auto;
  border: 1px solid #ccc;
  color: #ddd;
  background-color: #222;
  border-radius: 4px;
  display: block;
  width: 70vw;
}

form > textarea{
  height:100px;
  resize:none;
}

form > input[type="submit"] {
  max-width: 20vw;
  padding-left: 1%;
  padding-right: 1%;
  cursor: pointer;
  transition: 0.35s;
}

/* form > input[type="submit"]:hover {
  background-color: #555;
} */


</style>