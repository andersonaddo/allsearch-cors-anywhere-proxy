# Allsearch Cors Proxy Server
Proxy server to allow Allsearch to bypass CORS for its image requests.

Hosted on https://cyclic.sh/ since it doesn't have cold starts.

Using the [cors-anywhere](https://github.com/Rob--W/cors-anywhere) implementation would be preferred (since it's more customizable), but 
Cyclic does some URL normalization (similar to [this](https://github.com/Rob--W/cors-anywhere/issues/417)), so for now we're using the [allorigins](https://github.com/gnuns/allorigins) implementation.
