# about
This project is the backend for our Graduation project 'virtural try on'.

# main idea
we take user's measurements and generate 3D body mesh.
then the body mesh get dressed, with different (user defined) poses.
pose is a collection of joints posiiton (24 joint * 3 coordinates (x, y, z)).
that is why theta parameter is 72 floats.

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
