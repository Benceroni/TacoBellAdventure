// 1- declare my explan, option 1, 2, n, variables
let adventureArray = [
  {
    explain:
      "You know what time it is. You pullin up to TACO BELL🔔🔔🔔🔔🔔🔔(but no later than 9pm most week days or 10:30 on saturdays because taco bell isn't really open late anymore.) The sweet scent of true mexican flavors is fillin your nostrils as you approach the drive thru entrance. Your transcendant Taco Bell Peace™ and the perfect jams playing are broken by the sound of your phone ringing. A quick inspection of your screen shows a number you don't recognize.",
    option1: "Adventure calls baby! Answer Da Phone",
    option1result: 1,
    option2: "Order your food",
    option2result: 11,
    option3: "Decline and turn up the jams!",
    option3result: 39,
    id: 0,
    photo: "none",
    // Start
  },
  {
    explain:
      "You're game to answer the call. It's probably spam but who knows? Maybe it's that cutie you gave your number to last week (You do have big dog status after all). The greeting you offer the caller is met with a voice of pure calm and startling confidence. 'I'm going to give you one chance to follow instructions, otherwise the bomb i've attached to your car will turn you into taco bell hamster meat and enjoy you on my next beefy 5.'",
    option1: "Keep your cool and agree to follow instructions",
    option1result: 2,
    option2: "Yeah you were right it was another spam call.",
    option2result: 10,
    option3: "Hang up",
    option3result: 10,
    id: 1,
    photo: "none",
    // Start
  },
  {
    explain:
      "'Good. I'm glad we're finding a peaceful resolution. Keep a happy smile on your face like nothing's worng and pull up to the speaker. Order 200 dollars worth of...",
    option1: "Chessy roll ups",
    option1result: 3,
    option2: "Cinnamon twists",
    option2result: 4,
    option3: "Crunchwrap supremes",
    option3result: 5,
    id: 2,
    photo: "none",
    // Start
  },
  {
    explain:
      "The gravity of the situation dawns on you. What kind of monster wants many Cheesy roll ups? Do you even have $200 in your bank account? Surely the taco bell workers will recognize that something must be wrong if one man wants that many cheesy roll ups.",
    option1:
      "Argue with the Taco Bell Bomber™ (enlighten them about how terrible Cheesy roll ups are)",
    option1result: 6,
    option2: "Order the cheesy roll ups",
    option2result: 8,
    option3: "Hang up.",
    option3result: 10,
    id: 3,
    photo: "none",
    // Start
  },
  {
    explain:
      "The gravity of the situation dawns on you. What kind of monster wants many cinnamon twists? Do you even have $200 in your bank account? Surely the taco bell workers will recognize that something must be wrong if one man wants that many cinnamon twists.",
    option1:
      "Argue with the Taco Bell Bomber™ (enlighten them about how terrible cinnamon twists are)",
    option1result: 6,
    option2: "Order the cinnamon twists",
    option2result: 8,
    option3: "Hang up.",
    option3result: 10,
    id: 4,
    photo: "none",
    // Start
  },
  {
    explain:
      "The gravity of the situation dawns on you. What kind of monster wants many Crunchwrap Supremes? Do you even have $200 in your bank account? Surely the taco bell workers will recognize that something must be wrong if one man wants that many Crunchwrap supremes.",
    option1:
      "Argue with the Taco Bell Bomber™ (enlighten them about how overrated Crunchwrap supremes are)",
    option1result: 6,
    option2: "Order the Cruchwrap Supremes",
    option2result: 8,
    option3: "Hang up.",
    option3result: 10,
    id: 5,
    photo: "none",
    // Start
  },
  {
    explain:
      "'I would watch your words very carfully. I have dirty friends in dark places that you don't want to displease. Go ahead and order and you won't lose your life",
    option1: "order the mediocre taco bell item",
    option1result: 7,
    option2: "order the mediocre taco bell item",
    option2result: 7,
    option3: "order the mediocre taco bell item",
    option3result: 7,
    id: 6,
    photo: "none",
    // Start
  },
  {
    explain:
      "The taco bell worker give you a strange look as you offer your card. Turns out you did have enough in the bank tho. At the second window the worker tells you to pull around to the front of the store by the entrance. As you wait, the taco bell bomber™ gives you further instructions. 'When the food is given to you, place it on the hood of your car. Make sure your doors are locked when my friends arive. Would be a shame for you to get hurt after all that effort.' As the words are spoken, a white 12 seater van with the world's darkest tint pulls in a few spots down and the side door slides open. An army of racoons swarm your car. In the flash of an eye, your life savings worth of mid-tier taco bell food is carried away and secured in the van. 'Pleasure doing business with you' and they hang up. You still hungry tho.",
    option1: "Get taco bell",
    option1result: 0,
    option2: "Get taco bell",
    option2result: 0,
    option3: "get taco bell",
    option3result: 0,
    id: 7,
    photo: "none",
    // Start
  },
  {
    explain:
      "It may be one of the most mid-tier items on the menu and nobody in their right mind would order so many, but you do it. Despite the absolute mass of your order, The worker taking your payment is unphased and instructs you to pull around to the front doors and part to await your order. ",
    option1: "Ok I'll wait",
    option1result: 9,
    option2: "Ok I'll wait",
    option2result: 9,
    option3: "Ok I'll wait",
    option3result: 9,
    id: 8,
    photo: "none",
    // Start
  },
  {
    explain:
      "The Taco Bell Bomber™ instructs you to roll down your passenger window. A few minutes later the worker who charged your card exits with a silver case and slips it into your car. You can't take your eyes off it. the TBB™ tries to instruct you further. 'ok, now you need to-' but you've stopped hearing. The case consumes your full attention. It's all you can see. Its pull is stronger than gravity...",
    option1: "OPEN THE CASE",
    option1result: 0,
    option2: "OPEN THE CASE",
    option2result: 0,
    option3: "OPEN THE CASE",
    option3result: 0,
    id: 9,
    photo: "none",
    // Start
  },
  {
    explain:
      "That was kinda weird. I suppose weirder things have happened at taco bell before tho.",
    option1: "Yup",
    option1result: 11,
    option2: "Yup",
    option2result: 11,
    option3: "Yes",
    option3result: 11,
    id: 10,
    photo: "none",
    // Start
  },
  {
    explain:
      "Your glorious Taco Bell order AWAITS! With the menu presenting itself before you and the working asking what you want, nothing can get between you and the perfect taco bell order.",
    option1: "Fiesta Potatoes (SO hyped they finally back!)",
    option1result: 12,
    option2: "I'm just not feeling the options on this part of the menu dog",
    option2result: 13,
    option3: "Wait, who's that in the car ahead of you???",
    option3result: 17,
    id: 11,
    photo: "none",
    // Start
  },
  {
    explain:
      "Ayyy, Fiesta potatoes. Not a bad choice. Solid cheese and good use of the sour cream. Actually, I think it's the PERFECT and YOU choosing an item of such quality is a STRONG indicator of your moral integrity and mental strength. You chose -of all places- to come to TACO BELL, the most vile pit of sin and temptaion in regards to terrible choices you could make on the menu (truly the path of temptation) and you chose the absolute best. and not only that but avoided many many items that would lead to serious regret if you were to eat. The fiesta potatoes are PEAk taco bell. The cheese sauce- hugging those crispity crunchy munchy potoatoes like a long lost friend seen once again and embraced- keeping each other warm in the bottom of the bag on the floor of your car as you drive home to eat taco bell in true peace. The sour cream isn't left out either. the special taco bell sour cream isn't too stiff, and though it may be a could shoulder in the cheese-potato best friend hug upon first meeting, it quickly sees its great potential and warms to the idea of being the best item on the taco bell menu. And not only is this hug kept warm by the fire from the hearts of potatoes and cheese, but also by the cute little cup the fiesta potatoes come in. I praise you.",
    option1: "I hope you feel worthy",
    option1result: 15,
    option2:
      "i ain't reading all that. i'm happy for u tho. or sorry that happened",
    option2result: 15,
    option3: "",
    option3result: 15,
    id: 12,
    photo: "none",
    // Start
  },
  {
    explain:
      "Not feeling that part of the menu?? Keep looking and feast your eyes upon the rest of the menu",
    option1: "5 dollar box ",
    option1result: 14,
    option2: "Quesarito",
    option2result: 15,
    option3:
      "You know you actually want fiesta potatoes, with them perfectly crunchy idaho spuds, neon orange cheese sauce and caulk gun sour cream",
    option3result: 12,
    id: 13,
    photo: "none",
    // Start
  },
  {
    explain:
      "5 dollar box?? Solid choice frend.  It's usually what I get at taco bell- that and a frito burrito or summin. Unless the 5$ box is Trash. I remember the golden age of 5$ boxes, when it came with a beefy 5 layer- always solid, but overpriced outside the box. A chalupa supreme- which I also think is overprice and over rated. Kinda like a soft shell taco with a little more texture to the taco bit. Good tho. It also came with a hard shell taco you could swap out for a soft shell (big fan) and then the cinnamon twists which i also think are only good in a box- but if you swapped the cinnamon twists for the tortilla chips and dip, you could get some trashy chips and some DELICIOUS cheese sauce, ideal for making the soft shell or chalupa supreme better. Yeah, chalupa cravings box was where it was at. I don't know how many times I ate that in texas but it was not enough and the box was taken from me too soon. Rest in peace chalupas cravings box. oh and HOW COULD I FORGET THE DRINK-BAJA BLAST😫",
    option1: "Chalupa cravings box (best)",
    option1result: 15,
    option2: "Toasted cheddar chalupa box",
    option2result: 15,
    option3: "Crunchwrap supreme box",
    option3result: 15,
    id: 14,
    photo: "none",
    // Start
  },
  {
    explain:
      "Congrats! You got your food at taco bell. You chose the best item. You successfully aquired somthing delicious and I want to congratulate you on that, and not only that but winning. You winnner. Congrats. Refresh to discover more endings",
    option1: "",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 15,
    photo: "none",
    // Start
  },
  {
    explain:
      "Quesarito??? I'm not sure if i've had one of these before. My friend said it was one of his favorites so I included it. But hey i'll keep going: The guy over the speaker was happy to take your order and money and serve you up a quesarito so... good for you.",
    option1: "Quesarito is great",
    option1result: 15,
    option2: "Not into the quesarito",
    option2result: 15,
    option3:
      "please take me back i've made a grave mistake i don't actually want a quesarito",
    option3result: 11,
    id: 16,
    photo: "none",
    // Start
  },
  {
    explain:
      "peering at the side mirror of the car in front of you, you see the reflection of a face you recognize- YOOO IS THAT- ",
    option1:
      "Ryan Gosling, the hit star of 'Drive','Bladerunner 2049', and 'the notebook'???(he's just like me fr)",
    option1result: 18,
    option2: "Mads Mikkelsen",
    option2result: 25,
    option3: "Liam Neeson",
    option3result: 32,
    id: 17,
    photo: "none",
    // Star
  },

  {
    explain:
      "'Oh my goodness! IT'S RYAN GOSLING. I even have the jacket from 'drive'!!!' You can barely contain your excitement.",
    option1: "Meet your favorite celebrity!(rear end his car)",
    option1result: 19,
    option2: "Order your food normally. Don't be weird.",
    option2result: 20,
    option3: "Try to snap a picture",
    option3result: 21,
    id: 18,
    photo: "none",
    // Star
  },
  {
    explain:
      "Here we go!! *Crunch* The beautiful bumper on his 2004 honda civic folds in. The already sunburnt and flaking red paint cracks and folds at the edges of the fenders crushed areas. Impressive you were able to hit him with such force in a taco bell drive thru. oopsie. Out pops the driver. PISSED and not afraid to show it. You excitedly hop out of your car- hyped to meet THE Ryan Gosling in the flesh-but as you study his face, the exitement drains from yours. Looks like you just crashed into a dollar store ryan gosling.",
    option1: "Swap insurance with Dollar store Ryan Gosling",
    option1result: 22,
    option2: "Get back in and attempt to pop the curb",
    option2result: 23,
    option3: "Get back in and quickly back out",
    option3result: 24,
    id: 19,
    photo: "none",
    // Star
  },
  {
    explain:
      "You don't hear the end of it from dollar store ryan gosling. Your explanations of the strong emotions ryan gosling produces and that you're 'just like him' have no effect. Taco bell is pissed you're holding up the drive thru too. All these terrible choices have destroyed your apetite.",
    option1: "Guilt",
    option1result: 0,
    option2: "Maybe some taco bell would help me feel better",
    option2result: 0,
    option3: "yeah, I think that's a good idea.",
    option3result: 0,
    id: 22,
    photo: "none",
    // Star
  },
  {
    explain:
      "You're not getting pinned for your love of ryan gosling this time. You hop back in and eat the curb and landscaping that encompass the drive thru, hitting dollar store ryan gosling's 2004 honda civic on the way. You make a 'clean' get away but your steering feels kinda funny",
    option1: "Sometimes I stagger even myself with my genius.",
    option1result: 0,
    option2: "Maybe hit the drive thru again tomorrow?",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 23,
    photo: "none",
    // Star
  },
  {
    explain:
      "Hopping back in your car as quicly as you got out, You slap it in reverse and expereience a sudden flash of deja vu- but this time you didn't mean to hit them. Your back bumper makes a serious dent in the car behind you. Your level of chaos in the taco bell drive thru is immense. Stuck with nowhere to go, you have plenty of time to think about how things will go with your insurance",
    option1: "Maybe hit the drive thru again tomorrow?",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 24,
    photo: "none",
    // Star
  },
  {
    explain:
      "Too nervous to do anything bold, you order normally. Ah, Taco bell has your favorite item back. Nice. You get that item you've always thought about getting but have never taken the chance to. When you find yourself ready to pay, the worker informs you that the person in front of you paid for your meal. Wow How amazing and unbelevialbe that he didn't recognize THE Ryan Gosling. What a nice guy too",
    option1: "Enjoy your delicious ryan gosling taco bell",
    option1result: 15,
    option2: "Enjoy your delicious ryan gosling taco bell",
    option2result: 15,
    option3: "Enjoy your delicious ryan gosling taco bell",
    option3result: 15,
    id: 20,
    photo: "none",
    // Star
  },
  {
    explain:
      "You try to hang your phone out the window for a clear a shot as you can get of the side mirror of the car in front of you. In all your fuss of leaning out the window, you get noticed. You see a look of confusion morph into disgust on his face. Weird. You'd think he'd be used to it by now. After ordering, you go to pay and the worker tells you the person in front of you paid for your meal. HOW KIND OF HIM! He truly is the best. Pulling up to collect your food, the workers give you a confused look and ask what you ordered. After describing it, they said that was the order of the previous customer and without a reciept they can't give you anything. ",
    option1: "Brave the taco bell drive thru again",
    option1result: 0,
    option2: "Brave the taco bell drive thru again",
    option2result: 0,
    option3: "Brave the taco bell drive thru again",
    option3result: 0,
    id: 21,
    photo: "none",
    // Star
  },
  {
    explain:
      "Mads Mikkelsen! What a legend. You always wanted to meet your favorite movie villain",
    option1: "Meet your favorite celebrity!(rear end his car)",
    option1result: 26,
    option2: "Order your food normally. Don't be weird.",
    option2result: 30,
    option3: "Try to snap a picture",
    option3result: 31,
    id: 25,
    photo: "none",
    // Star
  },
  {
    explain:
      "Here we go!! *Crunch* The beautiful bumper on his 2004 honda civic folds in. The already sunburnt and flaking red paint cracks and folds at the edges of the fenders crushed areas. Impressive you were able to hit him with such force in a taco bell drive thru. oopsie. Out pops the driver. PISSED and not afraid to show it. You excitedly hop out of your car- hyped to meet THE Mads mikkelsen in the flesh-but as you study his face, the exitement drains from yours. Looks like you just crashed into a dollar store Mads Mikkelsen.",
    option1: "Swap insurance with Dollar store Ryan Gosling",
    option1result: 27,
    option2: "Get back in and attempt to pop the curb",
    option2result: 28,
    option3: "Get back in and quickly back out",
    option3result: 29,
    id: 26,
    photo: "none",
    // Star
  },
  {
    explain:
      "You don't hear the end of it from dollar store Mads Mikkelsen. He really do be playing the villain here even if he isn't the real Mads mikkelsen. Taco bell is pissed you're holding up the drive thru too. All these terrible choices have destroyed your apetite.",
    option1: "Guilt",
    option1result: 0,
    option2: "Maybe some taco bell would help me feel better",
    option2result: 0,
    option3: "yeah, I think that's a good idea.",
    option3result: 0,
    id: 27,
    photo: "none",
    // Star
  },
  {
    explain:
      "You're not getting pinned for your love of ryan gosling this time. You hop back in and eat the curb and landscaping that encompass the drive thru, hitting dollar store Mads mikkelsen's 2004 honda civic on the way. You make a 'clean' get away but your steering feels kinda funny",
    option1: "Sometimes I stagger even myself with my genius.",
    option1result: 0,
    option2: "Maybe hit the drive thru again tomorrow?",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 28,
    photo: "none",
    // Star
  },
  {
    explain:
      "Hopping back in your car as quicly as you got out, You slap it in reverse and expereience a sudden flash of deja vu- but this time you didn't mean to hit them. Your back bumper makes a serious dent in the car behind you. Your level of chaos in the taco bell drive thru is immense. Stuck with nowhere to go, you have plenty of time to think about how things will go with your insurance",
    option1: "Maybe hit the drive thru again tomorrow?",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 29,
    photo: "none",
    // Star
  },
  {
    explain:
      "Too nervous to do anything bold, you order normally. Ah, Taco bell has your favorite item back. Nice. You get that item you've always thought about getting but have never taken the chance to. When you find yourself ready to pay, the worker informs you that the person in front of you paid for your meal. Wow what an unbeleviably kind guy. Love you Mads",
    option1: "Enjoy your delicious Mads mikkelsen taco bell",
    option1result: 15,
    option2: "Enjoy your delicious Mads mikkelsen taco bell",
    option2result: 15,
    option3: "Enjoy your delicious Mads mikkelsen taco bell",
    option3result: 15,
    id: 30,
    photo: "none",
    // Star
  },
  {
    explain:
      "You try to hang your phone out the window for a clear a shot as you can get of the side mirror of the car in front of you. In all your fuss of leaning out the window, you get noticed. You see a look of confusion morph into disgust on his face. Weird. You'd think he'd be used to it by now. After ordering, you go to pay and the worker tells you the person in front of you paid for your meal. HOW KIND OF HIM! Mads truly is the best. Pulling up to collect your food, the workers give you a confused look and ask what you ordered. After describing it, they said that was the order of the previous customer and without a reciept they can't give you anything. ",
    option1: "Brave the taco bell drive thru again",
    option1result: 0,
    option2: "Brave the taco bell drive thru again",
    option2result: 0,
    option3: "Brave the taco bell drive thru again",
    option3result: 0,
    id: 31,
    photo: "none",
    // Star
  },
  {
    explain: "Liam Neeson! he's so cool!",
    option1: "Meet your favorite celebrity!(rear end his car)",
    option1result: 33,
    option2: "Order your food normally. Don't be weird.",
    option2result: 37,
    option3: "Try to snap a picture",
    option3result: 38,
    id: 32,
    photo: "none",
    // Star
  },
  {
    explain:
      "Here we go!! *Crunch* The beautiful bumper on his 2004 honda civic folds in. The already sunburnt and flaking red paint cracks and folds at the edges of the fenders crushed areas. Impressive you were able to hit him with such force in a taco bell drive thru. oopsie. Out pops the driver. PISSED and not afraid to show it. You excitedly hop out of your car- hyped to meet THE Liam neeson in the flesh-but as you study his face, the exitement drains from yours. Looks like you just crashed into a dollar store Liam neeson.",
    option1: "Swap insurance with Dollar store Ryan Gosling",
    option1result: 34,
    option2: "Get back in and attempt to pop the curb",
    option2result: 35,
    option3: "Get back in and quickly back out",
    option3result: 36,
    id: 33,
    photo: "none",
    // Star
  },
  {
    explain:
      "You don't hear the end of it from dollar store Liam neeson. Taco bell is pissed you're holding up the drive thru too. All these terrible choices have destroyed your apetite.",
    option1: "Guilt",
    option1result: 0,
    option2: "Maybe some taco bell would help me feel better",
    option2result: 0,
    option3: "yeah, I think that's a good idea.",
    option3result: 0,
    id: 34,
    photo: "none",
    // Star
  },
  {
    explain:
      "You're not getting pinned for your love of ryan gosling this time. You hop back in and eat the curb and landscaping that encompass the drive thru, hitting dollar store Liam Neeson's 2004 honda civic on the way. You make a 'clean' get away but your steering feels kinda funny",
    option1: "Sometimes I stagger even myself with my genius.",
    option1result: 0,
    option2: "Maybe hit the drive thru again tomorrow?",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 35,
    photo: "none",
    // Star
  },
  {
    explain:
      "Hopping back in your car as quicly as you got out, You slap it in reverse and expereience a sudden flash of deja vu- but this time you didn't mean to hit them. Your back bumper makes a serious dent in the car behind you. Your level of chaos in the taco bell drive thru is immense. Stuck with nowhere to go, you have plenty of time to think about how things will go with your insurance",
    option1: "Maybe hit the drive thru again tomorrow?",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 36,
    photo: "none",
    // Star
  },
  {
    explain:
      "Too nervous to do anything bold, you order normally. Ah, Taco bell has your favorite item back. Nice. You get that item you've always thought about getting but have never taken the chance to. When you find yourself ready to pay, the worker informs you that the person in front of you paid for your meal. Wow what an unbeleviably kind guy. Love you Mads",
    option1: "Enjoy your delicious Mads mikkelsen taco bell",
    option1result: 15,
    option2: "Enjoy your delicious Mads mikkelsen taco bell",
    option2result: 15,
    option3: "Enjoy your delicious Mads mikkelsen taco bell",
    option3result: 15,
    id: 37,
    photo: "none",
    // Star
  },
  {
    explain:
      "You try to hang your phone out the window for a clear a shot as you can get of the side mirror of the car in front of you. In all your fuss of leaning out the window, you get noticed. You see a look of confusion morph into disgust on his face. Weird. You'd think he'd be used to it by now. After ordering, you go to pay and the worker tells you the person in front of you paid for your meal. HOW KIND OF HIM! Mads truly is the best. Pulling up to collect your food, the workers give you a confused look and ask what you ordered. After describing it, they said that was the order of the previous customer and without a reciept they can't give you anything. ",
    option1: "Brave the taco bell drive thru again",
    option1result: 0,
    option2: "Brave the taco bell drive thru again",
    option2result: 0,
    option3: "Brave the taco bell drive thru again",
    option3result: 0,
    id: 38,
    photo: "none",
    // Star
  },

  {
    explain:
      "Ignoring the stupid phone call you BUMP UP THOSE JAMS. Extra dose of the good stuff to regain those taco bell vibes™. You need to share this with the workers too. Your music is blasting when you roll up to the order window. Maybe a bit too loud though. Have they said you can order yet?",
    option1: "Hey",
    option1result: 40,
    option2: "You ready for my order?",
    option2result: 40,
    option3: "My heart beats for only thee, taco bell!",
    option3result: 40,
    id: 39,
    photo: "none",
    // Star
  },
  {
    explain:
      "Still no answer. All the more frustrating since they have your favorite item back on the menu. The -",
    option1: "Nacho Fries",
    option1result: 41,
    option2: "Cantina tacos",
    option2result: 41,
    option3: "Loaded potato griller",
    option3result: 41,
    id: 40,
    photo: "none",
    // Star
  },

  {
    explain:
      "The silence of the speaker starts to hurt, but you've been craving that item",
    option1: "Wait",
    option1result: 42,
    option2: "Go inside",
    option2result: 43,
    option3: "Try again tomorrow",
    option3result: 0,
    id: 41,
    photo: "none",
    // Star
  },

  {
    explain: "Still no answer.",
    option1: "Wait",
    option1result: 42,
    option2: "Go inside",
    option2result: 43,
    option3: "Try again tomorrow",
    option3result: 0,
    id: 42,
    photo: "none",
    // Star
  },
  {
    explain:
      "As you check out the taco bell's interior, everything's clearly still going. Timers beeping, machines running, but not a soul in sight.",
    option1: "Make a taco",
    option1result: 44,
    option2: "Check freezer",
    option2result: 45,
    option3: "Go home and try again tomorrow",
    option3result: 0,
    id: 43,
    photo: "none",
    // Star
  },
  {
    explain:
      "Man, you're pretty good at making taco bell food. That was delicious.",
    option1: "Make a taco",
    option1result: 44,
    option2: "Try making something else",
    option2result: 44,
    option3: "Check the freezer",
    option3result: 45,
    id: 44,
    photo: "none",
    // Star
  },
  {
    explain:
      "The smell in the taco bell 'kitchen' delights your nose as you walk towards the freezer door. an unusually ornate handle on the door operates exteremly smoothly and the crack of the door graces your nose like no other taco bell experience has. It's like... taco bell 2. A bright light peeks throught the crack- that Taco Bell Peace™ you felt earlier is amplified and perfected. A choir of taco bell workers dressed in light and dark purple sing choric taco bell radio pop songs. The lead lady greets you 'Hello, familiar stranger, welcome to the land of puritan taco bell, where nothing is removed from the menu.' As you look around you see the old taco bell chihuahua being carried on a king's throne. The lady sees you taking note- 'He never died, the world just stopped appreciating him.' Amazing. The door locked behind you, but you'd never want to leave anyway. ",
    option1: "WAKE UP",
    option1result: 0,
    option2: "WAKE UP",
    option2result: 0,
    option3: "WAKE UP",
    option3result: 0,
    id: 45,
    photo: "none",
    // Star
  },
  {
    explain: "shia surprise",
    option1: "",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 0,
    photo: "none",
    // Star
  },
  {
    explain: "shia surprise",
    option1: "",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 0,
    photo: "none",
    // Star
  },
  {
    explain: "shia surprise",
    option1: "",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 0,
    photo: "none",
    // Star
  },
  {
    explain: "shia surprise",
    option1: "",
    option1result: 0,
    option2: "",
    option2result: 0,
    option3: "",
    option3result: 0,
    id: 0,
    photo: "none",
    // Star
  },
];

