VERSION ?= 0.1.0

PACKAGE_ZIP = kwin-win-max-min-v$(VERSION).zip
PACKAGE_SRC = metadata.json contents/code/main.js

.PHONY: all clean

all: $(PACKAGE_ZIP)

clean:
	rm -f kwin-win-max-min-v*.zip

$(PACKAGE_ZIP): $(PACKAGE_SRC)
	zip $(PACKAGE_ZIP) $(PACKAGE_SRC)
