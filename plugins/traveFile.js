var path = require('path');
var fs = require("fs");
var async = require('async');

var fileList = [];

function trave(dirL){
    var dList = dirL;
    if(dirL.length == 0){
        return;

    }else{
        var dir = dList.shift();
        fs.readdirSync(dir).forEach(function (file) {
            var states = fs.statSync(dir + '/' + file);
            if (states.isDirectory()) {//is dir
                dList.push(path.normalize(dir + '/' + file));

            } else {//is file
                fileList.push(path.normalize(dir + '/' + file));

            }
        });

        trave(dList);
    }
}

module.exports = {
	getFileList: function(dirL){
		trave(dirL);
		return fileList;
	}
};