let adventureArrayId = 0;
let formerchoice = " ";

function updateHtml(buttonNum) {
  let record = adventureArray[adventureArrayId];
  switch (buttonNum) {
    case 1:
      formerchoice = record.option1;
      break;
    case 2:
      formerchoice = record.option2;
      break;
    case 3:
      formerchoice = record.option3;
      break;
    default:
      formerchoice = "Not working";
      break;
  }
  switch (buttonNum) {
    case 1:
      record = adventureArray[record.option1result];
      adventureArrayId = record.id;
      break;
    case 2:
      record = adventureArray[record.option2result];
      adventureArrayId = record.id;
      break;
    case 3:
      record = adventureArray[record.option3result];
      adventureArrayId = record.id;
      break;
    default:
      record = record = adventureArray[record.option1result];
      adventureArrayId = record.id;
      break;
  }
  //   document.getElementById("formerDiv").innerHTML = formerchoice;
  document.getElementById("explainDiv").innerHTML = record.explain;
  let heroimage = "images/tacobellchooseyourownadventurenontitle.jpeg";
  document.querySelector("#heroimage").setAttribute("src", heroimage);
  const button = document.getElementById("option1button");
  button.innerHTML = record.option1;
  const button2 = document.getElementById("option2button");
  button2.innerHTML = record.option2;

  const button3 = document.getElementById("option3button");
  button3.innerHTML = record.option3;
  if (record.photo != "none") {
    document.querySelector("#photo").setAttribute("src", record.photo);
  }
}

