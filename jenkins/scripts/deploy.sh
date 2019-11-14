#!/bin/sh
ssh admin@84.201.174.241 <<EOF
	cd ~/node-app
	git pull
	npm install — production
	pm2 restart all
	exit
EOF