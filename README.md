```bash
docker build . -t tokesocialvr
npm install

# Increase allowable file watches (Seems to be required on Docker install on server?)
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
# sudo sysctl --system

/bin/bash -c "docker run --rm --name tokesocialvr -p 8000 -v \$(pwd):/usr/src/app tokesocialvr:latest"
```
