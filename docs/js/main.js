jQuery,$.noConflict(),jQuery(document).ready(function(e){var t,s,a,i,o,c,n,r,l,d,v,u,p,m;e("body").removeClass("pageload"),t=e(".cart-product__remove"),s=e(".cart-product__counter"),a=e(".cart__result-sum .value"),i=0,0!==t.length&&(t.on("click",function(){var t=e(this),s=t.parent().parent();s.addClass("js-removed");var o=parseInt(t.parent().find(".cart-product__price .value").text()),c=t.parent().find(".current"),n=parseInt(c.text());i-=o*n,a.text(i),setTimeout(function(){s.slideUp()},500)}),s.each(function(){var t=e(this),s=t.find(".plus"),o=t.find(".minus"),c=t.find(".current"),n=parseInt(c.text()),r=parseInt(t.parent().find(".cart-product__price .value").text());i+=r*n,a.text(i),s.on("click",function(){99!==n&&(n++,i+=r,a.text(i),c.text(n))}),o.on("click",function(){1!==n&&(n--,i-=r,a.text(i),c.text(n))})})),function(){var t=e(".catalog__filter"),s=e(".products");if(t.length>0){var a=t.offset().top,i=t.outerHeight(!0);e(document).on("scroll",function(o){var c=e(this).scrollTop(),n=e(".main-header").outerHeight();c>=a?(t.addClass("fixed"),t.css("top",n+"px"),s.css("paddingTop",i+"px")):(t.removeClass("fixed"),s.css("paddingTop",0))})}}(),0!==(o=e(".checkout-form__input-info a")).length&&o.on("click",function(t){if("#"!==e(this).attr("href")[0])return!0;t.preventDefault();var s=e(this.hash);e("html, body").animate({scrollTop:s.offset().top-100},300)}),c=e(".color-select__label"),n=e(".color-select__drop-down"),r=e(".catalog__overlay"),l=e(".color-select__item"),d=e(".color-select__reset"),v=e(".order-select__label"),u=e(".order-select__drop-down"),p=e(".order-select__item"),l.on("click",function(t){t.preventDefault(),t.stopPropagation(),e(this).toggleClass("selected")}),d.on("click",function(t){t.preventDefault(),l.each(function(){e(this).removeClass("selected")})}),e(document).click(function(t){t.stopPropagation(),0===n.has(t.target).length&&e(t.target)[0]!==c[0]&&0===u.has(t.target).length&&e(t.target)[0]!==v[0]&&(c.removeClass("active"),n.removeClass("active"),v.removeClass("active"),u.removeClass("active"),r.removeClass("active"))}),e(document).keyup(function(e){27===e.keyCode&&(c.removeClass("active"),n.removeClass("active"),r.removeClass("active"),v.removeClass("active"),u.removeClass("active"))}),r.click(function(){e(this).removeClass("active")}),c.on("click",function(t){var s=e("body").outerWidth();e(this).hasClass("active")?(e(this).removeClass("active"),n.removeClass("active"),r.removeClass("active")):(e(this).addClass("active"),n.css("width",s+"px"),n.addClass("active"),r.addClass("active"))}),p.on("click",function(t){t.preventDefault(),p.removeClass("selected"),e(this).addClass("selected"),v.removeClass("active"),u.removeClass("active"),r.removeClass("active")}),v.on("click",function(t){e(this).hasClass("active")?(e(this).removeClass("active"),u.removeClass("active"),r.removeClass("active")):(e(this).addClass("active"),u.addClass("active"),r.addClass("active"))}),(m=e(".footer-appeal__form")).on("submit",function(t){t.preventDefault(),e("#appealSubmitted").modal("show"),m.find("input").val("")}),$slider=e(".instagram-preview__list"),$slider.slick({speed:500,arrows:!1,dots:!0,infinite:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,swipe:!0,mobileFirst:!0,responsive:[{breakpoint:768,settings:"unslick"}]}),function(){var t=e(".layout-select__option"),s=e(".products__list");if(window.matchMedia("(min-width: 1200px)").matches)t.filter(".layout-select__option--six").addClass("active");else if(window.matchMedia("(min-width: 768px)").matches){t.filter(".layout-select__option--three").addClass("active")}else{t.filter(".layout-select__option--two").addClass("active")}t.on("click",function(a){if(a.preventDefault(),!e(this).hasClass("active")){t.removeClass("active"),e(this).addClass("active");var i=e(this).data("layout");s.removeClass(function(t,s){var a=s.split(" "),i=[];return e.each(a,function(e,t){/layout.*/.test(t)&&i.push(t)}),i.join(" ")}),s.addClass(i)}})}(),function(){var t=e(".main-header"),s=e(".main-nav__second-menu"),a=e(".main-header__action--search"),i=e(".search"),o=e(".main-header__action--cart"),c=e(".cart-preview"),n=e(".cart-preview__close");e(".cart-preview__product-remove").on("click",function(){var t=e(this).parent();t.addClass("js-removed"),setTimeout(function(){t.slideUp()},500)}),o.on("click",function(){c.toggleClass("js-active")}),n.on("click",function(){c.removeClass("js-active")});var r=e(".search__reset"),l=e(".search__close"),d=e(".search__input");r.on("click",function(){d.val("")}),l.on("click",function(){i.removeClass("active")}),a.on("click",function(){i.hasClass("active")?i.removeClass("active"):i.addClass("active")}),e(document).click(function(t){0===i.has(t.target).length&&e(t.target)[0]!==a[0]&&i.removeClass("active")}),e(document).on("scroll",function(a){e(this).scrollTop()>=200?(t.addClass("minimized"),s.addClass("shifted")):(t.removeClass("minimized"),s.removeClass("shifted"))})}(),function(){e(".modal").on("hidden.bs.modal",function(t){e(".modal:visible").length?e("body").addClass("modal-open"):e("body").css("padding-right","0px")});var t=e("#loginModal"),s=e("#signupModal"),a=s.find(".change-modal"),i=t.find(".change-modal");a.on("click",function(){s.hide(),t.show()}),i.on("click",function(){t.hide(),s.show()})}(),function(){var t=e(".checkout__wrapper"),s=t.outerHeight(!0),a=e(".order-preview"),i=a.outerHeight(!0);if(0!==t.length){var o=t.offset().top-e(window).scrollTop();console.log(o),window.matchMedia("(min-width: 769px)").matches&&e(document).on("scroll",function(){var o=t.offset().top-e(window).scrollTop();if(o<50){if(-o>s-i-100)return;var c=100-o;a.css("transform","translateY("+c+"px)")}else a.css("transform","translateY(0)")})}}(),function(){var t=e(".product-data__accordion-title"),s=e(".product-data__accordion-data");window.matchMedia("(min-width: 1200px)").matches&&(t.addClass("active"),s.addClass("active")),t.on("click",function(){e(this).addClass("active");var a=e(this).next(".product-data__accordion-data");if(t.not(e(this)).each(function(){e(this).removeClass("active")}),s.not(a).each(function(){e(this).slideUp(250,function(){e(this).removeClass("active")})}),a.hasClass("active"))return e(this).removeClass("active"),void a.slideUp(250,function(){a.removeClass("active")});a.slideDown(250,function(){a.addClass("active")})});var a=e(".main-header__action--cart").find(".indicator");e(".product-data .js-add-to-cart").on("click",function(t){t.preventDefault(),e("#addedToCart").modal("show"),a.addClass("js-active")})}(),$slider=e(".product-instagram__list"),$slider.slick({speed:500,arrows:!1,dots:!0,infinite:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,swipe:!0,mobileFirst:!0,responsive:[{breakpoint:768,settings:"unslick"}]}),$slider=e(".product-slider__images"),$slider.slick({speed:500,arrows:!1,dots:!0,infinite:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,swipe:!0,mobileFirst:!0,responsive:[{breakpoint:768,settings:{slidesPerRow:1,slidesToShow:1,customPaging:function(e,t){return'<image class="product-slider__thumbnail" src="/images/product-slider/product'+(t+1)+'.jpg"></image>'}}}]}),function(){if(window.matchMedia("(max-width: 768px)").matches){var t=e(".hamburger"),s=e(".main-header__side-menu"),a=e(".side-menu__actions"),i=e(".side-menu__close"),o=e(".side-menu .has-subnav"),c=e(".side-menu__back"),n=e(".side-menu__top-menu").outerHeight()+30;a.css("top",n+"px"),t.on("click",function(){s.addClass("active"),e("body").addClass("menu-opened")}),i.on("click",function(){s.removeClass("active"),e("body").removeClass("menu-opened")}),o.on("click",function(t){t.preventDefault();var s=e(this),i=s.parents("ul"),o=s.next(),c=o.outerHeight()+30;a.css("top",c+"px"),i.removeClass("active"),o.addClass("active")}),c.on("click",function(t){t.preventDefault();var s=e(this).parents("ul"),i=s.parents("ul"),o=e(i[0]).outerHeight()+30;a.css("top",o+"px"),e(s[0]).removeClass("active"),e(i[0]).addClass("active")})}}(),function(){var t=e(".terms");if(0!==t.length){var s=t.outerHeight(!0),a=e(".terms-sidebar"),i=a.outerHeight(!0),o=t.offset().top-e(window).scrollTop();console.log(o),window.matchMedia("(min-width: 769px)").matches&&e(document).on("scroll",function(){var o=t.offset().top-e(window).scrollTop();if(o<50){if(-o>s-i-50)return;var c=50-o;a.css("transform","translateY("+c+"px)")}else a.css("transform","translateY(0)")})}}(),function(){var t=e(".terms__sidebar"),s=e(".terms__content");if(window.matchMedia("(max-width: 768px)").matches&&t.length>0){var a=t.outerHeight();s.css("paddingTop",a+"px")}}(),e(".top-screen__slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0});var h=e(".main-header").outerHeight();e("body").css("paddingTop",h+"px")});