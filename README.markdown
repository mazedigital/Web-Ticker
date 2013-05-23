#Web Ticker v2.1.1

##How to use

Below are the main usage examples, first to start the ticker select the list where you want to start your ticker and pass your settings.

	$('#webTicker').webTicker(settings);
	//where webTicker is the id of the container you would like the ticker to run upon above function starts ticker rotating

Once started then you have the ability to 'pause' and 'continue' the ticker as required. Most useful when you want to pause the animation when another action on your website is taken.

	$('#webTicker').webTicker('stop');
	//stop the ticker from moving

	$('#webTicker').webTicker('cont');
	//continue ticker movement from where it was before (same settings as previously will be used)

### Manually updating the Ticker Items

New in this version, the ticker now allows you to update its items without requiring it to restart.
The update functionality supports two modes 'swap' and 'reset' which are set accordingly when the ticker is started.

	$("#webticker").webTicker('update','<li data-update="item1">First News Item Updated</li><li data-update="item3">Third News Item Updated</li><li data-update="item4">Fourth News Item Updated</li><li data-update="item9">Ninth News Item Updated</li><li data-update="itemnew1">This is New Item 1</li><li  data-update="itemnew2">This is New Item 2</li><li  data-update="itemnew3">This is New Item 3</li><li  data-update="itemnew4">This is New Item 4</li>','swap',[insert],[remove]);

The swap functionality uses `data-update` attributes to identify uniquie items in the list. 
When a node value is changed this is just 'swapped' leaving it in the same positions.
Items not in the 'update' list are not removed whilst new ones would be added at the end. 
This behaviour can be altered by passing the last two parameters, insert & remove. 
A boolean value of `true` would indicate new items to be added/removed respectively.

On the other-hand the `reset` just clears the list and starts afresh.

### Using the RSS feature

Rss Feeds are now automatically supported by the ticker; note that as per javascript cross-domain restrictions you can only load RSS feeds from your own website.

	$("#webticker").webTicker({rssurl:'http://yourwebsite.com/rss/', rssfrequency:5});

The above command will automatically pull up the RSS feed from your website & update every 5 minutes.


## Settings - Optional

Below find a list of settings and the relative default values.

	speed: 50, //pixels per second
	direction: "left", //if to move left or right
	moving: true, //weather to start the ticker in a moving or static position
	startEmpty: true, //weather to start with an empty or full ticker
	duplicate: false, //if there is less items then visible on the ticker you can duplicate the items to make it continuous
	rssurl: false, //only set if you want to get data from rss
	rssfrequency: 0, //the frequency of updates in minutes. 0 means do not refresh
	updatetype: "reset" //how the update would occur options are "reset" or "swap"
	hoverpause: true //pause the ticker when hovered

**NB:** As of version 2.1.0 ids are not required on the lists as closure is implemented making each one unique

##CSS Requirements:

.tickercontainer

	width:600px; //width of the original container in which the ticker appears
	float: left; //float same as the direction used


.tickercontainer li

//width of the original container in which the ticker appears

	float: left; //float same as the direction used

.tickercontainer .mask

	padding: 5px;//can be used to achieve padding within the container

### CSS3 Transition Support

In version 2.1.0 css3 transition support has been added; however for this to work properly the following Rules are required

ul.newsticker

	-webkit-transition: all 0s linear;
	-moz-transition: all 0s linear;
	-o-transition: all 0s linear;
	transition: all 0s linear;

**NB:** The above rule is especially required to set all elements to support transition and have a linear effect. Changing the `easing` function might have unexpected effects. The CSS transition duration is changed dynamically by the ticker as required to provide a smooth transition.

### Optional

.tickeroverlay-left , .tickeroverlay-right

	background-image:...//can both be used to achieve a fade-in and fade-out effect 

## Licence

This software is free for Personal use however Donations would be appreciated in Commercial Applications where the developer or owner is to make financial benefit.
Donations are not requied and I will not check weather someone 'paid' the donation or no, however it would be appreciated if you find the ticker useful to your needs.

The (full dual-licence is available to read here)[https://github.com/jonmifsud/Web-Ticker/blob/master/licence.md]

-------------

The buy now button found below; is the one that should be used for any donations.
Note that any donations given will be re-invested in time making alterations and additions to the ticker.
If there is something you'd like to see feel free to add a bug report or feature request.

<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="NYPE2HLXLCMA4">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

<a href="http://flattr.com/thing/1357511/jQuery-Web-Ticker" target="_blank"><img src="http://api.flattr.com/button/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0" /></a>

##Change Log

2.1.1

 - Fixed CSS3 Support for Firefox
 - Fixed CSS3 Check function to support Fallback for IE

2.1.0

 - Added CSS3 Transition Support
 - Improved cods & closures
 - No need to set unique IDs when running multiple tickers with different options
 - Streamlined the update Swap Feature
 - Added two new boolean parameters to the Update function [insert/remove]

2.0.0

 - Complete Rewrite and restructuring of the Ticker
 - Added the ability to Update the ticker live
 - Added ability to load RSS & update periodically (same domain)
 - Breaking compatibility from 1.x