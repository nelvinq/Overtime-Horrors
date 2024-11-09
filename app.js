/*-------------------------------- Constants --------------------------------*/
const paths = [
  {
    path: 0,
    img: "https://static.wixstatic.com/media/3ec94b_dcba2020735f482e9811e866bbdc73a4~mv2.png",
    imgAlt: "Office desk with a computer screen at night",
    text: "You're the last one remaining in your office. <br><br> There's a big client meeting first thing tomorrow, and your boss wants you to create flashy presentation visuals to showcase the firm's products in the best possible way. With an impressive new client on the horizon, you must present a strong impression – if you don't want to be replaced with someone younger, cheaper, and more capable than yourself. <br><br> As the clock strikes midnight, an unsettling chill fills the air. Shadows flicker in the corners of your eye, and the silence is deafening. You’ve heard rumors about this old office building being haunted but often dismissed the rumors as superstition and the over-imaginings of a fearful mind. Now you can feel your fears begin to surface – every nerve in your body on edge – and a growing uneasiness takes over. <br><br> You chuckle nervously at the idea of ghosts and continue with your work. You have to finish these tasks if you want to avoid being fired. As you click away on your computer, you glance around the dark office space and try to calm yourself down. After all, there is nobody here besides you, right? <br><br> But what about those strange sounds you hear from behind you? Or the cold wind you feel from nowhere? <br><br> **Knock** <br><br> A shiver runs down your spine. <br><br> What's that noise? <br><br> With a sudden creak in the office storage room, you realize that you may not be alone.",
    choice1: "Investigate the strange noise in the storage room.",
    choice2: "Ignore it and continue working.",
    choice1Path: 1,
    choice2Path: 2,
  },
  {
    path: 1,
    img: "https://static.wixstatic.com/media/3ec94b_a78a780233f240a9b5546e1e4c297afd~mv2.png",
    imgAlt: "Creepy empty storage room with doll",
    text: "Heart pounding, you approached the storage room and saw the door slightly ajar. <br><br> With a gulp, you gently pushed open the door and peered into the dark, cold space. It was pitch-black inside. You could feel your palms begin to sweat, and the hairs on the back of your neck stood up as you took a hesitant step forward. <br><br> The office space was filled with old and damaged equipment – outdated computers, broken desktops, and broken monitors. A musty smell hung in the air and grew stronger as you stepped closer. You tried the light switch, but it didn't seem to work. <br><br> As you turned around to leave, your eyes caught something. <br><br> A doll? <br><br> It's a creepy, ragged doll with mismatched eyes and a big red smile. It sat atop an old desk at the far back of the storage room. <br><br> Something about that doll gave you the creeps. You stepped towards the box and reached inside. <br><br> The doll had an unnatural feel. It's as if something was looking at you through it—like a doll was supposed to be a receptacle for the souls of lost children. You got the feeling that this particular doll was a receptacle for the soul of something else, something darker. <br><br> Your heart started to beat faster.",
    choice1: "Pick up the doll.",
    choice2: "Step back and leave the storage room.",
    choice1Path: 3,
    choice2Path: 4,
  },
  {
    path: 2,
    img: "https://static.wixstatic.com/media/3ec94b_e5831fa9049a465287ad0076919a7cef~mv2.png",
    imgAlt: "Doll sitting on the desk staring at reader",
    text: "You sat back down and tried to focus on your report, ignoring the lingering dread. It's probably nothing, but it would be stupid to check it out. You'd have to pass through the dark hallways and confront whatever made those strange noises, which would be foolish. <br><br> Just focus on the computer screen. Don't think about those sounds. They're just a trick of the mind, probably a mouse running through the vents. Or maybe the heater. <br><br> As you typed, the air grew colder. The office felt even creepier than before. You tried concentrating on the numbers before you but can't shake this feeling. Something's wrong... something’s off... <br><br> Suddenly, you notice movement in the corner of your vision. A shadowy figure flitted by the edge of the window, passing over the pale moonlight streaming into the dark office. <br><br> You turned over to see a doll suddenly appear on your desk. Its painted eyes seemed to stare right at you.",
    choice1: "Scream and throw the doll in the trash",
    choice2: "Inspect the doll more closely",
    choice1Path: 5,
    choice2Path: 6,
  },
  {
    path: 3,
    img: "https://static.wixstatic.com/media/3ec94b_e00f3f7df4de428486736750c6a908e5~mv2.png",
    imgAlt: "Holding a doll in hand and its eyes glowing",
    text: "The doll felt cold in your hand. <br><br> The hair and cloth were all stiff and clammy, but the skin felt plump and firm as you squeezed it. You turned it around to get a better look, but it didn't make the feeling disappear. You held your breath as you examined the doll's face and body. The doll's face was blank and unchanging, yet it seemed to look right through you, sending a cold chill down your spine. <br><br> A faint crackling sound caught your ears. <br><br> You heard your name... It's coming from the doll. <br><br> You froze in fear as its head started to turn toward you. Your stomach twisted as its smile seemed to widen. The eyes on its face shifted to look at you. <br><br> It's watching you... It knew your name...",
    choice1: "Drop the doll and run.",
    choice2: "Speak to the doll and ask what it wants.",
    choice1Path: 7,
    choice2Path: 8,
  },
  {
    path: 4,
    img: "https://static.wixstatic.com/media/3ec94b_0b28a4fffd24471e8c9664ef57b0adf0~mv2.png",
    imgAlt: "Dark corridor",
    text: "You felt like the dolls’ eyes followed you as you left the room. You closed the door behind you. <br><br> The lights started flickering in the hallway, and your ears pricked up. You could hear something moving around. Something was definitely in there. A rat? No, it's too loud for that... <br><br> Then, you saw a shadow dart across the corridor's far end. You gasped. You didn't believe in ghosts, but the idea that something was there is deeply disturbing. <br><br> It's enough to get you moving, at least.",
    choice1: "Chase after the shadow.",
    choice2: "Head back to your desk and pack up to leave.",
    choice1Path: 9,
    choice2Path: 10,
  },
  {
    path: 5,
    img: "https://static.wixstatic.com/media/3ec94b_5a857aeebc754462a6dbf73ebc29b78c~mv2.png",
    imgAlt: "Doll return to desk after thrown away",
    text: "The doll landed in the bin with a soft thud. <br><br> Your heartbeat was louder than before and faster now as your panic built up inside you. As you turned away, you noticed movement on your computer screen. The numbers on the page seemed to shift and flow in ways that should not be possible. <br><br> A new document appeared on the computer screen titled 'Doll'. <br><br> It had no words inside but was filled with images of dolls – photos and drawings that you did not put there. As you stared at the monitor, the screen seemed to grow darker around the edges, and a creeping cold enveloped you.<br><br> Then you heard a soft giggle. You froze. There's no one else here. <br><br> Just you, your computer, and... the doll? <br><br> It couldn't be... <br><br> The doll was sitting on your desk again, untouched.",
    choice1: "Run and scream for help.",
    choice2: "Grab the doll and try to break it.",
    choice1Path: 16,
    choice2Path: 17,
  },
  {
    path: 6,
    img: "https://static.wixstatic.com/media/3ec94b_5d32582ffb99469ab832dd5b8711c4cc~mv2.png",
    imgAlt: "Strange symbols at the back of the doll",
    text: 'You held the doll up under the dim office lights, taking a closer look at its eerie, hand-painted face. Its eyes were dull and black, giving off the unsettling feeling that they were watching you. As you turned the doll over, you noticed strange symbols carved into its back, spirals, and shapes that looked almost like letters. With each touch, you felt a chill creeping through your fingers. <br><br> Just then, a notification pinged on your computer. <br><br> The message read: "Help us. Room 23." <br><br> You recognized Room 23 as the old printing room no one has used since everything went digital years ago.',
    choice1: "Head to the old printing room to investigate.",
    choice2: "Ignore the message and head to the pantry to calm yourself.",
    choice1Path: 11,
    choice2Path: 12,
  },
  {
    path: 7,
    img: "https://static.wixstatic.com/media/3ec94b_f4942e22459347c0ad3ae9f1d79725c3~mv2.png",
    imgAlt: "Doll standing up and staring at the reader",
    text: "It flew out of your hands… <br><br> And landed perfectly on its feet, still staring at you with its unnerving expression. <br><br> A cold wind blew from the hallway, chilling you to the bone. The office grew dark around you. Something moved in the corner of your vision. In your distraction, you realized the doll had vanished. <br><br> You didn't want to know what moved. <br><br> You didn't want to know where the doll was. <br><br> You just wanted to get out of here. <br><br> With a yelp of horror, you took off running through the darkened office, desperate to escape this terrifying entity. But it seemed as if, with every turn you made, something was always there waiting for you. <br><br> You didn't understand. It had to be your imagination playing tricks on you, right? <br><br> All the overtime work was getting into your head. <br><br> What should you do?",
    choice1: "Keep running toward the exit.",
    choice2: "Scream and call for help.",
    choice1Path: 16,
    choice2Path: 17,
  },
  {
    path: 8,
    img: "https://static.wixstatic.com/media/3ec94b_ab77e5186c3a422faeea09c47b813310~mv2.png",
    imgAlt: "Unmoving doll standing as reader speak to it",
    text: 'You decided that it was better to talk to the doll. <br><br> After all, it just appeared on your desk in the middle of the night without any explanation or warning. Perhaps it was sent to you by a mysterious force beyond understanding, or maybe it\'s here to warn you about the horrors that await you. Either way, you needed to find out more. <br><br> Maybe it would talk back to you. Or perhaps you\'re going mad... but that would be okay, too. <br><br> If this doll didn\'t drive you crazy, you were sure your supervisor would. <br><br> "Hi there," you said, looking into the doll\'s eyes. They\'re bright blue and piercingly cold but don\'t move or blink. <br><br> The doll didn\'t reply. Were you expecting it to? <br><br> "What\'s yours?" you asked, "Can you tell me about yourself? About what brought you to my desk?" <br><br> Nothing. <br><br> "Hello... Are you okay?" <br><br> "No. We are not," a voice whispered, emanating from the doll\'s mouth. <br><br> You flinched. What was going on? Did it really speak? <br><br> We?',
    choice1: "Ask how you can help.",
    choice2: "Drop the doll and leave the office.",
    choice1Path: 18,
    choice2Path: 17,
  },
  {
    path: 9,
    img: "https://static.wixstatic.com/media/3ec94b_e3e8cf8cadf34eadb2798e3b87eb54d9~mv2.png",
    imgAlt: "Abandoned and creepy staircase leading down into darkness",
    text: "You sprinted down the hall, following the shadow as it scurried out of sight. You stopped for a second to catch your breath, and that's when you heard it. A soft shuffling sound coming from just beyond the next corner. <br><br> Your heart was beating faster now, and you reached the edge and peeked around. <br><br> Nothing. <br><br> You glanced both ways to make sure, then went ahead slowly forward, checking each room. <br><br> Finally, you reached a small, narrow door tucked away in a forgotten corner. You opened it to find an old, forgotten stairwell leading down into darkness. <br><br> You didn't have a flashlight, and it was too dark to see, but something was down there... waiting for you.",
    choice1: "Go down the stairwell.",
    choice2: "Turn around and head back to the safety of your desk. ",
    choice1Path: 16,
    choice2Path: 2,
  },
  {
    path: 10,
    img: "https://static.wixstatic.com/media/3ec94b_4048e4242e5645ce8cda5781b8724041~mv2.png",
    imgAlt: "Silhouette of a person running through an office hallway",
    text: 'Your hands were shaking. You wanted to leave as soon as possible. <br><br> Just as you turned around, you noticed that the doll had disappeared. <br><br> A cold gust of wind rushed through the open office. The door was closed and locked, but you didn\'t care. You wanted out of here! You fumbled for your keys and hurried back to your desk, where you gathered your belongings as quickly as possible. <br><br> As you headed toward the exit, the hallway grew longer, and the exit sign seemed to drift further away. <br><br> A doll’s voice echoed, "You can’t leave." <br><br> The lights flickered out, plunging you into darkness. <br><br> You screamed and started to run down the pitch-black hallway. You tripped on a rug and stumbled, crashing to the ground. Your belongings were scattered across the floor. <br><br> You heard something else scuttling down the hall before you – a rat or a cockroach? Something scampered over your leg in the darkness, sending chills through you.',
    choice1: "Scream for help.",
    choice2: "Keep running, determined to leave.",
    choice1Path: 17,
    choice2Path: 16,
  },
  {
    path: 11,
    img: "https://static.wixstatic.com/media/3ec94b_5261fc53af7b4370b993c9369d06212a~mv2.png",
    imgAlt: "An empty office hallway with a room numbered 23 at the end",
    text: 'You navigated the dark hallways toward the forgotten printing room in a deserted office wing. The closer you got, the stronger the chill became, almost as if the doll warned you of something. Yet curiosity and a strange compulsion drove you forward. <br><br> The door to Room 23 was slightly ajar. <br><br> As you pushed the door open, a stale, musty smell filled the air. The room was cramped, with ancient printers and fax machines covered in dust. The overhead light flickered erratically, casting long shadows across the room. Suddenly, one of the old printers roared to life, printing a page in slow, agonizing whirs. <br><br> You watched, transfixed, as the sheet of paper slid out with a single line typed across the top: "We are watching you.”',
    choice1: "Examine the printed paper more closely.",
    choice2: "Enough of this nonsense! Turn around and return to your work.",
    choice1Path: 13,
    choice2Path: 19,
  },
  {
    path: 12,
    img: "https://static.wixstatic.com/media/3ec94b_29d67dd2607f4656a83b7b3feb780023~mv2.png",
    imgAlt: "An empty office pantry lit up by the creepy moonlight",
    text: 'You decided you’ve had enough ghostly nonsense for one night. Clutching the doll, you went to the pantry, hoping a cup of tea or coffee might help settle your nerves. <br><br> The pantry was empty, save for the faint hum of the refrigerator. You took a mug from the cabinet, but as you reached for the coffee pot, you heard a faint, high-pitched voice. <br><br> "Release us." <br><br> Your heart raced as you spun around, but no one was there. <br><br> Did the doll just speak?',
    choice1: "Talk to the doll, asking who they are.",
    choice2:
      "Leave the pantry and return to your desk, abandoning your drink and the doll.",
    choice1Path: 14,
    choice2Path: 15,
  },
  {
    path: 13,
    img: "https://static.wixstatic.com/media/3ec94b_ad645e84f0e94858846664082be94706~mv2.png",
    imgAlt:
      "A hand holding up a piece of paper with the text, We are watching you",
    text: 'You picked up the paper tremblingly, feeling the thick, worn texture under your fingertips. Below the words "We are watching you," more text appears as if typed by an invisible hand: <br><br> "We are trapped, bound to this building... by the disgruntled." <br><br> As you read, you heard a scraping sound behind you. Turning slowly, you saw the doll that wasn’t there before, sitting on top of a nearby printer with its head tilted as though observing you. <br><br> A faint, scratchy voice echoed, "Will you help us, or will you join us?"',
    choice1: "Tell the doll you want to help the trapped spirits.",
    choice2: "Drop the paper and flee out of the office.",
    choice1Path: 18,
    choice2Path: 16,
  },
  {
    path: 14,
    img: "https://static.wixstatic.com/media/3ec94b_31c4b304e70b4595965318bb519c17af~mv2.png",
    imgAlt: "A creepy doll sitting on the pantry countertop",
    text: 'With your voice shaking, you asked, "Who… who are you? What do you want?" <br><br> The doll’s eyes remained fixed on you as it began to whisper. "We were like you once, workers here, just trying to finish our shifts. Until we were bound to this place by… by the disgruntled boss, he was determined for his promotion and needed everyone to work late. He sought witchcraft to help him, but it backfired. It left us here in this form. But you—" <br><br> The dolls\' eyes glinted ominously.',
    choice1: "Ask how you can help free them from the building.",
    choice2: "Slowly back away and leave the building.",
    choice1Path: 18,
    choice2Path: 16,
  },
  {
    path: 15,
    img: "https://static.wixstatic.com/media/3ec94b_1adeb35af38545bfbbccde49d9befd0e~mv2.png",
    imgAlt:
      "A computer monitor showing a message Room 23 holds the answers you seek",
    text: 'Leaving the eerie pantry behind, you felt unsettled and strangely watched, as if unseen eyes were tracking your every move. The hallways felt darker, and even your cubicle had a chilling emptiness. <br><br> When you reached your desk, you noticed something strange— a typed note on your computer screen read: "Room 23 holds the answers you seek." <br><br> Your instincts told you the doll may have moved there. <br><br> Maybe you should check out Room 23.',
    choice1: "Head to Room 23 (the old printing room).",
    choice2:
      "Ignore the message and make a plan to leave the building immediately.",
    choice1Path: 11,
    choice2Path: 17,
  },
  {
    path: 16, //Ending 1
    img: "https://static.wixstatic.com/media/3ec94b_7c9bcb37677a439aa9929ab00c766a3c~mv2.png",
    imgAlt: "Floating doll chasing reader",
    text: "Your legs ached. <br><br> The office lights flickered ominously overhead — your heart pounded in your ears. You knew what was following you. <br><br> You heard a faint giggling from around you and suddenly felt your heart torn from your chest. <br><br> Dolls. <br><br> There are so many dolls. <br><br> No matter what you tried, the dolls seemed to follow, each corner leading you deeper into an endless maze of hallways and locked doors. You didn't recognize where you were. This building didn't seem real. It didn't seem familiar anymore. <br><br> But the dolls followed, their unchanging smiles taunting you with each step. <br><br> It's getting harder to run. Your legs felt stiffer with every stride, and your joints were aching and popping from the exertion. You saw that your arms had grown grainier. The skin of your hands shrivelled and cracked as though your skin had turned to old leather. You tried to scream, but nothing came out. <br><br> You collapsed, exhausted. <br><br> As the shadows closed, you realized you would never leave the office. <br><br> The dolls were always there. They always watched. <br><br> And now you are one of them. <br><br> Ending 1: Trapped as a Doll (Bad Ending)",
    choice1: "n/a",
    choice2: "n/a",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 17, //Ending 2
    img: "https://static.wixstatic.com/media/3ec94b_9f623888e00546c2bdce4e301fee543a~mv2.png",
    imgAlt:
      "Silhouette of an exhausted person with a building in the background",
    text: 'You had enough! <br><br> With a shriek, you bolted for the office exit. You stumbled over yourself and the objects that blocked your path in the darkened room, but you did not slow down. You made your way through the hallway and ran through the office door as fast as your legs could carry you. <br><br> When you burst into the elevator lobby, you repeatedly slammed your finger down on the down arrow button until the door opened, and you hopped inside — the doors slowly closed behind you. <br><br> "Come on, come on," you muttered to yourself. <br><br> From a distance, you noticed a shadowy figure emerging from the office you had just left. You recognized the silhouette of the creepy doll. Its eerie, lifeless eyes seemed to stare right at you. The doll reached out a hand toward the elevator, but the doors closed before it could make contact. <br><br> You broke free from the haunted office, stumbling into the cool night air… <br><br> You had escaped! <br><br> Or so you thought… <br><br> You have brought whatever evil with you. You were sure you heard the soft giggling from your backpack as you walked home that night. When you reached home, you pulled out your bag and found the creepy doll looking back at you. <br><br> You screamed. <br><br> You threw it away. <br><br> It came back. <br><br> You are cursed. <br><br> You cannot escape it. <br><br> Ending 2: Escape with a Curse(Bad Ending)',
    choice1: "n/a",
    choice2: "n/a",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 18, //Ending 3
    img: "https://static.wixstatic.com/media/3ec94b_4df60f38ab334eb9966653058d3e13de~mv2.png",
    imgAlt: "A doll basked in blue light at rest",
    text: 'The doll\'s mouth didn\'t move as it spoke. "We\'re trapped... All of us," it continued in an ominous whisper. "Trapped because of him... because of him, because of him..."  <br><br> The doll\'s voice faded away and then stopped entirely, leaving only an echo of its words in the silence of the empty room. <br><br> Your heart raced. <br><br> You sat there, staring at the doll, frozen in fear. Your body was cold from the winter air, but it had nothing to do with the temperature of the room. <br><br> Then suddenly, it whispered, "Take us outside the office. The only way to break the curse." <br><br> Your eyes widened in horror at those words. Were you hearing things now, too? Was it possible to get this stressed and deluded from lack of sleep and coffee? <br><br> The doll spoke again, "We are all cursed workers... like you." Your heartbeat increased rapidly at its words. Cursed workers... like you... <br><br> The doll turned away from you. You stood in shock as you heard the voice inside its wooden head, "Quick before the boss will make you suffer... Like us. All of us. Take us outside the office before it’s too late!" <br><br> You picked up the doll. There was something strange and otherworldly about this object you had just touched. <br><br> As you carried the doll outside, you felt a sense of peace. You looked back one last time, seeing the shadowy figures of former workers waving farewell before fading away. <br><br> They had finally found their freedom from overtime... unlike you. <br><br> As you walked back towards the haunted building to finish the client presentation, you thought to yourself, "What am I doing with my life?” <br><br> Ending 3: Breaking the Spell (Good Ending)',
    choice1: "n/a",
    choice2: "n/a",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 19, //Ending 4
    img: "https://static.wixstatic.com/media/3ec94b_d68bcd5ba0e140e99801265daebe0acd~mv2.png",
    imgAlt:
      "Silhouette of an office worker frantically at work in the darkness of the office",
    text: "Determined to finish your work and convinced that whatever strange things happened was just part of an overactive imagination, you took a deep breath and returned to your desk. <br><br> You ignored the eerie dolls scattered around the office, the strange noises, and the flickering lights. Each time you saw a doll on a printer, a desk, or even peering out from behind a plant, you simply glanced away and refocused on your computer screen. <br><br> You put in your earbuds to drown out any whispers or creaks, focusing intently on the spreadsheet in front of you. Every so often, you caught a glimpse of movement out of the corner of your eye—a flash of porcelain or a rustling of fabric—but you forced yourself to keep typing, refusing to acknowledge it. <br><br> Hours passed, and eventually, the office began to feel ordinary again. The strange occurrences quieted, and the atmosphere lost some of its tension. As you completed the final part of your report, a feeling of relief washed over you. The dolls, though still there, seem to be simply... objects, as if they’ve lost their supernatural hold over the office. <br><br> With the work finished, you packed up and prepared to leave, casting one last glance around the room. The dolls remained still, lifeless and unmoving. You left the building, exhausted but relieved, and the eerie memories of the night seemed to fade into the background, just another late shift in an old, haunted office. <br><br> Ending 4: Enduring the Haunting (Neutral Ending)",
    choice1: "n/a",
    choice2: "n/a",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 20,
    img: "https://static.wixstatic.com/media/3ec94b_486343113a2647f08c504ff0acc02ad1~mv2.png",
    imgAlt: "bright and warm hallway",
    text: "The stairwell was quiet, too quiet, with only the echo of your own footsteps filling the void. Shadows clung to the walls, darker than they should be, stretching and shifting like they're watching you. The cold metal key in your pocket felt almost alive, its weight pressing against your thigh like a silent reminder that it might be your only way out.<br><br> As you descended, you spotted it—a door to the side, small and unmarked, a door you could swear wasn’t there before. Heart pounding, you slid the key out of your pocket, half-expecting it won’t fit. But as you approached the door, you felt a faint warmth coming from behind, a strange, welcoming glow that seemed completely out of place in this haunted building.<br><br> With a shaky breath, you inserted the key. It slid in with ease, the lock turning with a soft click. The door creaked open to reveal a narrow hallway that’s bathed in a strange, soft light. The walls were lined with old pictures, each one capturing different faces you vaguely recognized—coworkers, office visitors, maybe even faces you’d never seen but feel disturbingly familiar. You didn’t dare linger on them, pushing forward.<br><br> The air in this hall felt different: warmer, safe even, as if you’ve stepped into some hidden sanctuary. At the end of the hallway, there’s another door.<br><br> You pushed the final door open and step into the night air, the cool breeze hitting your face like a blessing. You’re outside. You’re free. Relief flooded you as you realized you’d left the building behind, its shadows and whispers still trapped inside.<br><br> Turning around, you saw the faint glow of the office windows in the distance, and there—up on the top floor—you caught a flicker of movement. A face, pale and watching, the glassy eyes of a doll fixed on you from the shadows. It tilted its head ever so slightly, as if acknowledging your escape… for now.<br><br> You shuddered but refused to look back again. You made it out. The building’s haunted secrets were sealed behind its walls, and tonight, they failed to keep you.<br><br> You survived, haunted by the memory but safe… for now.<br><br> Ending 5: The Escape (Good Ending)",
    choice1: "Go down the stairwell.",
    choice2: "Turn around and head back to the safety of your desk. ",
    choice1Path: 0,
    choice2Path: 0,
  },
];

