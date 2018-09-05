<template>
  <div>
    <div v-for="value in cms" :key="value.id">
      <p v-if="value[0].type === 'paragraph'">{{ value[0].text }}</p>
      <h1 v-if="value[0].type === 'heading1'">{{ value[0].text }}</h1>
    </div>
  </div>
</template>

<script>
import config from 'config'
import { currentStoreView } from '@vue-storefront/store/lib/multistore'
export default {
  name: 'CmsPrismic',
  beforeMount () {
    return fetch('http://localhost:8080/api/ext/cms-data/cmsPrismic/' + this.identifier, { // should be config.cms.prismic
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
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
      })
      .catch(() => {
        console.log('CMS module error.')
      })
  },
  props: {
    identifier: {
      type: String,
      default: null,
      required: false
    }
  },
  computed: {
    currentStore () {
      return currentStoreView()
    },
    storeView () {
      return (this.isMultistoreEnable && this.currentStore) ? this.currentStore.storeId : 0
    }
  },
  data () {
    return {
      isMultistoreEnable: false,
      cms: 'Loading content...'
    }
  },
  methods: {
    getEndpointPath () {
      return config.cms.prismic
    }
  }
}
</script>
