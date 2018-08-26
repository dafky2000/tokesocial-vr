# Setup

```bash
git clone https://github.com/dafky2000/tokesocial-vr.gi://github.com/dafky2000/tokesocial-vr.git
cd tokesocial-vr
docker build . -t tokesocialvr
npm install

# Increase allowable file watches (Seems to be required on Docker install on server?)
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
# sudo sysctl --system

/bin/bash -c "docker run --rm --name tokesocialvr -p 8000 -v \$(pwd):/usr/src/app tokesocialvr:latest"
```

## Misc

During development, hardset the parcel height limit (to 110,000)

```bash
sed -i "s/triangles:Math\.floor(t\*r\.parcelLimits\.triangles)/triangles:110000/g" node_modules/metaverse-api/artifacts/preview.js
```

And to reset back to normal

```bash
sed -i "s/triangles:110000/triangles:Math.floor(t*r.parcelLimits.triangles)/g"
```
