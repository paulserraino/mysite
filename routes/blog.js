
/*
 * GET blog page.
 */

exports.index = function(req, res){
  res.render('blog/blog.html', { title: 'Blog' });
};