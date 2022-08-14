import Vue from 'vue'
import Router from 'vue-router'

 //Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')


// Views
const Dashboard = () => import('@/views/Dashboard')
const Modal = () => import('@/views/Modal')
const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')
const Product = () => import('@/views/theme/Product')
const Info = () => import('@/views/theme/Info')
const Product1 = () => import('@/views/theme/product1')
const Product2 = () => import('@/views/theme/product2')
const Product3 = () => import('@/views/theme/product3')
const Product4 = () => import('@/views/theme/product4')
const Product5 = () => import('@/views/theme/product5')
const Product6 = () => import('@/views/theme/product6')
const Product7 = () => import('@/views/theme/product7')
const Product01 = () => import('@/views/theme/product0-1')
const Product02 = () => import('@/views/theme/product0-2')
const Product03 = () => import('@/views/theme/product0-3')
const Product04 = () => import('@/views/theme/product0-4')
const Product05 = () => import('@/views/theme/product0-5')
const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
//webmms
import Upload from '../views/webmms/upload.vue'
// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')
//contact
const Contact = () => import('@/views/contact/Contact')
//Cart
const Cart = () => import('@/views/cart/Cart')
//Productpage
const Productpage = () => import('@/views/productpage/Productpage')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
        path: 'productpage',
        name: 'Productpage',
        component: Productpage
      },
      

        
        {
          path: 'theme',
          redirect: '/theme',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'product',
              name: 'Product',
              component: Product
            },
            {
              path: 'product1',
              name: 'Product1',
              component: Product1
            },
            {
              path: 'product2',
              name: 'Product2',
              component: Product2
            },
            {
              path: 'product3',
              name: 'Product3',
              component: Product3
            },
            {
              path: 'product4',
              name: 'Product4',
              component: Product4
            },
            {
              path: 'product5',
              name: 'Product5',
              component: Product5
            },
            {
              path: 'product6',
              name: 'Product6',
              component: Product6
            },
            {
              path: 'product7',
              name: 'Product7',
              component: Product7
            },
            {
              path: 'product01',
              name: 'Product01',
              component: Product01
            },
            {
              path: 'product02',
              name: 'Product02',
              component: Product02
            },
            {
              path: 'product03',
              name: 'Product03',
              component: Product03
            },
            {
              path: 'product04',
              name: 'Product04',
              component: Product04
            },
            {
              path: 'product05',
              name: 'Product05',
              component: Product05
            },
            {
              path: 'info',
              name: 'Info',
              component: Info
            },
            
            
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
        
      ]
    },   
  ]
})
