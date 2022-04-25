<h1 align="center">Virtual Try On</h1>

<p align="center">
  
  <br>
  <i>Backend using Node, Express, mongoDB
    <br> This project is the backend for our Graduation project 'virtural try on'..</i>
  <br>
</p>

## Table of contents

- [Main idea](#Main-idea)
- [Image Installation](#Image-installation)
- [Create](#Create)
- [Get](#Read)
- [Update](#Update)
- [Delete](#Delete)
- [Team members](#Team-members)



## Main idea
we take user's measurements and generate 3D body mesh.
then the body mesh get dressed, with different (user defined) poses.
pose is a collection of joints posiiton (24 joint * 3 coordinates (x, y, z)).
that is why theta parameter is 72 floats.

## Image installation
- Clone the repo: `https://github.com/Mohamed-Fathy-Salah/virtual-try-on`
- Pull image: `docker pull hajarhesham/virtual-try-on:vton-project`
- Run image: `docker run -p 3000:3000  hajarhesham/virtual-try-on:vton-project`

# API
## Read 
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

## Update
`/clients/:id`

## Create
`/clients`

`/poses`

## Delete
`/clients/:clientId`

`/poses/:poseId`

# try it online
follow this link : https://virtual-try-on-project.herokuapp.com/clients



## Team members
- [Mohamed Fathy](https://github.com/Mohamed-Fathy-Salah)
- [Omar Mohamed](https://github.com/omarmohamed101)
- [Hajar Hesham](https://github.com/hajarhesham)
