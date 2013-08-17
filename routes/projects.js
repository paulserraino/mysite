/*
*	GET project index
*/

exports.index = function (req, res){
	 res.render('projects/projects.html', { title: 'Projects' });
}

/*
*	GET carousel project
*/
var picData = require('../views/projects/carousel/picData.json')

console.log(picData)

exports.carousel = function (req, res){
	 res.render('projects/carousel/index.html', {pics: picData});
}

/*
*	GET spin nav project
*/
exports.spin = function (req, res) {
	res.render('projects/spin_nav/index.html');
}