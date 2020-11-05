<template>
  <div class="add">
      
    <button> <font-awesome-icon icon="plus" /></button>
  </div>
</template>

<script>
export default {
  name: "add",
  
  created: function() {
    console.log('I am here');
  },
};
</script>

<style lang="css" scoped>
.add{
    background: rgb(9, 17, 20);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px;
}

.add button{
    position: relative;
    cursor: pointer;
    border:none;
    padding: 5px 10px;
}
.add button:active{
    top:1px;
    bottom:1px;
}
</style>
