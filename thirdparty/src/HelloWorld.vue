<template>
  <h1>Hello From 3rd Party!</h1>
  <reusable-thing></reusable-thing>
</template>

<script>
export default {
  // reusable thing, even though it is a global component, is not mountable
  mounted () {
    console.log(this.$.appContext.components)
  }
}
</script>

