#!/bin/bash

i=1;
j=1;

echo "-----"
echo "Removing canary components before ic-ui-kit develop"

for component in "$@"
do
    git rm -r ./packages/web-components/src/components/$component/
    i=$((i + 1))
done

echo "-----"
echo "Updating components directory from ic-ui-kit develop"

git checkout icds/develop -- ./packages/web-components/src/components/**/* ./packages/web-components/src/global/* ./packages/web-components/src/assets/* ./packages/web-components/src/utils/*

echo "-----"
echo "Reverting canary components"

for canary in "$@"
do
    echo Reverting $canary directory 
    git checkout origin/main -- ./packages/web-components/src/components/$canary/
    j=$((j + 1))
done
