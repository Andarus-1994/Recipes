<template>
  <div class="modify">
     <button><font-awesome-icon icon="edit" /></button>
     <button><font-awesome-icon icon="trash" /></button>
  
  </div>
</template>

<script>


export default {
  name: "modify",
   
  
  created: function() {
    console.log("created");
  },
};
</script>

<style lang="css" scoped>
.modify{
    background-color:rgb(9, 17, 20);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
   
}
.modify button{
  position: relative;
  margin:0px 5px;
  background-color: rgb(29, 107, 138);
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  transition: 0.6s;
}
.modify button:nth-last-of-type(1){
    float:right;
    color:rgb(114, 13, 13);
 
}
.modify button:nth-last-of-type(2):hover{
    
    color:rgb(255, 255, 255);
 
}
.modify button:nth-last-of-type(1):hover{
    transform: scale(1.2);
}
</style>
