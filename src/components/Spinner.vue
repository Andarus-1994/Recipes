

<template>
  <div class="spinner">
   
  </div>
</template>


<script>

export default {
  name: "loader",
}
</script>

<style lang="css" scoped>

.spinner::after,
      .spinner::before {
        animation-duration: 0.6s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-name: load1;
        animation-direction: alternate;
        animation-play-state: running;
        background-color: #444;
        border-radius: 50%;
        position: absolute;
        content: " ";
        background-color: cornflowerblue;
        top: 0px;
        width: 10px;
        height: 10px;
          z-index:20;
      }
       .spinner {
        background-color: #444;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        position: relative;
        margin:0 auto;
        z-index:20;
      }
    
      .spinner::before {
        left: -20px; 
        transform-origin: 20px center; 
      }
      .spinner::after {
        left: 20px;
        transform-origin: -10px center;
      }
      @keyframes load1 {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(210deg);
        }
      }
</style>