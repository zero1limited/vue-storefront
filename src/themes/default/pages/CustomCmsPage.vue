<template>
  <div class="container">
    <h1>Cms content</h1>
    <cms-prismic :identifier="'identyfikator'" />

    <h2>
      Cms page content
    </h2>
    <p>
      (by identifier, it handles current store view if multistore is enable)
    </p>
    <cms-data :identifier="'about-us'" :type="'Page'"/>

    <h2>Cms block content
    </h2>
    <p>
      (by identifier, it handles current store view if multistore is enable)
    </p>
    <cms-data :identifier="'contact-us-info'" :type="'Block'"/>

    <h2>
      Cms page content
    </h2>
    <p>
      (by id only default store view (0))
    </p>
    <cms-data :id="5" :type="'Page'" />

    <h2>
      Cms block content
    </h2>
    <p>
      (by id only default store view (0))
    </p>
    <cms-data :id="2" :type="'Block'" />
  </div>
</template>

<script>
import CmsData from 'src/extensions/cms/components/CmsData'
import CmsPrismic from 'src/extensions/cms/components/CmsPrismic'

export default {
  components: {
    CmsData,
    CmsPrismic
  }
}
</script>

<style lang="scss">
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-secondary: color(secondary);

.cms-content {
  & * {
    font-size: 18px;
  }

  a {
    color: $color-secondary;
    text-decoration: underline;
  }

}
</style>
