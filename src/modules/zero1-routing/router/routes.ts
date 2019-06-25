const Product = () => import(/* webpackChunkName: "vsf-product" */ '../../../themes/d2b/pages/Product.vue')
const Category = () => import(/* webpackChunkName: "vsf-category" */ '../../../themes/d2b/pages/Category.vue')
const CmsPage = () => import(/* webpackChunkName: "vsf-cms" */ '../../../themes/d2b/pages/CmsPage.vue')

export const routes = [
  { name: 'virtual-product', path: '/virtual-product-path/:parentSku/:slug', component: Product },
  { name: 'bundle-product', path: '/bundle-product-path/:parentSku/:slug', component: Product },
  { name: 'simple-product', path: '/simple-product-path/:parentSku/:slug', component: Product },
  { name: 'downloadable-product', path: '/downloadable-product-path/:parentSku/:slug', component: Product },
  { name: 'grouped-product', path: '/grouped-product-path/:parentSku/:slug', component: Product },
  { name: 'configurable-product', path: '/configurable-product-path/:parentSku/:slug/:childSku', component: Product },
  { name: 'product', path: '/product-path/:parentSku/:slug/:childSku', component: Product },
  { name: 'category', path: '/category-path/:slug', component: Category },
  // { name: 'category-with-filters', path: '/:slug'}
  { name: 'cms-page', path: '/cms-page-path/:slug', component: CmsPage }
]
