module.exports = function (opts) {
  var title = opts.title ? `<title>${opts.title}</title>` : '';
  var headScript = (opts.script && opts.scriptAsync) ?
	typeof(opts.script) == 'object' ?
	opts.script.reduce((acc, path) => `${acc} <script src="${path}" async></script>`, '') :
	`<script src="${opts.script}" async></script>` :
	'';
  var bodyScript = (opts.script && !opts.scriptAsync) ?
	typeof(opts.script) == 'object' ?
	opts.script.reduce((acc, path) => `${acc} <script src="${path}"></script>`, '') :
	`<script src="${opts.script}"></script>` :
	'';
  var favicon = opts.favicon ? `<link rel="icon" href="${opts.favicon}">` : '';
  var css = opts.css ? 
	typeof(opts.css) == 'object' ?
	opts.css.reduce((acc, path) => `${acc} <link rel="stylesheet" href="${path}">`, '') :
	`<link rel="stylesheet" href="${opts.css}">` :
	'';
  var lang = opts.lang || 'en';
  var dir = opts.dir || 'ltr';
  var head = opts.head || '';
  var body = opts.body || '';

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
${title}
<meta charset="utf-8">
${favicon}
${css}
${head}
${headScript}
</head>
<body>
${body}
${bodyScript}
</body>
</html>
`
}
