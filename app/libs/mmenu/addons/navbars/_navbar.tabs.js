!function(a){a.mmenu.addons.navbars.tabs=function(e,t,n){var s=a.mmenu._c,r=a.mmenu._d,l=a.mmenu._e,d=this,i=e.children("a");e.addClass(s.navbar+"_tabs").parent().addClass(s.navbars+"_has-tabs"),i.on(l.click+"-navbars",function(e){e.preventDefault();var t=a(this);if(t.hasClass(s.navbar+"__tab_selected"))e.stopImmediatePropagation();else try{d.openPanel(a(t.attr("href")),!1),e.stopImmediatePropagation()}catch(a){}}),this.bind("openPanel:start",function a(e){i.removeClass(s.navbar+"__tab_selected");var t=i.filter('[href="#'+e.attr("id")+'"]');if(t.length)t.addClass(s.navbar+"__tab_selected");else{var n=e.data(r.parent);n&&n.length&&a(n.closest("."+s.panel))}})}}(jQuery);