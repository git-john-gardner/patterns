#!/bin/bash

directory=dist
branch=gh-pages
master_name=main

latest_commit=$(git log '--format=format:%H' $master_name -1)

say() {
  echo -e "\033[0;32m${1}\033[0m"
}

say "Deleting previous build..."
rm -rf $directory

say "Checking out $branch...."
git worktree add $directory $branch

say "Building..."
./build.sh

say "Deploying to $branch..."
cd $directory &&
  git add --all &&
  git commit -m "Built from $latest_commit" &&
  git push origin $branch

say "Cleaning up..."
git worktree remove $directory
