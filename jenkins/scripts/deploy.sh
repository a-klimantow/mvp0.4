#!/usr/bin/env sh
ssh admin@84.201.174.241 <<EOF
	set -x
	npm run build
	set +x

	set -x
	npm start &
	sleep 1
	echo $! > .pidfile
	set +x
EOF