/*-------------------------------- Variables --------------------------------*/
let currentPath = 0;
let inventory = [];

/*------------------------ Cached Element References ------------------------*/
const heroImage = document.querySelector("img");
const story = document.querySelector(".story");
const optionA = document.querySelector("#a");
const optionB = document.querySelector("#b");
const choices = document.querySelectorAll(".option");
const home = document.querySelector(".home");
const start = document.querySelector(".start");
const item = document.querySelector(".item");
const inventoryDisplay = document.querySelector("#inventoryDisplay");
/*----------------------------- Event Listeners -----------------------------*/

start.addEventListener("click", () => {
  currentPath = 0; // Move to path number corresponding to choice1Path
  render(currentPath);
});

optionA.addEventListener("click", () => {
  currentPath = paths[currentPath].choice1Path; // Move to path number corresponding to choice1Path
  render(currentPath);
});

optionB.addEventListener("click", () => {
  currentPath = paths[currentPath].choice2Path; // Move to path number corresponding to choice2Path
  render(currentPath);
});

home.addEventListener("click", () => {
  currentPath = 0;
  initial();
});

item.addEventListener("click", () => {
  if (!inventory.includes(item.title)) {
    inventory.push(item.title);
    updateInventoryDisplay();
  }
});

/*----------------------------- Functions -----------------------------*/

