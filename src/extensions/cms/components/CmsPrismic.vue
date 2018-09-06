<template>
  <div>
    <div v-for="value in cms" :key="value.id">
      <p v-if="value[0].type === 'paragraph'">{{ value[0].text }}</p>
      <h1 v-if="value[0].type === 'heading1'">{{ value[0].text }}</h1>
      <h2 v-if="value[0].type === 'heading2'">{{ value[0].text }}</h2>
      <h3 v-if="value[0].type === 'heading3'">{{ value[0].text }}</h3>
      <h4 v-if="value[0].type === 'heading4'">{{ value[0].text }}</h4>
      <h5 v-if="value[0].type === 'heading5'">{{ value[0].text }}</h5>
      <h6 v-if="value[0].type === 'heading6'">{{ value[0].text }}</h6>
    </div>
    <h4 v-show="loading">
      Loading content...
    </h4>
  </div>
</template>

<script>
import config from 'config'
import fetch from 'isomorphic-fetch'

export default {
  name: 'CmsPrismic',
  beforeMount () {
    fetch('http://localhost:8080/api/ext/cms-data/cmsPrismic/' + this.type + '/' + this.orderings, { // should be: config.cms.prismic
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
      .then((response) => {
        return response.text()
      })
      .then((res) => {
        let json = JSON.parse(res)
        let temp = []
        for (let key in json.result[0].data) {
          temp.push(json.result[0].data[key])
        }
        this.cms = temp
        this.loading = false
      })
      .catch(() => {
        console.log('CMS module error.')
      })
  },
  props: {
    type: {
      type: String,
      default: null,
      required: true
    },
    orderings: {
      type: String,
      default: null,
      required: true
    }
  },
  data () {
    return {
      loading: true,
      cms: null
    }
  },
  methods: {
    getEndpointPath () {
      return config.cms.prismic
    }
  }
}
</script>
