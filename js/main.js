//object contain header dom elements and functions for animation
const home = {
  // caching the dom
  elem () {
    this.$home = $(".home")
    this.height = $(window).height()
    this.$menu = this.$home.find('.menu-icon')
  },
  // set home section height as full window height
  setwindowHeight () {
    this.$home.css({
      'height' : this.height,
    })
  },
  // menu icon animation

  // initialize all methods
  init () {
    this.elem()
    this.setwindowHeight()

  },
  // rendering all methods
  render () {
    this.init()
  }
}

$(document).ready(function () {
  home.render()
//   $.jvmobilemenu({
//   mainContent: $('.page'),
//   theMenu: $('.mobile-nav'),
//   slideSpeed: 0.3,
//   menuWidth: 240,
//   position: 'right',
//   menuPadding: '20px 20px 60px'
// });

$('body').jvmobilemenu({

// selector to click outside menu to close
notMenuClick: $('.page'),

// speed to open and close menu
slideSpeed: 0.3,

// width of the mobile menu
menuWidth: 240,
position: 'right',
menuPadding: '20px 20px 60px'

});
});
