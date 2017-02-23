install:
	npm install

run:
	node_modules/.bin/react-native run-android

start-server:
	node_modules/.bin/react-native start

test:
	node_modules/.bin/jest

lint:
	node_modules/.bin/eslint src/
