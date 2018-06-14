import Hero from '@/components/Hero'
import Shootings from '@/components/Shootings'
import Comparatives from '@/components/Comparatives'
import Contact from '@/components/Contact'
import Credits from '@/components/Credits'

const routes = [
  { path: '/', component: Hero, name: 'hero' },
  { path: '/shootings', component: Shootings, name: 'shootings' },
  { path: '/comparatives', component: Comparatives, name: 'comparatives' },
  { path: '/contact', component: Contact, name: 'contact' },
  { path: '/credits', component: Credits, name: 'credits' }
]

export default routes