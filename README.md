# Summer Session: Portfolio

## Session 1 (29/6/26):

Session 1 was where we learned about creative computing, how it can be applied, and how you would go about creating it. Session 1 was also the introduction to p5 for me. While I have a background in computer science, there were still many things I did not know, especially surrounding this new library of commands. Specifically, we learned how to draw shapes, change color, and use variables to help calculate positions, angles, etc.

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/21228f88-49b7-4183-af65-2f2f1c2ee4f7" />

This drawing was my first assignment, where we had to create an artistic self portrait. I wanted to go for the Comedy and Tragedy masks as parts of my face because I am a huge theater person. In order to do this, I utilized many arcs, which is a shape I had to do research on outside of class, to help draw the eyes, to help convay happy or sadnass. I also had to learn about the stroke system, and how to make sure the outlines disapeared when drawing certain shapes, otherwise the eyes would look very strange and difficult to see.

## Session 2 (30/6/26):

Session 2 is where the class focused on loops, functions, and arrays, and how they can be used to help perform tasks in short lines of code. I felt this was a very important lecture for beginners becuase variables and arrays are some of the most important ways to search for certain conditionsor give you the ability to draw things repeatedly

<img width="300" height="233" alt="Session2Demo" src="https://github.com/user-attachments/assets/c0422b76-58b0-4385-b915-cd17c0bb8119" />
<img width="300" height="233" alt="Session2Assignment" src="https://github.com/user-attachments/assets/c6126760-6d7e-47c3-b935-6b72f51f6727" />

The first lab we did was a demo of triangles being drawn using an array, with each one being rotate 90 degrees a certain number of times. The other lab I made was a night sky, where there is an array to determine the colors of each star in the sky. I also made a loop to draw the stars, since so many stars needed to be created. TO help make the drawing faster, 2 functions were also added. One made each star, and the other made the moon. Positions are randomized slightly, so the stars in the sky will change position each time the page is refreshed!

## Session 3 (1/7/26)

Session 3 is where the class learned about how to access data and visualize it into a more easily digestable or abstract format.

<img width="300" height="233" alt="image" src="https://github.com/user-attachments/assets/53a0c67a-4420-4465-a83b-f711a158f1c7" /> 
<img width="233" height="233" alt="image" src="https://github.com/user-attachments/assets/b33d88b3-70d0-4e4c-a7a2-d7c5d341e52e" />

The first image was a demo we made in class to make sure that I could access a given csv file. The second image is of a city at night, but the 5 buildings with windows actually have their heights determined by the number of planned affordable housing in 5 areas of New York. Those areas are Brooklyn, Bronx, Queens, Staten Island, and Manhatten. 

## Session 4 (2/7/26)

Session 4 is where we learned about interaction, specifically changing the image based on sound input, video input, or mouse input.

<img width="300" height="233" alt="image" src="https://github.com/user-attachments/assets/d013d9fd-8109-4b93-8a04-35a08c29a846" />
<img width="300" height="266" alt="image" src="https://github.com/user-attachments/assets/9dfbff67-caff-457f-88e4-c8b1c939f20d" />

Our first lab required us to make a mouse interaction piece, so I decided to make a conspiracy board were you can place thumbtacks with red lines pointed to other thumb tacks to show different connections. The second image is of a video cam interfact that you can draw on, or place stickers over the video. Both of these offer different ways of interacting with the image.

## Session 5 (6/7/26)
Session 5 is were we learned more about the difference between machine learning and artificial inteligence, and what breakthroughs can be achieved with this technology. Many attempts of Artificial Intelligence have been made over the years, but it is thanks to machine learning that we have the many AI Models we do today. These models are not without challenge however, as we also learned about the steep enviormental cost of teaching models, the unintended bias that can come from datasets, and a lack of understanding context.

<img width="300" height="233" alt="image" src="https://github.com/user-attachments/assets/a650b38c-d9fd-4b72-9b3b-515d134de918" />

For the first of our labs, we experimented with many different AI experiment made by different companies to test AI's interactive capabilities. The photo above shows an art piece I made using Splash Canvas's texture generation.

<img width="300" height="166" alt="image" src="https://github.com/user-attachments/assets/28d48d1b-2a93-40e0-a011-314f3c3c4d30" />

For the second lab, we were to make an interactive art piece using a FaceMesh provided to us. In the midst of a heat wave, I decided to go with turning the user's face into the Sun, shooting angry lazer beams down on the population below.

(It also has came to my attention today that progress photos are suggested to help see the thought process behind our work. I did not know this, and will now make sure to take many progess photos as I continue on future work.)

## Session 6 (7/7/26)

Session 6 was where we learned the steps to create an AI model, before it became more of a freeform lecture focused on the discussion of AI and it's ethical implications. I feel this was a very important lecture, as it highlighted many of the issues I have with AI at the moment. For example, one ethical issue that was brought up was how AI can have natural biases based on the company who made it, leading to many groups feeling oppressed simply because they were not considered when making the training data. Another issue that was brought up was privacy, and how many companies hide clauses in their terms and conditions that allow their AI to harvest your data and personal information, and a discussion was made to decide whether it was ethical to hide something so crucial from their users.

For the labs, we ended up dividing into groups to read different companies terms and conditions, and create slideshows on our finding. My group was assigned Google and it's AI model Gemini, and we found some pretty interesting stuff. I added the slideshow in the Session 6 folder, but one detail that stuck out to me was how Google does reserve the right to use any material you create on their services to train their AI models.

## Session 7 (8/7/26)

Session 7 was a bit of a rough one for me personally. Our lecture was about generating images using machine learning. To do this, we used ComfyUI as our base, where we could attach different nodes to help create a model to generate an image.

(INSERT IMAGE HERE)

As you can see, my first attempt allowed my to attach the Latent Image node to the prompt, and then feed both into the Image Generator to create an output. However, an error arrose that wouldn't allow me to run any models on my computer. The error message told me that my computer's Intel GPU was not compatible with the XPU being used for the model. In order to combat this, I tried to download an Intel friendly version, and have it run using the CPU rather than the GPU.

<img width="300" height="300" alt="ComfyUI_temp_tiqye_00001_" src="https://github.com/user-attachments/assets/e55c7168-ccd3-4af5-b546-1535a9c653f9" />

This worked, and I was able to successfully generate an image using the prompt "A chocolate statue of Wiston Churchill covered in dirty money". While the dirty money was lost, I would still call the image generation a success!

## Session 8 (9/7/26)

Session 8 was divided into 2 parts. The first was project preporation, planning, and making sure we request any materials that might be needed for the project.

https://teachablemachine.withgoogle.com/models/DQWRQLpxO/

The second was learning how to use "teachable machines" which is an algorithm used to help train machine learning models. Our lab focused on the image recognition portion of the lab. I was able to get it to recognize 4 key poses, the first being the Idle/None pose to act as a base for when I am not doing anything, and the other 3 being varying poses to see what the computer could and couldn't recognize. AT first, it was a little difficult to get a hold of, but the more images i fed into the teachable machine, the more likely the model created could identify the pose, and the easier the lab got.


<iframe src="https://editor.p5js.org/Austen-Stuart/full/F9P9d79Sj"></iframe>

