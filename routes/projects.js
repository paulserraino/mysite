/*
*	GET project index
*/

exports.index = function (req, res){
	 res.render('projects/projects.html', { title: 'Projects' });
}