Things i did for my first week!

## My first steps !

### Where did i get my info from?

In the begining i researched how A-Frame works and how to use it. The first thing i did was searching on youtube for tutorials on how to use it. Then i stumbeld on a course wich was available for free for the first 3 chapters. The rest u could find on Udemy for 10 euro. 

To get all the info i needed to begin on my project took me around 8 hours to understand it. Wich was quit fast!
[The free course on youtube](https://www.youtube.com/watch?v=ktjMCanKNLk&list=PL8MkBHej75fJD-HveDzm4xKrciC5VfYuV&ab_channel=DaniloPasquariello)
[The full course on Udemy](https://www.udemy.com/course/learn-a-frame-and-get-ready-for-webvr/)

### My first Demo

For my first demo i wanted to be sure that i can run it in VR. So i ran an Node Server to run it in my wireless headset. The headset im using is the oculus quest 2. My node server was made of socket.io this is what i will later use to get multiple users in one room and it will update in real time. Wich will be fun!

<p align="center">
  <img src="https://github.com/Wotusay/Personal-Passion-webVR-webAR/blob/pages/docs/images/begin.png?raw=true" alt="begin" width="400"/>
</p>

The movement works on all platforms seamlessly this was made posible by an libary where you can do alot more with a-frame. For now i used the controls checker to seamlessly switch between controls

[A-frame extras](https://github.com/n5ro/aframe-extras)

I used an asset from Sketchfab named "The Magic Room". To better visualize how i will make the room. I limited the users movement by creating an Navmesh with a plugin that was made for A-Frame. This didnt work on GLTF-models so i made an other file where i can sketch where the objects are that arent supposed to be climmed on. 


<p align="center">
  <img src="https://github.com/Wotusay/Personal-Passion-webVR-webAR/blob/pages/docs/images/second.png?raw=true" alt="second" width="400"/>
</p>

[The github repo for the plugin](https://github.com/donmccurdy/aframe-inspector-plugin-recast)

### My first post on the blog
Im using a tool called Prope.io. This is easy to write markdown documents and its connected with your realttime github repo. 

[The tool](https://prose.io/)

### Research on The realtime conncetion
I did some research on how to make use a-frame and socket.io. I found a project that did this already and with a beatyfull documention on how they did it. Which will be helpfull down the road. At last i found a package that was made for a-frame and socket to make it more easier to get the connections. This needs to be tested at my part

[The documentation](https://github.com/googlecreativelab/webvr-musicalforest/tree/master/backend#managing-peer-servers)
[The package for connections](https://www.npmjs.com/package/networked-aframe)

### My Room 
After many tries and searches on the web. I decided to make the room from skratch with some models of sketch fab. To make one cool room where many people can hangout and chill. I tought to my self it hasnt to be an room it can be everything because its VR. You have the freedom to do whatever.


<p align="center">
  <img src="https://github.com/Wotusay/Personal-Passion-webVR-webAR/blob/pages/docs/images/last.png?raw=true" alt="last" width="600"/>
</p>


## Whats next?
For next week i want that u can interact with things in the VR world. Like trowing objects, clicking on buttons and exploring the elements what u can do in the room. Also i want to test the realtime conncetion between users.  
