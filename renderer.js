var fs = require('fs');
function mergeValues(values, content) {
	for (var key in values) {
		content = content.replace('{{'+key+'}}', values[key]);
	}
	return content;
}

function view(templateName, values, response) {
	var fileContent = fs.readFileSync('./view/'+templateName+'.html', {encoding: 'utf-8'});
	response.write(mergeValues(values, fileContent));
}

module.exports.view = view;