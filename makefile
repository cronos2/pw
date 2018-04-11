DEST = ./dist
SHELL := /bin/bash
PDF_OUTPUT := $(DEST)/centrodeportivo/como_se_hizo.pdf


clean:
	rm -rf $(DEST)/*

build: clean pdf
	npm run build
	cp -r assets $(DEST)
	rm -r $(DEST)/assets/js/
	bash ./tidy-script.sh

pdf: README.md
	npx mdpdf README.md $(PDF_OUTPUT) --style=assets/css/readme.css
