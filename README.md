﻿# Personal-Passion-Project:VR-Hub

<p align="center">
  <img src="./public/textures/logo/logo2.png" alt="logo" width="300"/>
  <p align="center"> Just come and hangout!</p>
</p>

[🔗 Go Explore the project ](https://vr-hub.herokuapp.com/)

## Table-of-contents 
- [👨 De-klant ](#De-klant)
- [🔎 Core Project Statement](#Core-Project-Statement)
- [📚 Delevirables](#Delevirables)
- [💻 Het product ](#Het-product)
- [👨‍💻 To copy this project ](#To-copy-this-project)
- [🔗 Links](#Links)

## De-klant 
De klant ben ik zelf. Ik wil vooral een space creëren waar ik met mijn vrienden kan afspreken gelijk welk platform ze gebruiken.

## Core-Project-Statement

### Hoe kunnen gebruikers een nieuw experience krijgen op het web?
Ik denk dat ze dit zullen doen door virtual reality. Om uit de realiteit te kunnen komen waar ze momenteel inzitten.

### Hoe kunnen we dat in werkelijkheid brengen ?
Door een platform te creëren waar iedereen op kan gaan. Iedereen met een vr headset zal dit kunnen moeten meemaken. Men heeft dan een platform om even uit de echte wereld te ontsnappen.

### Wat is de meerwaarde aan Virtual Reality ?

In virtual reality is de gebruiker meer imerseved dan op een gewoon scherm. Hier zal de gebruiker zich kunnen zijn en doen men wilt. Hij kan met allerlei voorwerpen prutsen of relaxen in zin virtuele space. 

### Hoe kan je de nieuwe digitale manier gebruiken ? 

Aan de hand van elke browser die VR ondersteunt of er door naar te surfen in je headset zelf. Daar moet men niet een lange inlog formulier invullen. Je gaat online kiest een kamer en je kan beginnen aan je advontuur.

### Welke technologie zal je moeten gebruiken ?

Ik zal gebruik maken van Three.js , Aframe, Cannon.js en webRTC. Three.js zal ik gebruiken voor de 3D-models in te kunnen laden. Aframe voor het VR gedeelte. webRTC voor de connectie. Cannon.js gebruik ik om physics te simuleren aan bepaalde objects.

### Wat kan een gebruiker allemaal doen ?

De gebruiker zal doen wat hij wilt. Hij zal zijn eigen prive virtuele space kunnen creeren of hij kan naar een public room gaan.  Hij kan verschillende activiteiten doen als hij zelf zijn VR bril aan heeft mett zijn/haar controllers . Hij kan ook zijn vrienden uitnodigen om te kunnen tonen wat hij allemaal al kan doen  met zijn of haar handen.

### Hoe zien de gebruikers elkaar ?

 De gebruiker zal een andere gebruiker in real time kunnen zien bewegen in een kamer aan de hand van webRTC. Hier wordt ook gebruik gemaakt van 3d audio naar mate hoe ver de persoon staat in de kamer. De gebruiker krijgt dan ook een willekeurig model. Die varieert van 5 kleuren. 

## Delevirables
- Week 01: De controls / environment. 
- Week 02: De decoratie en interactie in de room.
- Week 03: WebRTC invites / online gedeelte.
- Week 04: Finishing touches.
- Week 05: Presentatie moment.

## Het-product

### Benodigdheden
Als je de volledige real experience wilt. Heeft u een VR-Headset nodig die op een browser kan surfen. Bv. De oculus Quest 1 en 2 Of de HTC Vive, etc...

Als je gewoon rustig wilt praten met vrienden en kijken hoe zij bewegen tijdens hun vr sessie. Dit kan je op alle platformen die het webXR supporten. De tweede beste expierence is mobile. Dit volgt de tracking van uw gsm waneer u de website start.

 [🔗 Link naar alle supported browsers ](https://caniuse.com/webxr)

[🔗 Link naar alle supported VR-Headsets ](https://webvr.info/)

### De activiteiten
>De activiteiten werken alleen op VR-headsets. 

Je kan gaan basketten. De ball smijten in de hoop om punten te verzamelen. De punten vind je dan op jouw persoonlijk bord. Die te vinden is op het startplein. 

Je kan gaan spelen met dozen. Je kan er meer toevoegen door een knop in te drukken. Deze dozen kan je dan ook wegsmijten en resizen om iets moois te kunnen maken. 

Dan als laaste kan je stockjes gaan zoeken op het plein om daar daan ook het park schoon te houden. 

Of speel verstoppertje in hhet parrk met uw vrienden. Wie niet weg is gezien!

## To-copy-this-project 

1. Clone the project

```
git clone https://github.com/Wotusay/Personal-Passion-webVR-webAR.git

cd Personal-Passion-webVR-webAR

yarn 
```
When running locally, make sure to:

2. Generate a localhost certificate:

```
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

3. Create an .env file in the root of this project where you sent NODE_ENV to development:

```
NODE_ENV=development
```

4. Run it

```
yarn start
```

## Links
[🔗 My Blog ](https://wotusay.github.io/Personal-Passion-webVR-webAR/)

[🔗 Go Explore the project ](https://vr-hub.herokuapp.com/)

[🔝 Back to Top](#Table-of-contents)
