<template>
    <div class="card">
      <div class="card-body">
        <div class="card-content">

          <h2 class="card-title">Nice animated card</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis tempora at rerum?
          </p>

          <button>Learn more &rightarrow;</button>
        </div>
      </div>
    </div>
</template>
    
<script>
    
</script>
    
<style scoped>
.card{
    background-color: #B4BEC9;
    background-image: url('https://unsplash.it/500/700');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
    min-height: 450px;
    margin: 1rem;
    border-radius:  15px;
    max-width: 350px; 
    width: 100%;
}

.card-body{
    background: rgba(0, 0, 0, .8);
    width: 100%;
    box-sizing: border-box;
    bottom: 0;
    position: absolute;
    height: 30px;
    transition: 1s;
}

.card-body::before{
    content: ' See more...';
    display: flex;
    align-items: center;
    position: absolute;
    width: 30%;
    height: 30px;
    padding: 0 0 0 8px;
    transition: 1s;
    border-radius: 0 0 15px 0;
    background-color: #159A9C;
}

.card:hover .card-body{
    height: 60%;
}
.card-content{
    padding: 2rem;
}

.card:hover .card-body::before{
    width: 80%;
}

button{
    background: #B4BEC9;
    color: #002333;
    border: 0px;
    border-radius: 6px;
    padding: .5rem 1rem;
}

h2{
    text-decoration: underline #159A9C 20%;
    
}
</style>