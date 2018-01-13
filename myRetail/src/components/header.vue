<template>
  <div id="header">
    <h1>myRetail</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss" scoped>
    #header{
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
        width: 100%;
        background-color: #ca0813;
        color: white;
        padding: 20px;
        z-index: 1;
    }
</style>
