BIN = ./bin
DEST = ./dist
SHELL := /bin/bash


clean:
	rm -rf $(DEST)/*

build: clean
	npm run build
	cp -r assets dist
	bash ./tidy-script.sh
