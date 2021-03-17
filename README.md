# Deploy To Branch Template

This template repo provides the bare-bones functionality to deploy artefacts of a \
build process to a separate branch. This deployment branch can then be used as a \
base for GitHub pages (or anything else). \
See [the page generated from this repo](https://git-john-gardner.github.io/gh-pages-deploy-template/)
as proof that this all works.

This repo contains two scripts, **`build.sh`** and **`deploy.sh`**.

Adapt `build.sh` to reflect your build process.

Running `./deploy.sh` will checkout a deployment branch, run the build script, \
commit the contents of the build directory to the deployment branch, and push. \
The commit to the deployment branch will be tagged with the hash of the commit \
from which it was generated.

Change the name of the branch from which you want to build (usually `main` or \
`master`), the name of the development branch and the name of the build folder \
at the top of `deploy.sh`.

**N.B.** Before `deploy.sh` is run for the first time, you will need to create your \
deployment branch, e.g. `git checkout -b gh-pages`.
