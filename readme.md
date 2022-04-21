# about
This project is the backend for our Graduation project 'virtural try on'.

# main idea
we take user's measurements and generate 3D body mesh.

# API
## GET 
`/clients`

`/clients/:clientId`

`/clients/:clientId/measurements`

`/clients/:clientId/poses`

`/clients/:clientId/photo`

`/clients/:clientId/gender`

`/poses`

`/poses/:poseId`

`/poses/:poseId/name`

`/poses/:poseId/theta`

## PUT
`/clients/:id`

`/clients/:clientId/poses`

`/clients/:clientId/photo`

`/clients/:clientId/name`

## POST
`/clients`

`/poses`

## DELETE
`/clients/:clientId`

`/poses/:poseId`

# try it online
follow this link : https://virtual-try-on-project.herokuapp.com/clients

# Installation
## Docker
pull image : docker pull hajarhesham/virtual-try-on:vton-project

run image :docker run -p 3000:3000  hajarhesham/virtual-try-on:vton-project
