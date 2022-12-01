<template>
  <div>
    I am the App
    <button @click.prevent="addThirdPartyThing">Add 3rd Party Thing</button>
    <div v-if="thirdPartyComponent">
      <component :is="thirdPartyComponent"></component>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    thirdPartyComponent: null
  }),

  methods: {
    addThirdPartyThing () {
      this.thirdPartyComponent = 'hello-world'
    }
  }
}
</script>