function initializeHtml() {
  let record = adventureArray[adventureArrayId];
  document.getElementById("formerDiv").innerHTML = formerchoice;
  let heroimage = "images/tacobellchooseyourownadventure.jpeg";
  document.querySelector("#heroimage").setAttribute("src", heroimage);
  document.getElementById("explainDiv").innerHTML = record.explain;
  const button = document.getElementById("option1button");
  button.innerHTML = record.option1;
  const button2 = document.getElementById("option2button");
  button2.innerHTML = record.option2;
  const button3 = document.getElementById("option3button");
  button3.innerHTML = record.option3;
  if (record.photo != "none") {
    document.querySelector("#photo").setAttribute("src", record.photo);
  }
}

initializeHtml();

// I WANT TO LET THE USER CHOOSE SOMETHING NORMALLY NOT IN THEIR CONTROL, LIKE A CREATURE STALKING YOU FROM THE REAR. WHAT DOES IT LOOK LIKE? option a, b, c, whatever you choose, it is.

// I need to change the record ID to match the option click,
// but add 1 to the object location value.

// 2- Create a function that prints the explanation and option variables

// Import variables created earlier

// function createFramework( explain, option1, option2, option3) {}

// 3- Connect my framework and option variables to html document elements

// 4-

// 5- Create a template that updates the explain and option variables

// 6- Copy the templates and create a tree of adventure options

// 7- Insert click listener
