#Web Ticker v2.0.1

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

	$("#webticker").webTicker('update','<li id="item1">First News Item Updated</li><li id="item3">Third News Item Updated</li><li id="item4">Fourth News Item Updated</li><li id="item9">Ninth News Item Updated</li><li id="itemnew1">This is New Item 1</li><li  id="itemnew2">This is New Item 2</li><li  id="itemnew3">This is New Item 3</li><li  id="itemnew4">This is New Item 4</li>','swap');

The swap functionality uses `id` attributes to make sure there is a single unique copy in the list. 
When a node value is changed this is just 'swapped' leaving it in the same positions.
Items not in the 'update' list are removed whilst new ones would be added at the end.

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

##CSS Requirements:

.tickercontainer

	width:600px; //width of the original container in which the ticker appears
	float: left; //float same as the direction used


.tickercontainer li

//width of the original container in which the ticker appears

	float: left; //float same as the direction used

.tickercontainer .mask

	padding: 5px;//can be used to achieve padding within the container

NB: if running multiple tickers it is suggested that you use the id rather then the class name should they have different directions and or sizes.

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