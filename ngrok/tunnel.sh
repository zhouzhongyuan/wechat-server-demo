#!/usr/bin/env bash
export LC_ALL="en_US.UTF-8"
# ssh basic info
user=root
server=192.168.2.1
# remote port
remotePort=80
# local computer
localIp=127.0.0.1
localPort=4000
ssh ${user}@${server} -R ${remotePort}:${localIp}:${localPort}
# now: ${server}:#{remotePort}--> ${localIp}:${localPort}

# from [You may not need localtunnel or ngrok | Rodney Rehm](https://blog.rodneyrehm.de/archives/38-You-may-not-need-localtunnel-or-ngrok.html)