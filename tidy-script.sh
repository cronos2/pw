BIN=./bin
DEST=./dist

for file in $(ls $DEST/*.html); do
    echo $file;
    echo "===================="
    $BIN/tidy -config tidy.config -modify $file;
done;
