make:
	npm start

deploy:
	npm run build
	rsync -av ./build/* lovie:/opt/www/gmc-wiki
