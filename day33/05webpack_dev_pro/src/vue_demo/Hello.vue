<template>
  <div>
    <h2>{{title}}</h2>
    <p class="content">我是内容 哈哈哈 </p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        title:"我是vue标题"
      }
    }
  }
</script>
<style>
  .content{
    color:red;
  }
</style>