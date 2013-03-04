/*!
 * webTicker 1.3
 * Examples and documentation at: 
 * http://jonmifsud.com
 * 2011 Jonathan Mifsud
 * Version: 1.2 (26-JUNE-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.4.2 or later
 * 
 */
(function( $ ){

  var globalSettings = new Array();

	function scrollnews(distance,$strip){
		var settings = globalSettings[$strip.attr('id')];
		isBlank = $strip.children().first().hasClass('webticker-init');
		timeToComplete = distance * 1000 / settings.speed;
		var animationSettings = {};
		// animationSettings[settings.direction] = - distance;		
		animationSettings[settings.direction] = $strip.css(settings.direction).replace('px','').replace('auto','0') - distance;		
		$strip.animate(animationSettings, timeToComplete, "linear", function(){
			if (isBlank) 
				$strip.children().first().remove();
			else 
				$strip.children().last().after($strip.children().first());
			var first = $strip.children().first();
			var width = first.outerWidth(true);
			$strip.css(settings.direction, '0');
			scrollnews(width,$strip);
		});
	}

	function updaterss(rssurl,type,$strip){
		var list;
		$.get(rssurl, function(data) {
		    var $xml = $(data);
		    $xml.find("item").each(function() {
		        var $this = $(this),
		            item = {
		                title: $this.find("title").text(),
		                link: $this.find("link").text()
		        }
		        listItem = "<li><a href='"+item.link+"'>"+item.title+"</a></li>";
		        list += listItem;
		        //Do something with item here...
		    });
			$strip.webTicker('update', list, type);
		});
	}

	function initalize($strip){
		var settings = globalSettings[$strip.attr('id')];
		$strip.width('auto');
		var stripWidth = $strip.width();
		if(stripWidth < $strip.parent().width()){
			//if duplicate items
			if (settings.duplicate){
				var listItems = $strip.children().clone();
				$strip.append(listItems);
			}else {
				//if fill with empty padding
				var emptySpace = $strip.parent().width() - stripWidth;
				emptySpace += $strip.find("li:first").width();
				var height = $strip.find("li:first").height();

				$strip.append('<li class="ticker-spacer" style="width:'+emptySpace+'px;height:'+height+'px;"></li>');
			}
		}
		if (settings.startEmpty){
			var height = $strip.find("li:first").height();
			$strip.prepend('<li class="webticker-init" style="width:'+$strip.parent().width()+'px;height:'+height+'px;"></li>');
		}
		//extra width to be able to move items without any jumps	$strip.find("li:first").width()	

		stripWidth = 0;
		$strip.children('li').each(function(){
			stripWidth += $(this).outerWidth( true );
		});	
		$strip.width(stripWidth+200);	
	}

  var methods = {
    init : function( settings ) { // THIS 
		settings = jQuery.extend({
			speed: 50, //pixels per second
			direction: "left",
			moving: true,
			startEmpty: true,
			duplicate: false,
			rssurl: false,
			rssfrequency: 0,
			updatetype: "reset"
		}, settings);
		globalSettings[jQuery(this).attr('id')] = settings;
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker");
				var $mask = $strip.wrap("<div class='mask'></div>");
				$mask.after("<span class='tickeroverlay-left'>&nbsp;</span><span class='tickeroverlay-right'>&nbsp;</span>")
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");	
				
				initalize($strip);
				
				if (settings.rssurl){
					updaterss(settings.rssurl,settings.type,$strip);
					if (settings.rssfrequency>0){
						window.setInterval(function(){updaterss(settings.rssurl,settings.type,$strip);},settings.rssfrequency*1000*60);
					}
				}

				var first = $strip.children().first();
				var distance = first.outerWidth(true);
				scrollnews(distance,$strip);				
				$strip.hover(function(){
					jQuery(this).stop();
				},
				function(){
					if (globalSettings[jQuery(this).attr('id')].moving){
						//function to start the ticker
						var offset = jQuery(this).offset();
						var first = $strip.children().first();
						var width = first.outerWidth(true);
						var residualSpace;
						if (settings.direction == 'left') residualSpace = parseInt(jQuery(this).css('left').replace('px',''))+ width;
						else residualSpace = parseInt(jQuery(this).css('right').replace('px',''))+ width;
						scrollnews(residualSpace,$strip);						
					}
				});			
		});
	},
    stop : function( ) { 
		if (globalSettings[jQuery(this).attr('id')].moving){
			globalSettings[jQuery(this).attr('id')].moving = false;
			return this.each(function(){
				jQuery(this).stop();
			});
		}
	},
    cont : function( ) { // GOOD 	
		if (!(globalSettings[jQuery(this).attr('id')].moving)){
			globalSettings[jQuery(this).attr('id')].moving = true;
			var settings = globalSettings[jQuery(this).attr('id')];
			return this.each(function(){
				var $strip = jQuery(this);
				var offset = jQuery(this).offset();
				var first = $strip.children().first();
				var width = first.outerWidth(true);
				var residualSpace;
				if (settings.direction == 'left') residualSpace = parseInt(jQuery(this).css('left').replace('px',''))+ width;
				else residualSpace = parseInt(jQuery(this).css('right').replace('px',''))+ width;
				scrollnews(residualSpace,$strip);
			});	
		}
	},
	update : function( list, type) { 
		type = type || "reset";
		if( typeof list === 'string' ) {
		    list = $(list);
		}
		var $strip = jQuery(this);
		$strip.webTicker('stop');
		var settings = globalSettings[jQuery(this).attr('id')];
		if (type == 'reset'){
			//this does a 'restart of the ticker'
			$strip.html(list);
			$strip.css(settings.direction, '0');
			initalize($strip);
		} else if (type == 'swap'){
			// should the update be a 'hot-swap' or use replacement for IDs (in which case remove new ones)
			$strip.children('li').addClass('old');
			for (var i = 0; i < list.length; i++) {
				match = $strip.find(list[i]);//should try find the id or data-attribute.
				if (match.length < 1){
					//we need to move this item into the dom
					if ($strip.find('.ticker-spacer:first-child').length == 0 && $strip.find('.ticker-spacer').length > 0){
						$strip.children('li.ticker-spacer').before(list[i]);
					}
					else 
						$strip.append(list[i]);
				} else match.removeClass('old');
			};
			$strip.children('li.webticker-init, li.ticker-spacer').removeClass('old');
			$strip.children('li').remove('.old');
			stripWidth = 0;
			$strip.children('li').each(function(){
				stripWidth += $(this).outerWidth( true );
			});	
			$strip.width(stripWidth+200);
		}
		
		$strip.webTicker('cont');
	}
  };

  $.fn.webTicker = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.webTicker' );
    }    
  
  };

})( jQuery );