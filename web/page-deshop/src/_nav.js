export default {
  items: [
    {
      name: '首頁',
      url: '/dashboard',
      icon: 'icon-home',
      badge: {
        variant: 'secondary',
        text: 'latest'
      }
    },
    {
      name: '商品陣列',
      icon: 'icon-heart',
      children: [
        {
          name: '高級珠寶',
          url: '/theme/colors', 
        },
        {
          name: '婚嫁珠寶',
          url: '/theme/typography', 
        },
        {
          name: '項鍊',
          url: '/base/breadcrumbs',
        },
        {
          name: '戒指',
          url: '/base/cards',
        },
        {
          name: '手鍊',
          url: '/base/carousels',
        },
        {
          name: '耳環',
          url: '/base/collapses',
        },
        {
          name: '手鏈/腳鏈',
          url: '/base/jumbotrons',
        },
        {
          name: '串飾',
          url: '/base/list-groups',
        }
        
      ]
    },
    
    {
      name: '最新消息',
      url: '/icons/flags',
      icon: 'icon-star',
      badge: {
        variant: 'secondary',
        text: 'latest new'
      }
      // children: [
      //   {
      //     name: 'Monthly Offers',
      //     url: '/icons/coreui-icons',
      //     icon: 'icon-star',
      //     badge: {
      //       variant: 'info',
      //       text: 'NEW'
      //     }
      //   },
      //   {
      //     name: 'Weekly Offers',
      //     url: '/icons/flags',
      //     icon: 'icon-star'
      //   },
      //   {
      //     name: 'Buy 1 get 1 Free',
      //     url: '/icons/font-awesome',
      //     icon: 'icon-star',
         
      //   }
       
      // ]
    },

    {
      name: '品牌故事',
      url: '/base/forms',
      icon: 'icon-puzzle'
    },
    {
      name: '店家資訊',
      url: '/buttons/standard-buttons',
      icon: 'icon-info',
      // children: [
      //   {
      //     name: 'page1',
      //     url: '/buttons/standard-buttons',
      //     icon: 'icon-cursor'
      //   },
      //   {
      //     name: 'page2',
      //     url: '/buttons/dropdowns',
      //     icon: 'icon-cursor'
      //   },
      //   {
      //     name: 'page3',
      //     url: '/buttons/button-groups',
      //     icon: 'icon-cursor'
      //   },
      //   {
      //     name: 'page4',
      //     url: '/buttons/brand-buttons',
      //     icon: 'icon-cursor'
      //   }
      // ]
    },
    {
      name: '會員|註冊',
      url: '/signup',
      icon: 'icon-user'
    },
    {
      name: 'Upload',
      url: '/upload',
      icon: 'icon-game-controller'
    },
   
    // {
    //   name: '預約體驗',
    //   url: '/pages/login',
    //   icon: 'icon-energy',
    // },
    
    
    
  ]
}
