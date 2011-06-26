#Web Ticker v1.3

##How to use

$('#webTicker').webTicker(settings);

//where webTicker is the id of the container you would like the ticker to run upon above function starts ticker rotating

$('#webTicker').webTicker('stop');

//stop the ticker from moving

$('#webTicker').webTicker('cont');

//continue ticker movement from where it was before (same settings as previously will be used)


## Settings - Optional

The settings at this point in time only include the speed of the ticker which is set by default to 0.05 as well as the direction of the ticker.

Speed changes are relatively undested and setting it too fast might cause unexpected results.

Also note that speed values in the negative domain will not change the direction of flow but rather make the ticker not work. A separate value is used for direction settings and this can be either 1 for right to left movement or -1 for left to right movement.

Please not that in any case the first item will be the first that goes out of screen.

travelocity: 0.05
direction: 1

##CSS Requirements:

.tickercontainer

//width of the original container in which the ticker appears

float: left if direction is 1 otherwise float right


.tickercontainer li

//width of the original container in which the ticker appears

float: left if direction is 1 otherwise float right

.tickercontainer .mask

//can be used to achieve padding within the container

NB: if running multiple tickers it is suggested that you use the id rather then the class name should they have different directions.

### Optional

.tickeroverlay-left , .tickeroverlay-right
//can both be used to achieve a fade-in and fade-out effect 