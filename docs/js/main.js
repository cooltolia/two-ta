jQuery,$.noConflict(),jQuery(document).ready(function(e){var s,a,t,i,o,c,l,n,d,r;e("body").removeClass("pageload"),function(){var s=e(".catalog__filter"),a=e(".products");if(s.length>0){var t=s.offset().top,i=s.outerHeight(!0);e(document).on("scroll",function(o){var c=e(this).scrollTop(),l=e(".main-header").outerHeight();c>=t?(s.addClass("fixed"),s.css("top",l+"px"),a.css("paddingTop",i+"px")):(s.removeClass("fixed"),a.css("paddingTop",0))})}}(),s=e(".color-select__label"),a=e(".color-select__drop-down"),t=e(".catalog__overlay"),i=e(".color-select__item"),o=e(".color-select__reset"),c=e(".order-select__label"),l=e(".order-select__drop-down"),n=e(".order-select__item"),i.on("click",function(s){s.preventDefault(),s.stopPropagation(),e(this).toggleClass("selected")}),o.on("click",function(s){s.preventDefault(),i.each(function(){e(this).removeClass("selected")})}),e(document).click(function(i){i.stopPropagation(),0===a.has(i.target).length&&e(i.target)[0]!==s[0]&&0===l.has(i.target).length&&e(i.target)[0]!==c[0]&&(s.removeClass("active"),a.removeClass("active"),c.removeClass("active"),l.removeClass("active"),t.removeClass("active"))}),e(document).keyup(function(e){27===e.keyCode&&(s.removeClass("active"),a.removeClass("active"),t.removeClass("active"),c.removeClass("active"),l.removeClass("active"))}),t.click(function(){e(this).removeClass("active")}),s.on("click",function(s){var i=e("body").outerWidth();e(this).hasClass("active")?(e(this).removeClass("active"),a.removeClass("active"),t.removeClass("active")):(e(this).addClass("active"),a.css("width",i+"px"),a.addClass("active"),t.addClass("active"))}),n.on("click",function(s){s.preventDefault(),n.removeClass("selected"),e(this).addClass("selected"),c.removeClass("active"),l.removeClass("active"),t.removeClass("active")}),c.on("click",function(s){e(this).hasClass("active")?(e(this).removeClass("active"),l.removeClass("active"),t.removeClass("active")):(e(this).addClass("active"),l.addClass("active"),t.addClass("active"))}),$slider=e(".instagram-preview__list"),$slider.slick({speed:500,arrows:!1,dots:!0,infinite:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,swipe:!0,mobileFirst:!0,responsive:[{breakpoint:768,settings:"unslick"}]}),function(){var s=e(".layout-select__option"),a=e(".products__list");if(window.matchMedia("(min-width: 1200px)").matches)s.filter(".layout-select__option--six").addClass("active");else if(window.matchMedia("(min-width: 768px)").matches){s.filter(".layout-select__option--three").addClass("active")}else{s.filter(".layout-select__option--two").addClass("active")}s.on("click",function(t){if(t.preventDefault(),!e(this).hasClass("active")){s.removeClass("active"),e(this).addClass("active");var i=e(this).data("layout");a.removeClass(function(s,a){var t=a.split(" "),i=[];return e.each(t,function(e,s){/layout.*/.test(s)&&i.push(s)}),i.join(" ")}),a.addClass(i)}})}(),function(){var s=e(".main-header"),a=e(".main-nav__second-menu"),t=e(".main-header__action--search"),i=e(".search"),o=e(".search__reset"),c=e(".search__close"),l=e(".search__input");o.on("click",function(){l.val("")}),c.on("click",function(){i.removeClass("active")}),t.on("click",function(){i.hasClass("active")?i.removeClass("active"):i.addClass("active")}),e(document).click(function(s){0===i.has(s.target).length&&e(s.target)[0]!==t[0]&&i.removeClass("active")}),e(document).on("scroll",function(t){e(this).scrollTop()>=200?(s.addClass("minimized"),a.addClass("shifted")):(s.removeClass("minimized"),a.removeClass("shifted"))})}(),function(){e(".modal").on("hidden.bs.modal",function(s){e(".modal:visible").length?e("body").addClass("modal-open"):e("body").css("padding-right","0px")});var s=e("#loginModal"),a=e("#signupModal"),t=a.find(".change-modal"),i=s.find(".change-modal");t.on("click",function(){a.hide(),s.show()}),i.on("click",function(){s.hide(),a.show()})}(),d=e(".product-data__accordion-title"),r=e(".product-data__accordion-data"),window.matchMedia("(min-width: 1200px)").matches&&(d.addClass("active"),r.addClass("active")),d.on("click",function(){e(this).addClass("active");var s=e(this).next(".product-data__accordion-data");if(d.not(e(this)).each(function(){e(this).removeClass("active")}),r.not(s).each(function(){e(this).slideUp(250,function(){e(this).removeClass("active")})}),s.hasClass("active"))return e(this).removeClass("active"),void s.slideUp(250,function(){s.removeClass("active")});s.slideDown(250,function(){s.addClass("active")})}),$slider=e(".product-instagram__list"),$slider.slick({speed:500,arrows:!1,dots:!0,infinite:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,swipe:!0,mobileFirst:!0,responsive:[{breakpoint:768,settings:"unslick"}]}),$slider=e(".product-slider__images"),$slider.slick({speed:500,arrows:!1,dots:!0,infinite:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,swipe:!0,mobileFirst:!0,responsive:[{breakpoint:768,settings:{slidesPerRow:1,slidesToShow:1,customPaging:function(e,s){return'<image class="product-slider__thumbnail" src="/images/product-slider/product'+(s+1)+'.jpg"></image>'}}}]}),function(){if(window.matchMedia("(max-width: 768px)").matches){var s=e(".hamburger"),a=e(".main-header__side-menu"),t=e(".side-menu__actions"),i=e(".side-menu__close"),o=e(".side-menu .has-subnav"),c=e(".side-menu__back"),l=e(".side-menu__top-menu").outerHeight()+30;t.css("top",l+"px"),s.on("click",function(){a.addClass("active"),e("body").addClass("menu-opened")}),i.on("click",function(){a.removeClass("active"),e("body").removeClass("menu-opened")}),o.on("click",function(s){s.preventDefault();var a=e(this),i=a.parents("ul"),o=a.next(),c=o.outerHeight()+30;t.css("top",c+"px"),i.removeClass("active"),o.addClass("active")}),c.on("click",function(s){s.preventDefault();var a=e(this).parents("ul"),i=a.parents("ul"),o=e(i[0]).outerHeight()+30;t.css("top",o+"px"),e(a[0]).removeClass("active"),e(i[0]).addClass("active")})}}(),function(){var s=e(".terms__sidebar"),a=e(".terms__content");if(window.matchMedia("(max-width: 768px)").matches&&s.length>0){var t=s.outerHeight();a.css("paddingTop",t+"px")}}(),e(".top-screen__slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0});var v=e(".main-header").outerHeight();e("body").css("paddingTop",v+"px")});