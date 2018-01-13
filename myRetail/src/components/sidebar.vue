<template>
  <div id="sidebar">
    <h1>sidebar content</h1>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
}
</script>

<style lang="scss" scoped>
    #sidebar{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 150px;
        border: 1px solid lightgrey;
        color: lightgrey;
        padding: 150px 20px;
        z-index: 0;
    }
</style>
