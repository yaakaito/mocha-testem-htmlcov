cover:
	jscoverage ./src ./cover
	mocha-phantomjs -R json-cov test/cover-runner.html | json2htmlcov > cover.html
	rm -rf ./cover