function initial() {
  inventoryDisplay.innerHTML = "";
  inventory = [];
  heroImage.setAttribute(
    "src",
    "https://static.wixstatic.com/media/3ec94b_158cd70537d840c9879a13b60ce26f63~mv2.png"
  );
  heroImage.setAttribute("alt", "late night office desk");
  story.innerHTML =
    'Story Instructions: <br><br>The office is empty, the air thick with silence. Only the hum of the fluorescent lights and the faint clinking of pipes echo through the dimly lit halls. Your desk is cluttered with unfinished reports and stacks of files. <br><br> Tonight, you’re alone… or at least, you think you are. <br><br> As you burn the midnight oil, you will be faced with a series of choices to make, each leading to a different outcome. <br><br> So... will you survive your overtime in "Overtime Horrors"?';
  home.style.display = "none";
  start.style.display = "block";
  optionA.style.display = "none";
  optionB.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" }); //source: https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript/62073476
}

function updateItemButton() {
  item.style.backgroundImage = "";
  if (currentPath === 1) {
    item.style.backgroundImage =
      "url(https://static.wixstatic.com/media/3ec94b_e3eee504b57e4739ae5feb4994c21092~mv2.png)";
    item.title = "Key";
  }
}

function updateInventoryDisplay() {
  inventory.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "inventory-item";
    itemElement.textContent = item;
    inventoryDisplay.appendChild(itemElement);
  });
}

function conditionalPaths() {
    if (currentPath === 9 ) {
        const pathToUpdate = paths.find((path) => path.path === 9);
        if (inventory.includes("Key")) {
            pathToUpdate.choice1Path = 20;
        } else {
            pathToUpdate.choice1Path = 16;
    }}};

function render() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  home.style.display = "none";
  start.style.display = "none";
  optionA.style.display = "block";
  optionB.style.display = "block";
  const currentStory = paths[currentPath]; //figure out how to select an array item with the path instead of an index
  story.innerHTML = currentStory.text;
  optionA.innerText = currentStory.choice1;
  optionB.innerText = currentStory.choice2;
  heroImage.setAttribute("src", currentStory.img);
  heroImage.setAttribute("alt", currentStory.imgAlt);
  if (currentStory.choice1Path === 0) {
    // When player reached an end, choice1Path = 0
    optionA.style.display = "none";
    optionB.style.display = "none";
    home.style.display = "block";
  }
  updateItemButton();
  conditionalPaths();
}

initial();
