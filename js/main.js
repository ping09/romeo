
//object contain header dom elements and functions for animation
const home = {
  // caching the dom
  elem :function () {
    this.$home = $("#home")
    this.height = $(window).height()
    this.$menu = this.$home.find('.menu-icon')
    this.$intro_header = $('.intro-header');
    this.$overlay = '<div id="particle"></div>';
    $(this.$home).append(this.$overlay);
    
  },
  // set home section height as full window height
  setwindowHeight: function () {
    this.$home.css({
      'height' : this.height,
    });
     this.$intro_header.css({
      'height' : this.height,
    });

  },
  pjs: function (id) {
    
  particlesJS(id, {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 70,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": ["grab"]
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
});
  },
  // menu icon animation

  // initialize all methods
  init:function () {
    this.elem()
    this.setwindowHeight()
    this.pjs("particle")

  },
  // rendering all methods
  render:function  () {
    this.init()
  }
}

var  article = {
  domElement: function() {
    this.$article = $("#blog");
    this.$button = $(".read_more");
  },
  style: function() {
    this.$button.on('click', function(e) {
      e.preventDefault()
      window.open('https://muckrack.com/muktadir-rashid/articles', '_blank')
    })
  },
  init: function () {
    this.domElement();
    this.style();
  }, 
  render: function( ){
    this.init();
  }
}


const googleMap = {
  domElement:function () {
    this.element= document.getElementById("map")
  },
  mapElements:function () {
    this.style =[
  		{
  			featureType: 'all',
  			stylers: [
  				{ saturation: -80}
  			]
  		}, {
  			featureType: "road.arterial",
  			elementType: 'geometry',
  			stylers : [
  				{hue: "#00ffee"},
  				{saturation: 50}
  			]
  		}
  	];
    this.options ={
  		center : {
  			lat: 23.7623913,
  			lng: 90.3951376,
  		},
  		zoom: 12,
  		scrollwheel: false,
  		disableDefaultUI: false,
  		draggable : false,
  		styles: this.style,
      maxZoom: 14,
      draggable: true,
  	};
  },
  Marker: function() {
    this.marKer = {
    position: this.options.center,
  	icon: {
  		path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
  		scale: 2.5,
  	},
  		animation:google.maps.Animation.BOUNCE
    }
  },
  map:function () {
  	this.map = new google.maps.Map(this.element, this.options)
  	this.marker=new google.maps.Marker(this.marKer);
  	this.marker.setMap(this.map)
  },
  render:function () {
    this.domElement()
    this.mapElements()
    this.Marker()
    this.map()
  }
};

const smoothScroll = {
  domCaching:function () {
    this.$mobileNav= $(".mobile-nav");
    this.$anchor = this.$mobileNav.find('a')
    this.chevron = $('.chevron').find('a')
  },
  scroll: function(e) {
    e.preventDefault()
    if (e.target.hash !== "") {
      $('html, body').animate({
        'scrollTop': $(e.target.hash).offset().top,
      }, 900, function () {
        window.location.hash= ""
      })
    }
  },
  render: function() {
    this.$anchor.on('click', this.scroll.bind(this));
    this.chevron.on('click', this.scroll.bind(this))
  
  },
  init: function () {
    this.domCaching();
    this.render();
  }
}


$(function () {
 
  home.render();
  article.render();
  googleMap.render();
  smoothScroll.init();
  
  $("#demo02").animatedModal({
      modalTarget:'modal-02',
      animatedIn: 'slideInUp',
      animatedOut: 'bounceOutDown',
      color:'#fff',
  });
  $('.hamburger').on('click', function() {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active')
      $('.overlay').fadeOut('slow')
      $('.mobile-nav').css({
        'transform' : 'translateX(100%)',
      })
    } else {
      $(this).addClass('is-active');
      $('.mobile-nav').css({
        'transform' : 'translateX(0%)',
      })
      $('.page').append('<div class="overlay"></div>')
      $('.overlay').on('click', function () {
        $('.mobile-nav').css({
          'transform' : 'translateX(100%)',
        })
        $(this).fadeOut('slow')
        $('.hamburger').removeClass('is-active');
      })
    }
  });
  
  
  
});
