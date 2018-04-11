DEST = ./dist
SHELL := /bin/bash


clean:
	rm -rf $(DEST)/*

build: clean
	npm run build
	cp -r assets $(DEST)
	rm -r $(DEST)/assets/js/
	bash ./tidy-script.sh
