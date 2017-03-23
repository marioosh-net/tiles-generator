var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

for(var x=-5;x<10;x++) {
	for(var y=-10;y<20;y++) {

		var t = x+", "+y;
		var f = (y<0?'n':'')+Math.abs(y)+'_'+(x<0?'n':'')+Math.abs(x)+".jpg";
		gm(256, 256, "#ffffff")
		.drawText(100, 100, t)
		.write("./tiles/"+f, function (err) {
		  if(err) {
		  	console.error(err);
		  } else {
		  	console.log(t+": "+f);
		  }
		});

	}
}
