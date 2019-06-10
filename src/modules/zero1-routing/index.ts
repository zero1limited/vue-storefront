import { createModule } from '@vue-storefront/core/lib/module'
import { routes } from './router/routes'

const KEY = 'zero1-routing'
export const Zero1Routing = createModule({
  key: KEY,
  router: { routes }
})