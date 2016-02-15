#Web Ticker v2.2.0

##How to use

Below are the main usage examples, first to start the ticker select the list where you want to start your ticker and pass your settings.

	$('#webTicker').webTicker(settings);
	//where webTicker is the id of the container you would like the ticker to run upon
	//and settings is used to change the default values of the individual setting parameters (see below for the list of settings)

### Functionality

Once started, you have the ability to manipulate the ticker as required. The functionalities are:

	$('#webTicker').webTicker('stop');
	//stop the ticker from moving

	$('#webTicker').webTicker('cont');
	//continue ticker movement from where it was before (same settings as previously will be used)

	$("#webticker").webTicker('update','<li data-update="item1"> New Item One </li> <li data-update="item2"> New Two </li> <li data-update="item3"> Three </li>','swap',true,false)
	//updating the list (explained in more depth in the next section)

	$("#webticker").webTicker('transition', 'ease');
	//changes the current transision to Ease

	$("#webticker").webTicker('transition', 'linear');
	//changes the current transision to Linear


### Manually updating the Ticker Items

The ticker allows you to update its items without requiring it to restart.
The update functionality supports two modes 'swap' and 'reset' which are set accordingly when the ticker is started.

	$("#webticker").webTicker('update','<li data-update="item1">First News Item Updated</li><li data-update="item3">Third News Item Updated</li><li data-update="item4">Fourth News Item Updated</li><li data-update="item9">Ninth News Item Updated</li><li data-update="itemnew1">This is New Item 1</li><li  data-update="itemnew2">This is New Item 2</li><li  data-update="itemnew3">This is New Item 3</li><li  data-update="itemnew4">This is New Item 4</li>','swap',[insert],[remove]);

The swap functionality uses `data-update` attributes to identify uniquie items in the list. 
When a node value is changed this is just 'swapped' leaving it in the same positions.
Items not in the 'update' list are not removed whilst new ones would be added at the end. 
This behaviour can be altered by passing the last two parameters, insert & remove. 
A boolean value of `true` would indicate new items to be added/removed respectively.
The default values for 'insert' is true whilst 'remove' is false.

On the other-hand the `reset` just clears the list and starts afresh.

### Using the RSS feature

Rss Feeds are automatically supported by the ticker; note that as per javascript cross-domain restrictions you can only load RSS feeds from your own website.

	$("#webticker").webTicker({rssurl:'http://yourwebsite.com/rss/', rssfrequency:5});

The above command will automatically pull up the RSS feed from your website & update every 5 minutes.


## Settings - Optional

Below find a list of settings and the relative default values.

	speed: 50, //pixels per second
	direction: "left", //if to move left or right
	moving: true, //whether to start the ticker in a moving or static position
	startEmpty: true, //whether to start with an empty or full ticker
	duplicate: false, //if there is less items then visible on the ticker you can duplicate the items to make it continuous
	rssurl: false, //only set if you want to get data from rss
	rssfrequency: 0, //the frequency of updates in minutes. 0 means do not refresh
	updatetype: "reset" //how the update would occur options are "reset" or "swap"
	hoverpause: true //pause the ticker when hovered
	transition: "linear", //the type of transition used for each item in the ticker
	height: '30px', // the height of the ticker
	maskleft: '', // the image for the left mask
	maskright: '', // the image for the right mask
	maskwidth: 0 // the width of the masks

**NB:** As of version 2.1.0 ids are not required on the lists as closure is implemented making each one unique

### Optional

	.tickercontainer { 
	background: #999; /* Sets the background colour of the ticker */
	}

## Licence

This software is free for Personal use however Donations would be appreciated in Commercial Applications where the developer or owner is to make financial benefit.
Donations are not requied and I will not check whether someone 'paid' the donation or no, however it would be appreciated if you find the ticker useful to your needs.

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

 - Added two new functionalities
	1. Ability to choose between Ease or Linear transitions
	2. The ticker can now use masks (to make text fade from the sides)
 - Injected required CSS rules in JS file
 - Fixed bug when updating with multiple new <li> items - only the last new item was being added
 - Fixed bug when adding a new <li> item in non-duplicate setting - ordering was not being handled well
 - Fixed bug when updating the list with shorter content than the original - duplication only filled the row partially
 - Fixed bug when resizing - width of the ticker was not being updated
 - Fixed bug when having a very long <li> item crashed the ticker - when trying to compare width of items to width of the ticker

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