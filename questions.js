const questionBank = [
    {
        q: "1. Do you prefer sad or happy music?",
        options: [
            { text: "I generally gravitate towards upbeat tracks because they boost my mood and keep me energized throughout the day.", score: 100, feedback: "Perfect! Great use of 'gravitate towards' and 'energized'." },
            { text: "I generally gravitate towards upbeat tracks because they boosts my mood and keep me energized throughout the day.", score: 0, feedback: "Grammar Trap! 'They boosts' is incorrect; it should be 'they boost' for plural subjects." },
            { text: "I generally gravitate towards upbeat tracks because they lift my atmosphere and keep me energized throughout the day.", score: 50, feedback: "Context Trap! We say music lifts your 'mood,' not your 'atmosphere' in this context." },
            { text: "I generally gravitate towards upbeat tracks because they raise my spirit and keep me energized throughout the day.", score: 45, feedback: "Context Trap! While 'raise my spirits' is an idiom, 'raise my spirit' sounds slightly unnatural here." }
        ]
    },
    {
        q: "2. Does happy music make you feel more excited?",
        options: [
            { text: "Absolutely, whenever a cheerful melody comes on, I find it almost impossible to sit still or stay in a negative headspace.", score: 100, feedback: "Excellent! 'Headspace' and 'cheerful melody' are very natural expressions." },
            { text: "Absolutely, whenever a cheerful melody comes on, I find it almost impossible to sit still or stay in a negative heartspace.", score: 0, feedback: "Grammar Trap! 'Heartspace' is not a standard term; 'headspace' refers to your mental state." },
            { text: "Absolutely, whenever a cheerful melody comes on, I find it almost impossible to sit still or stay in a negative mind-area.", score: 50, feedback: "Context Trap! 'Mind-area' is awkward; 'frame of mind' or 'headspace' is the proper collocation." },
            { text: "Absolutely, whenever a cheerful melody comes on, I find it almost impossible to sit still or stay in a negative mood-zone.", score: 45, feedback: "Context Trap! 'Mood-zone' is not a natural English expression for your state of mind." }
        ]
    },
  {
        q: "3. What was your childhood dream?",
        options: [
            { text: "I remember being absolutely obsessed with space and wanting to become an astronaut so I could explore the galaxy.", score: 100, feedback: "Perfect! 'Absolutely obsessed with' and 'explore the galaxy' are high-level collocations." },
            { text: "I remember being absolutely obsessed with space and wanting to became an astronaut so I could explore the galaxy.", score: 0, feedback: "Grammar Trap! 'Wanting to became' is incorrect; it must be 'wanting to become' after 'to'." },
            { text: "I remember being absolutely obsessed with space and wanting to become a star-traveler so I could explore the galaxy.", score: 50, feedback: "Context Trap! 'Star-traveler' is not a standard job title; 'astronaut' is the correct term." },
            { text: "I remember being absolutely obsessed with space and wanting to become an air-pilot so I could explore the galaxy.", score: 45, feedback: "Context Trap! An 'air-pilot' flies planes; people who go to space are 'astronauts'." }
        ]
    },
    {
        q: "4. Are you the kind of person who sticks to dreams?",
        options: [
            { text: "Generally speaking, I try to remain persistent, though I've learned that it's important to adapt when circumstances change.", score: 100, feedback: "Excellent! 'Remain persistent' and 'circumstances change' are very natural." },
            { text: "Generally speaking, I try to remain persistent, though I've learned that it's important to adapt when circumstances changes.", score: 0, feedback: "Grammar Trap! 'Circumstances' is plural, so it should be 'circumstances change' (no -s)." },
            { text: "Generally speaking, I try to remain insistent, though I've learned that it's important to adapt when circumstances change.", score: 50, feedback: "Context Trap! 'Insistent' usually means demanding something; 'persistent' means not giving up." },
            { text: "Generally speaking, I try to remain adhesive, though I've learned that it's important to adapt when circumstances change.", score: 40, feedback: "Context Trap! 'Adhesive' refers to glue; to continue with a dream, we say 'stick to' or 'remain committed'." }
        ]
    },
    {
        q: "5. What is your dream job?",
        options: [
            { text: "Ideally, I would love a role that allows me to combine my creative skills with my passion for environmental conservation.", score: 100, feedback: "Perfect! 'Ideally,' and 'environmental conservation' are sophisticated choices." },
            { text: "Ideally, I would love a role that allows me to combine my creative skills with my passion for environmental conversations.", score: 0, feedback: "Vocabulary Trap! 'Conservation' (saving nature) vs 'Conversations' (talking)." },
            { text: "Ideally, I would love a role that allows me to combine my creative skills with my passion for environmental reservation.", score: 50, feedback: "Context Trap! 'Reservation' is for a table; 'conservation' is for protecting the environment." },
            { text: "Ideally, I would love a role that allows me to combine my creative skills with my passion for environmental observation.", score: 45, feedback: "Context Trap! 'Observation' just means watching; 'conservation' implies active protection." }
        ]
    },
    {
        q: "6. Do you think you are an ambitious person?",
        options: [
            { text: "I would say so; I'm constantly setting new goals for myself because I find personal growth to be incredibly rewarding.", score: 100, feedback: "Excellent! 'Setting new goals' and 'incredibly rewarding' are great B2/C1 phrases." },
            { text: "I would say so; I'm constantly setting new goals for myself because I find personal growth to be incredibly rewarded.", score: 0, feedback: "Grammar Trap! The situation is 'rewarding' (active); you feel 'rewarded' (passive)." },
            { text: "I would say so; I'm constantly setting new goals for myself because I find personal growth to be incredibly awarding.", score: 50, feedback: "Context Trap! An 'award' is a prize; 'rewarding' is the feeling of satisfaction." },
            { text: "I would say so; I'm constantly setting new goals for myself because I find personal growth to be incredibly profitable.", score: 40, feedback: "Context Trap! 'Profitable' refers to money; for personal satisfaction, use 'rewarding'." }
        ]
    },
  {
        q: "7. What is your favourite food?",
        options: [
            { text: "I have a real weakness for traditional Italian cuisine, especially authentic pasta dishes made with fresh, local ingredients.", score: 100, feedback: "Perfect! 'Have a weakness for' and 'authentic' are excellent high-level choices." },
            { text: "I have a real weakness for traditional Italian cuisine, especially authentic pasta dishes made with fresh, local ingredient.", score: 0, feedback: "Grammar Trap! 'Ingredient' should be plural ('ingredients') when talking about dishes in general." },
            { text: "I have a real weakness for traditional Italian kitchen, especially authentic pasta dishes made with fresh, local ingredients.", score: 50, feedback: "Context Trap! 'Kitchen' refers to the room; 'cuisine' refers to the style of food." },
            { text: "I have a real weakness for traditional Italian cookery, especially authentic pasta dishes made with fresh, local ingredients.", score: 45, feedback: "Context Trap! 'Cookery' refers to the act of cooking; 'cuisine' is the more natural word for the food itself." }
        ]
    },
    {
        q: "8. What kind of food did you like when you were young?",
        options: [
            { text: "Growing up, I was quite fond of anything sweet, particularly homemade desserts that my grandmother used to prepare.", score: 100, feedback: "Excellent! 'Quite fond of' and 'prepare' are very natural and sophisticated." },
            { text: "Growing up, I was quite fond of anything sweet, particularly homemade desserts that my grandmother used to prepares.", score: 0, feedback: "Grammar Trap! 'Used to' is followed by the base verb 'prepare' (no -s)." },
            { text: "Growing up, I was quite fond of anything sweet, particularly homemade deserts that my grandmother used to prepare.", score: 50, feedback: "Vocabulary Trap! 'Deserts' (dry sand) vs 'Desserts' (sweet treats)." },
            { text: "Growing up, I was quite fond of anything sweet, particularly homemade sweets that my grandmother used to prepare.", score: 45, feedback: "Context Trap! 'Sweets' usually means candy; 'desserts' is better for dishes like cake or pudding." }
        ]
    },
    {
        q: "9. Do you eat different foods at different times of the year?",
        options: [
            { text: "Definitely; I tend to prefer lighter meals like salads in the summer, while in winter I opt for heartier stews.", score: 100, feedback: "Perfect! 'Opt for' and 'heartier' show a great range of vocabulary." },
            { text: "Definitely; I tend to prefer lighter meals like salads in the summer, while in winter I opts for heartier stews.", score: 0, feedback: "Grammar Trap! 'I opts' is incorrect; it must be 'I opt'." },
            { text: "Definitely; I tend to prefer lighter meals like salads in the summer, while in winter I opt for heavier stews.", score: 50, feedback: "Context Trap! While 'heavy' works, 'hearty' is the specific high-level collocation for filling winter food." },
            { text: "Definitely; I tend to prefer lighter meals like salads in the summer, while in winter I opt for thicker stews.", score: 45, feedback: "Context Trap! 'Thick' describes texture; 'hearty' describes the satisfying nature of the meal." }
        ]
    },
    {
        q: "10. Has your favourite food changed since you were a child?",
        options: [
            { text: "Quite significantly; as I've matured, my palate has developed, and I now appreciate much spicier and more complex flavours.", score: 100, feedback: "Excellent! 'Palate has developed' is a C1-level expression." },
            { text: "Quite significantly; as I've matured, my palate has developed, and I now appreciate much spicier and more complex flavors.", score: 0, feedback: "Note: This is correct in US English, but if targeting British IELTS, 'flavours' is the standard spelling." },
            { text: "Quite significantly; as I've matured, my pallet has developed, and I now appreciate much spicier and more complex flavours.", score: 50, feedback: "Vocabulary Trap! A 'pallet' is a wooden shipping platform; a 'palate' is your sense of taste." },
            { text: "Quite significantly; as I've matured, my plate has developed, and I now appreciate much spicier and more complex flavours.", score: 40, feedback: "Context Trap! 'Plate' is the dish; 'palate' is the sense of taste." }
        ]
    },
  {
        q: "11. What's your favourite animal? Why?",
        options: [
            { text: "I've always been fascinated by dolphins because of their incredible intelligence and their playful nature in the wild.", score: 100, feedback: "Perfect! 'Fascinated by' and 'incredible intelligence' are high-level collocations." },
            { text: "I've always been fascinated by dolphins because of their incredible intelligence and their playful nature in the wilds.", score: 0, feedback: "Grammar Trap! 'In the wild' is a fixed expression; 'wilds' is incorrect here." },
            { text: "I've always been fascinated by dolphins because of their incredible wisdom and their playful nature in the wild.", score: 50, feedback: "Context Trap! We usually use 'intelligence' for animals; 'wisdom' is typically reserved for humans with life experience." },
            { text: "I've always been fascinated by dolphins because of their incredible smartness and their playful nature in the wild.", score: 45, feedback: "Context Trap! 'Smartness' is too informal; 'intelligence' is the better B2/C1 choice." }
        ]
    },
    {
        q: "12. Where do you prefer to keep your pet, indoors or outdoors?",
        options: [
            { text: "I definitely prefer keeping pets indoors, as it ensures they are safe, comfortable, and fully integrated into the family.", score: 100, feedback: "Excellent! 'Fully integrated into' is a sophisticated way to describe a relationship." },
            { text: "I definitely prefer keeping pets indoors, as it ensures they are safe, comfortable, and fully integrated into the families.", score: 0, feedback: "Grammar Trap! Use the singular 'family' when referring to your specific household unit." },
            { text: "I definitely prefer keeping pets indoors, as it ensures they are safe, comfortable, and fully included into the family.", score: 50, feedback: "Context Trap! While 'included' works, 'integrated' is a more precise and higher-level term for this context." },
            { text: "I definitely prefer keeping pets indoors, as it ensures they are safe, comfortable, and fully interior to the family.", score: 40, feedback: "Context Trap! 'Interior' refers to the inside of a building, not a social connection." }
        ]
    },
    {
        q: "13. Have you ever had a pet before?",
        options: [
            { text: "Yes, I used to have a golden retriever who was incredibly loyal and accompanied me on all my childhood adventures.", score: 100, feedback: "Perfect! 'Incredibly loyal' and 'accompanied me' are great descriptive choices." },
            { text: "Yes, I used to had a golden retriever who was incredibly loyal and accompanied me on all my childhood adventures.", score: 0, feedback: "Grammar Trap! 'Used to' must be followed by the base verb 'have,' not the past tense 'had'." },
            { text: "Yes, I used to have a golden retriever who was incredibly faithful and accompanied me on all my childhood adventures.", score: 50, feedback: "Context Trap! While 'faithful' is okay, 'loyal' is the standard high-level collocation for dogs." },
            { text: "Yes, I used to have a golden retriever who was incredibly attached and accompanied me on all my childhood adventures.", score: 45, feedback: "Context Trap! 'Attached' usually describes the feeling, while 'loyal' describes the character of the dog." }
        ]
    },
    {
        q: "14. What is the most popular animal in China?",
        options: [
            { text: "Without a doubt, the giant panda is the most iconic animal in China and is deeply cherished as a national treasure.", score: 100, feedback: "Excellent! 'Iconic' and 'deeply cherished' are fantastic IELTS vocabulary words." },
            { text: "Without a doubt, the giant panda is the most iconic animal in China and is deeply cherished as a national treasures.", score: 0, feedback: "Grammar Trap! 'National treasure' should be singular here as you are referring to one species." },
            { text: "Without a doubt, the giant panda is the most famous animal in China and is deeply valued as a national treasure.", score: 50, feedback: "Context Trap! 'Iconic' and 'cherished' are much higher-level than 'famous' and 'valued'." },
            { text: "Without a doubt, the giant panda is the most classic animal in China and is deeply cherished as a national treasure.", score: 45, feedback: "Context Trap! 'Classic' usually refers to style or literature; 'iconic' is better for symbols." }
        ]
    },
  {
        q: "15. Have you ever been part of a sports team?",
        options: [
            { text: "Yes, I used to play for my high school basketball team, which really taught me the value of teamwork and discipline.", score: 100, feedback: "Perfect! 'Value of teamwork' and 'discipline' are great B2 keywords." },
            { text: "Yes, I used to play for my high school basketball team, which really taught me the value of teamwork and disciplines.", score: 0, feedback: "Grammar Trap! 'Discipline' is an uncountable noun in this context; it shouldn't have an 's'." },
            { text: "Yes, I used to play for my high school basketball team, which really taught me the value of team-spirit and discipline.", score: 50, feedback: "Context Trap! While 'team-spirit' is a thing, we say 'teamwork' for the actual skill or value learned." },
            { text: "Yes, I used to play for my high school basketball team, which really taught me the value of group-work and discipline.", score: 45, feedback: "Context Trap! 'Group-work' is usually for school projects; for sports, we always use 'teamwork'." }
        ]
    },
    {
        q: "16. Is team sports popular in your culture?",
        options: [
            { text: "Team sports are incredibly popular in my country, as they bring communities together and foster a sense of national pride.", score: 100, feedback: "Excellent! 'Foster a sense of' is a high-level verb choice." },
            { text: "Team sports is incredibly popular in my country, as they bring communities together and foster a sense of national pride.", score: 0, feedback: "Grammar Trap! 'Sports' is plural, so it must be 'Team sports ARE incredibly popular'." },
            { text: "Team sports are incredibly famous in my country, as they bring communities together and foster a sense of national pride.", score: 50, feedback: "Context Trap! Use 'popular' for activities people enjoy; 'famous' is for well-known people or landmarks." },
            { text: "Team sports are incredibly common in my country, as they bring communities together and foster a sense of national pride.", score: 45, feedback: "Context Trap! 'Common' just means they happen often; 'popular' correctly describes the high level of interest." }
        ]
    },
    {
        q: "17. Do you like watching team games? Why?",
        options: [
            { text: "I find them thrilling to watch, particularly when the outcome is uncertain and the players show exceptional coordination.", score: 100, feedback: "Perfect! 'Thrilling' and 'exceptional coordination' are sophisticated descriptors." },
            { text: "I find them thrilling to watch, particularly when the outcome is uncertain and the players show exceptional coordinations.", score: 0, feedback: "Grammar Trap! 'Coordination' is uncountable here; adding an 's' is a common error." },
            { text: "I find them exciting to watch, particularly when the outcome is uncertain and the players show exceptional cooperation.", score: 50, feedback: "Context Trap! In sports, we prefer 'coordination' or 'teamwork' over 'cooperation' (which sounds like a business deal)." },
            { text: "I find them moving to watch, particularly when the outcome is uncertain and the players show exceptional coordination.", score: 40, feedback: "Context Trap! 'Moving' means emotional/sad; 'thrilling' or 'exciting' is better for fast-paced games." }
        ]
    },
    {
        q: "18. What are the differences between team sports and individual sports?",
        options: [
            { text: "The primary difference lies in the level of collaboration required, as team sports depend heavily on collective effort.", score: 100, feedback: "Excellent! 'Primary difference lies in' and 'collective effort' are C1-level phrases." },
            { text: "The primary difference lies in the level of collaboration required, as team sports depends heavily on collective effort.", score: 0, feedback: "Grammar Trap! 'Team sports' is plural, so it should be 'depend' (no -s)." },
            { text: "The primary difference lies in the level of contribution required, as team sports depend heavily on collective effort.", score: 50, feedback: "Context Trap! While 'contribution' is okay, 'collaboration' is a much more precise word for working together." },
            { text: "The primary difference lies in the level of association required, as team sports depend heavily on collective effort.", score: 45, feedback: "Context Trap! 'Association' doesn't fit here; 'collaboration' or 'cooperation' is what you need." }
        ]
    },
  {
        q: "19. Do you have any hobbies?",
        options: [
            { text: "In my spare time, I'm quite passionate about photography, as it allows me to capture beautiful moments and express my creativity.", score: 100, feedback: "Perfect! 'Passionate about' and 'capture beautiful moments' are high-level and natural." },
            { text: "In my spare time, I'm quite passionate about photography, as it allows me to capture beautiful moments and express my creativities.", score: 0, feedback: "Grammar Trap! 'Creativity' is an uncountable noun here; it should not be plural." },
            { text: "In my spare time, I'm quite passionate about photography, as it allows me to capture beautiful moments and express my creations.", score: 50, feedback: "Context Trap! 'Creations' refers to the objects you make; 'creativity' is the ability you express." },
            { text: "In my spare time, I'm quite passionate about photography, as it allows me to capture beautiful moments and express my intentions.", score: 45, feedback: "Context Trap! 'Intentions' means your plans or aims; it doesn't fit the context of artistic expression." }
        ]
    },
    {
        q: "20. Did you have any hobbies when you were a child?",
        options: [
            { text: "Looking back, I was very into collecting stamps, which was a popular pastime among children in my neighborhood back then.", score: 100, feedback: "Excellent! 'Looking back' and 'pastime' are great for describing the past." },
            { text: "Looking back, I was very into collecting stamps, which was a popular pastime among children in my neighborhood back there.", score: 0, feedback: "Grammar Trap! Use 'back then' for time; 'back there' refers to a physical location." },
            { text: "Looking back, I was very into collecting stamps, which was a popular entertainment among children in my neighborhood back then.", score: 50, feedback: "Context Trap! 'Pastime' is the specific word for a hobby; 'entertainment' is too broad." },
            { text: "Looking back, I was very into collecting stamps, which was a popular passage among children in my neighborhood back then.", score: 40, feedback: "Context Trap! 'Passage' doesn't mean hobby; you likely meant 'pastime'." }
        ]
    },
    {
        q: "21. Do you have a hobby that you've had since childhood?",
        options: [
            { text: "Actually, I've been playing the piano for over a decade, and it remains one of the most fulfilling aspects of my daily life.", score: 100, feedback: "Perfect! 'For over a decade' and 'fulfilling aspects' show great range." },
            { text: "Actually, I've been playing the piano for over a decade, and it remains one of the most fulfilling aspects of my daily lives.", score: 0, feedback: "Grammar Trap! You only have one 'daily life,' so it must be singular." },
            { text: "Actually, I've been playing the piano for over a decade, and it remains one of the most satisfying respects of my daily life.", score: 50, feedback: "Context Trap! 'Aspects' refers to parts of a situation; 'respects' is used for politeness or specific details." },
            { text: "Actually, I've been playing the piano for over a decade, and it remains one of the most fulfilling prospects of my daily life.", score: 45, feedback: "Context Trap! 'Prospects' refers to future possibilities; 'aspects' is correct for current parts of life." }
        ]
    },
    {
        q: "22. Do you have the same hobbies as your family members?",
        options: [
            { text: "Not really; while my parents enjoy gardening, I prefer more tech-oriented activities like coding or digital illustration.", score: 100, feedback: "Excellent! 'Tech-oriented' and 'digital illustration' are very precise terms." },
            { text: "Not really; while my parents enjoy gardening, I prefer more tech-oriented activities like coding or digital illustrations.", score: 0, feedback: "Grammar Trap! 'Illustration' should be singular here when referring to the activity/hobby as a whole." },
            { text: "Not really; while my parents enjoy gardening, I prefer more tech-based occupations like coding or digital illustration.", score: 50, feedback: "Context Trap! 'Occupations' means jobs; since the question is about hobbies, 'activities' is better." },
            { text: "Not really; while my parents enjoy gardening, I prefer more tech-oriented exercises like coding or digital illustration.", score: 45, feedback: "Context Trap! 'Exercises' usually refers to physical or school work; 'activities' fits hobbies better." }
        ]
    },
  {
        q: "23. Do you like getting up early in the morning?",
        options: [
            { text: "To be honest, I'm more of a night owl, so I often find it quite challenging to drag myself out of bed before sunrise.", score: 100, feedback: "Perfect! 'Night owl' and 'drag myself out of bed' are very natural idioms." },
            { text: "To be honest, I'm more of a night owl, so I often find it quite challenging to drag myself out of bed before sunrises.", score: 0, feedback: "Grammar Trap! 'Sunrise' is an uncountable event here; it should not be plural." },
            { text: "To be honest, I'm more of a night owl, so I often find it quite challenging to pull myself out of bed before sunrise.", score: 50, feedback: "Context Trap! While 'pull' is okay, the idiom 'drag myself' perfectly expresses the difficulty of waking up." },
            { text: "To be honest, I'm more of a night owl, so I often find it quite challenging to lift myself out of bed before sunrise.", score: 45, feedback: "Context Trap! 'Lift' is too literal; 'drag myself' is the standard way to describe this feeling." }
        ]
    },
    {
        q: "24. What do you usually do in the morning?",
        options: [
            { text: "My morning routine usually involves a quick workout followed by a nutritious breakfast to kickstart my energy for the day.", score: 100, feedback: "Excellent! 'Nutritious' and 'kickstart my energy' are high-level choices." },
            { text: "My morning routine usually involves a quick workout followed by a nutritious breakfast to kickstart my energy for the days.", score: 0, feedback: "Grammar Trap! You are referring to the single day ahead of you, so 'days' is incorrect." },
            { text: "My morning routine usually involves a quick workout followed by a healthy breakfast to jumpstart my energy for the day.", score: 50, feedback: "Context Trap! 'Nutritious' and 'kickstart' are slightly more sophisticated than 'healthy' and 'jumpstart'." },
            { text: "My morning routine usually involves a quick workout followed by a nutritious breakfast to ignition my energy for the day.", score: 40, feedback: "Context Trap! 'Ignition' is a noun for car engines; you need the verb 'ignite' or 'kickstart'." }
        ]
    },
    {
        q: "25. What did you do in the morning when you were little? Why?",
        options: [
            { text: "I remember spending my mornings watching cartoons while eating cereal, as that was the highlight of my day back then.", score: 100, feedback: "Perfect! 'Highlight of my day' and 'back then' are great for nostalgic descriptions." },
            { text: "I remember spending my mornings watching cartoons while eating cereal, as that was the highlight of my day back there.", score: 0, feedback: "Grammar Trap! Use 'back then' for time; 'back there' is for physical locations." },
            { text: "I remember spending my mornings watching cartoons while eating cereal, as that was the peak of my day back then.", score: 50, feedback: "Context Trap! 'Peak' is okay, but 'highlight' is the most natural word for the best part of an event." },
            { text: "I remember spending my mornings watching cartoons while eating cereal, as that was the spotlight of my day back then.", score: 40, feedback: "Context Trap! A 'spotlight' is a lamp; 'highlight' is the figurative best part of the day." }
        ]
    },
    {
        q: "26. Are there any differences between what you do in the morning now and what you did in the past?",
        options: [
            { text: "Certainly; my mornings are much more frantic now that I have professional responsibilities to attend to every day.", score: 100, feedback: "Excellent! 'Frantic' and 'professional responsibilities' are sophisticated terms." },
            { text: "Certainly; my mornings are much more frantic now that I have professional responsibilities to attend to every days.", score: 0, feedback: "Grammar Trap! 'Every day' (singular) is used for frequency; 'every days' is always wrong." },
            { text: "Certainly; my mornings are much more busy now that I have professional responsibilities to attend to every day.", score: 50, feedback: "Context Trap! 'Frantic' is a much higher-level word than 'busy' to describe a rushed morning." },
            { text: "Certainly; my mornings are much more panicked now that I have professional responsibilities to attend to every day.", score: 45, feedback: "Context Trap! 'Panicked' implies extreme fear; 'frantic' implies being very rushed/busy." }
        ]
    },
    {
        q: "27. Do you spend your mornings doing the same things every day?",
        options: [
            { text: "For the most part, yes, as I find that having a consistent schedule helps me stay focused and productive.", score: 100, feedback: "Perfect! 'Consistent schedule' and 'productive' are high-level collocations." },
            { text: "For the most part, yes, as I find that having a consistent schedule helps me stay focused and productively.", score: 0, feedback: "Grammar Trap! You need the adjective 'productive' after 'stay,' not the adverb 'productively'." },
            { text: "For the most part, yes, as I find that having a constant schedule helps me stay focused and productive.", score: 50, feedback: "Context Trap! 'Consistent' refers to reliability/routine; 'constant' means never-ending/annoying." },
            { text: "For the most part, yes, as I find that having a stable schedule helps me stay focused and productive.", score: 45, feedback: "Context Trap! 'Stable' means not falling over; 'consistent' is better for a daily routine." }
        ]
    },
  {
        q: "28. Have you ever sent handmade gifts to others?",
        options: [
            { text: "Yes, I once crafted a personalized photo album for a close friend, which I felt was much more meaningful than a store-bought item.", score: 100, feedback: "Perfect! 'Crafted' and 'meaningful' are high-level and precise." },
            { text: "Yes, I once crafted a personalized photo album for a close friend, which I felt was much more meaningful than a store-bought items.", score: 0, feedback: "Grammar Trap! 'Item' should be singular here because you are comparing the gift to a general category." },
            { text: "Yes, I once made a personalized photo album for a close friend, which I felt was much more significant than a store-bought item.", score: 50, feedback: "Context Trap! While 'significant' is okay, 'meaningful' is the standard high-level word for emotional gifts." },
            { text: "Yes, I once processed a personalized photo album for a close friend, which I felt was much more meaningful than a store-bought item.", score: 40, feedback: "Context Trap! 'Processed' sounds like a factory or a computer; use 'crafted' or 'made' for handmade gifts." }
        ]
    },
    {
        q: "29. How do you choose a gift?",
        options: [
            { text: "I usually try to consider the recipient's personality and interests to ensure that the gift is both practical and thoughtful.", score: 100, feedback: "Excellent! 'Recipient's' and 'thoughtful' are very natural IELTS vocabulary." },
            { text: "I usually try to consider the recipient's personality and interests to ensure that the gift is both practical and thoughtfully.", score: 0, feedback: "Grammar Trap! You need the adjective 'thoughtful' here to match 'practical,' not the adverb 'thoughtfully'." },
            { text: "I usually try to consider the receiver's personality and interests to ensure that the gift is both practical and thoughtful.", score: 50, feedback: "Context Trap! 'Recipient' is a more formal and higher-level word than 'receiver' in this context." },
            { text: "I usually try to consider the acceptor's personality and interests to ensure that the gift is both practical and thoughtful.", score: 40, feedback: "Context Trap! 'Acceptor' is a technical term (like in science); the person getting a gift is the 'recipient'." }
        ]
    },
    {
        q: "30. What kind of gifts do you like to receive?",
        options: [
            { text: "Personally, I appreciate experiential gifts like concert tickets or workshop vouchers, as they create lasting memories.", score: 100, feedback: "Perfect! 'Experiential gifts' and 'lasting memories' are sophisticated collocations." },
            { text: "Personally, I appreciate experiential gifts like concert tickets or workshop vouchers, as they create lasting memorys.", score: 0, feedback: "Grammar Trap! The plural of 'memory' is 'memories'." },
            { text: "Personally, I appreciate experience gifts like concert tickets or workshop vouchers, as they create lasting memories.", score: 50, feedback: "Context Trap! 'Experiential' is the more formal adjective form for this high-level response." },
            { text: "Personally, I appreciate experimental gifts like concert tickets or workshop vouchers, as they create lasting memories.", score: 45, feedback: "Vocabulary Trap! 'Experimental' means a scientific test; 'experiential' refers to an experience." }
        ]
    },
    {
        q: "31. Is it difficult to choose a gift for others?",
        options: [
            { text: "It can be quite daunting, especially if you don't know the person well, as you want to avoid giving something they won't use.", score: 100, feedback: "Excellent! 'Daunting' is a great B2/C1 word for something difficult or intimidating." },
            { text: "It can be quite daunting, especially if you don't know the person well, as you want to avoid giving something they won't uses.", score: 0, feedback: "Grammar Trap! 'Won't' (will not) is followed by the base verb 'use' without an 's'." },
            { text: "It can be quite heavy, especially if you don't know the person well, as you want to avoid giving something they won't use.", score: 50, feedback: "Context Trap! 'Heavy' is for weight; 'daunting' or 'challenging' is for tasks." },
            { text: "It can be quite demanding, especially if you don't know the person well, as you want to avoid giving something they won't use.", score: 45, feedback: "Context Trap! 'Demanding' usually describes a person or a job; 'daunting' fits the difficulty of making a choice." }
        ]
    },
  {
        q: "28. Have you ever sent handmade gifts to others?",
        options: [
            { text: "Yes, I once crafted a personalized photo album for a close friend, which I felt was much more meaningful than a store-bought item.", score: 100, feedback: "Perfect! 'Crafted' and 'meaningful' are high-level and precise." },
            { text: "Yes, I once crafted a personalized photo album for a close friend, which I felt was much more meaningful than a store-bought items.", score: 0, feedback: "Grammar Trap! 'Item' should be singular here because you are comparing the gift to a general category." },
            { text: "Yes, I once made a personalized photo album for a close friend, which I felt was much more significant than a store-bought item.", score: 50, feedback: "Context Trap! While 'significant' is okay, 'meaningful' is the standard high-level word for emotional gifts." },
            { text: "Yes, I once processed a personalized photo album for a close friend, which I felt was much more meaningful than a store-bought item.", score: 40, feedback: "Context Trap! 'Processed' sounds like a factory or a computer; use 'crafted' or 'made' for handmade gifts." }
        ]
    },
{
        q: "29. Have you ever received a great gift?",
        options: [
            { text: "I've received several wonderful gifts, but the most memorable one was a vintage watch from my grandfather, which I cherish deeply.", score: 100, feedback: "Excellent! 'Cherish deeply' and 'vintage' are sophisticated vocabulary choices." },
            { text: "I've received several wonderful gifts, but the most memorable one was a vintage watch from my grandfather, which I cherish deep.", score: 0, feedback: "Grammar Trap! 'Deeply' is the adverb needed to describe how you cherish the gift." },
            { text: "I've received several wonderful gifts, but the most memorable one was an old watch from my grandfather, which I like a lot.", score: 50, feedback: "Context Trap! 'Vintage' and 'cherish deeply' are much stronger than 'old' and 'like a lot'." },
            { text: "I've received several wonderful gifts, but the most memorable one was a vintage watch from my grandfather, which I care deeply.", score: 45, feedback: "Context Trap! You 'care about' something or 'cherish' it; 'care deeply' on its own is incomplete here." }
        ]
    },
    {
        q: "30. What do you consider when choosing a gift?",
        options: [
            { text: "When selecting a gift, I primarily consider the recipient's personal tastes and whether the item will be of practical use to them.", score: 100, feedback: "Perfect! 'Recipient,' 'personal tastes,' and 'practical use' are high-level academic terms." },
            { text: "When selecting a gift, I primarily consider the recipient's personal taste and whether the item will be of practical use to them.", score: 0, feedback: "Grammar Trap! Use the plural 'tastes' when referring to someone's general preferences." },
            { text: "When picking a gift, I mainly think about what the person likes and if they can actually use the thing.", score: 50, feedback: "Context Trap! This is a bit too informal; 'selecting,' 'recipient,' and 'practical use' are better for the exam." },
            { text: "When selecting a gift, I primarily consider the recipient's personal tastes and if the item will be of practice use to them.", score: 45, feedback: "Context Trap! You need the adjective 'practical' here, not the noun 'practice'." }
        ]
    },
    {
        q: "31. Do you think you are good at choosing gifts?",
        options: [
            { text: "I'd like to think so, as I tend to be quite observant and usually manage to find something that resonates with the person's interests.", score: 100, feedback: "Excellent! 'Observant' and 'resonates with' are very natural, high-level expressions." },
            { text: "I'd like to think so, as I tend to be quite observant and usually manage to find something that resonates with the person's interest.", score: 0, feedback: "Grammar Trap! Use the plural 'interests' to refer to the various things a person enjoys." },
            { text: "I think so, because I watch people closely and usually find something they like based on what they do.", score: 50, feedback: "Context Trap! 'Observant' and 'resonates with' are much more sophisticated than 'watch closely'." },
            { text: "I'd like to think so, as I tend to be quite observant and usually manage to find something that vibrates with the person's interests.", score: 40, feedback: "Context Trap! A gift 'resonates' with someone (matches their feelings); it doesn't 'vibrate'." }
        ]
    },
    {
        q: "32. What gift have you received recently?",
        options: [
            { text: "Most recently, a friend gifted me a high-quality leather journal, which is perfect for jotting down my thoughts and observations.", score: 100, feedback: "Great job! 'Jotting down' and 'observations' are fantastic natural collocations." },
            { text: "Most recently, a friend gifted me a high-quality leather journal, which is perfect for jotting down my thoughts and observation.", score: 0, feedback: "Grammar Trap! Use the plural 'observations' here to refer to the multiple things you notice." },
            { text: "Recently, a friend gave me a nice leather notebook, which is great for writing my thoughts and things I see.", score: 50, feedback: "Context Trap! 'Gifted' (as a verb), 'journal,' and 'jotting down' are more advanced than 'gave,' 'notebook,' and 'writing'." },
            { text: "Most recently, a friend gifted me a high-quality leather journal, which is perfect for jotting down my thoughts and sightings.", score: 45, feedback: "Context Trap! 'Sightings' is usually for UFOs or rare animals; use 'observations' for personal thoughts." }
        ]
    },
  {
        q: "33. Do you like reading?",
        options: [
            { text: "Absolutely; I'm an avid reader because I find that books offer a unique way to explore different perspectives.", score: 100, feedback: "Perfect! 'Avid reader' and 'explore different perspectives' are high-level academic phrases." },
            { text: "Absolutely; I'm an avid reader because I find that books offer a unique way to explore different perspective.", score: 0, feedback: "Grammar Trap! 'Perspective' should be plural ('perspectives') when talking about various viewpoints." },
            { text: "Absolutely; I'm an avid reader because I find that books offer a unique way to explore different prospects.", score: 50, feedback: "Context Trap! 'Prospects' refers to future possibilities; 'perspectives' refers to points of view." },
            { text: "Absolutely; I'm an avid reader because I find that books offer a unique way to explore different spectacles.", score: 45, feedback: "Context Trap! 'Spectacles' usually refers to glasses or a visual show; it doesn't fit here." }
        ]
    },
    {
        q: "34. Do you prefer to read on paper or on a screen?",
        options: [
            { text: "I'd opt for paper books because I find the tactile experience more engaging and it reduces digital eye strain.", score: 100, feedback: "Excellent! 'Opt for,' 'tactile experience,' and 'eye strain' are very sophisticated choices." },
            { text: "I'd opt for paper books because I find the tactile experience more engaging and it reduces digital eye strains.", score: 0, feedback: "Grammar Trap! 'Eye strain' is generally uncountable here; 'strains' is incorrect in this context." },
            { text: "I'd choose paper books because I like the feeling of the pages and it's better for my eyes than a screen.", score: 50, feedback: "Context Trap! While correct, 'tactile experience' and 'digital eye strain' are much higher-level terms." },
            { text: "I'd opt for paper books because I find the tactical experience more engaging and it reduces digital eye strain.", score: 40, feedback: "Vocabulary Trap! 'Tactical' relates to strategy (like in a game); 'tactile' relates to the sense of touch." }
        ]
    },
    {
        q: "35. When do you need to read carefully, and when not?",
        options: [
            { text: "I read meticulously when dealing with legal documents or academic texts, whereas I tend to skim through news articles for the gist.", score: 100, feedback: "Perfect! 'Meticulously,' 'skim through,' and 'for the gist' are top-tier IELTS vocabulary." },
            { text: "I read meticulously when dealing with legal documents or academic texts, whereas I tend to skim through news articles for the gists.", score: 0, feedback: "Grammar Trap! 'Gist' (the main point) is an uncountable singular noun; 'gists' is wrong." },
            { text: "I read very slowly when I have important papers, but I read fast when I'm just looking at the news.", score: 50, feedback: "Context Trap! 'Meticulously' and 'skim through' are much more precise than 'slowly' and 'fast'." },
            { text: "I read meticulously when dealing with legal documents or academic texts, whereas I tend to skip through news articles for the gist.", score: 45, feedback: "Context Trap! 'Skip' means to miss parts entirely; 'skim' means to read quickly for the main idea." }
        ]
    },
    {
        q: "36. Do you prefer scanning or detailed reading?",
        options: [
            { text: "It largely depends on the objective; I utilize scanning to locate specific information quickly, but I prefer detailed reading for deep comprehension.", score: 100, feedback: "Excellent! 'Utilize,' 'locate specific information,' and 'deep comprehension' are C1-level phrases." },
            { text: "It largely depends on the objective; I utilize scanning to locate specific information quickly, but I prefer detailed reading for deep comprehensions.", score: 0, feedback: "Grammar Trap! 'Comprehension' (understanding) is uncountable and should not be plural here." },
            { text: "It depends on why I am reading; I use scanning to find facts, but I like detailed reading to understand everything.", score: 50, feedback: "Context Trap! 'Utilize' and 'deep comprehension' are much stronger than 'use' and 'understand everything'." },
            { text: "It largely depends on the objective; I utilize scanning to local specific information quickly, but I prefer detailed reading for deep comprehension.", score: 40, feedback: "Vocabulary Trap! 'Local' is a place; 'locate' is the verb meaning to find." }
        ]
    },
  {
        q: "37. Do you walk a lot?",
        options: [
            { text: "I try to incorporate walking into my daily routine as much as possible, as it's a great way to stay active and clear my head.", score: 100, feedback: "Perfect! 'Incorporate into my daily routine' and 'clear my head' are very natural high-level collocations." },
            { text: "I try to incorporate walking into my daily routine as much as possible, as it's a great way to stay active and clear my heads.", score: 0, feedback: "Grammar Trap! The idiom is 'clear my head' (singular); you only have one head!" },
            { text: "I try to put walking in my daily routine as much as possible, as it's a good way to be active and clean my head.", score: 50, feedback: "Context Trap! 'Incorporate' and 'clear my head' are much more sophisticated than 'put' and 'clean my head'." },
            { text: "I try to incorporate walking into my daily routine as much as possible, as it's a great way to stay activity and clear my head.", score: 45, feedback: "Grammar Trap! You need the adjective 'active' here, not the noun 'activity'." }
        ]
    },
    {
        q: "38. Did you often go outside to have a walk when you were a child?",
        options: [
            { text: "Yes, I vividly remember wandering through the local park with my parents, which was a highlight of my weekends back then.", score: 100, feedback: "Excellent! 'Vividly remember' and 'highlight of my weekends' are great for describing childhood memories." },
            { text: "Yes, I vividly remember wandering through the local park with my parents, which was a highlight of my weekends back there.", score: 0, feedback: "Grammar Trap! Use 'back then' for time; 'back there' refers to a physical location." },
            { text: "Yes, I clearly remember walking in the local park with my parents, which was the best part of my weekends back then.", score: 50, feedback: "Context Trap! 'Vividly remember' and 'wandering' are more descriptive and higher-level than 'clearly remember' and 'walking'." },
            { text: "Yes, I vividly remember wondering through the local park with my parents, which was a highlight of my weekends back then.", score: 45, feedback: "Vocabulary Trap! 'Wondering' means thinking/doubting; 'wandering' means walking around aimlessly." }
        ]
    },
    {
        q: "39. Why do people like to walk in parks?",
        options: [
            { text: "I believe people enjoy walking in parks because the lush greenery and tranquil environment offer a welcome escape from the hustle and bustle of city life.", score: 100, feedback: "Perfect! 'Tranquil environment' and 'hustle and bustle' are top-tier IELTS descriptors." },
            { text: "I believe people enjoy walking in parks because the lush greenery and tranquil environment offer a welcome escape from the hustle and bustle of city lives.", score: 0, feedback: "Grammar Trap! 'City life' is a general concept and should be singular here." },
            { text: "I think people like walking in parks because the trees and quiet area give them a break from the busy city.", score: 50, feedback: "Context Trap! 'Lush greenery' and 'hustle and bustle' are much more sophisticated than 'trees' and 'busy city'." },
            { text: "I believe people enjoy walking in parks because the lush greenery and tranquil environment offer a welcome escape from the hustle and muscle of city life.", score: 40, feedback: "Vocabulary Trap! The idiom is 'hustle and bustle'; 'hustle and muscle' isn't a standard phrase for city life." }
        ]
    },
    {
        q: "40. Where would you like to take a long walk if you had the chance?",
        options: [
            { text: "If I had the opportunity, I'd love to go for a long trek through the Scottish Highlands to admire the rugged landscapes.", score: 100, feedback: "Excellent! 'Opportunity,' 'trek,' and 'rugged landscapes' are high-level and precise." },
            { text: "If I had the opportunity, I'd love to go for a long trek through the Scottish Highlands to admire the rugged landscape.", score: 0, feedback: "Grammar Trap! Use the plural 'landscapes' when referring to the broad scenery of a region." },
            { text: "If I had the chance, I'd love to take a long walk in the mountains of Scotland to see the beautiful views.", score: 50, feedback: "Context Trap! 'Opportunity,' 'trek,' and 'rugged' are much more sophisticated than 'chance,' 'walk,' and 'beautiful'." },
            { text: "If I had the opportunity, I'd love to go for a long track through the Scottish Highlands to admire the rugged landscapes.", score: 45, feedback: "Vocabulary Trap! A 'trek' is a long journey on foot; a 'track' is a path or a song." }
        ]
    },
  {
        q: "41. Where did you go for a walk lately?",
        options: [
            { text: "I recently took a stroll through a nearby nature reserve, which was incredibly refreshing after a long week of work.", score: 100, feedback: "Perfect! 'Took a stroll' and 'nature reserve' are excellent high-level choices." },
            { text: "I recently took a stroll through a nearby nature reserve, which was incredibly refreshing after a long week of works.", score: 0, feedback: "Grammar Trap! 'Work' is uncountable here; adding an 's' makes it incorrect." },
            { text: "I recently took a walk through a nearby nature preserve, which was incredibly refreshing after a long week of work.", score: 50, feedback: "Context Trap! While 'preserve' works, 'nature reserve' is the more common and natural collocation." },
            { text: "I recently took a stroll through a nearby nature area, which was incredibly refreshing after a long week of work.", score: 45, feedback: "Context Trap! 'Nature area' is a bit vague; 'nature reserve' or 'park' is more precise." }
        ]
    },
    {
        q: "42. Do you prefer typing or handwriting?",
        options: [
            { text: "I definitely prefer typing for professional tasks due to its efficiency, though I find handwriting more personal for journals.", score: 100, feedback: "Excellent! 'Professional tasks' and 'efficiency' are very sophisticated choices." },
            { text: "I definitely prefer typing for professional tasks due to its efficiency, though I find handwriting more personally for journals.", score: 0, feedback: "Grammar Trap! You need the adjective 'personal' to describe handwriting, not the adverb 'personally'." },
            { text: "I definitely prefer typing for work because it's much faster, but I still like writing by hand for my diary.", score: 50, feedback: "Context Trap! While correct, 'professional tasks' and 'efficiency' are higher-level than 'work' and 'faster'." },
            { text: "I definitely prefer typing for professional tasks due to its efficacy, though I find handwriting more personal for journals.", score: 45, feedback: "Vocabulary Trap! 'Efficacy' is usually for the effectiveness of medicine; 'efficiency' is for speed and productivity." }
        ]
    },
    {
        q: "43. Do you type on a desktop or laptop keyboard every day?",
        options: [
            { text: "I primarily utilize a laptop keyboard as it allows me to work remotely from various locations, which I find highly convenient.", score: 100, feedback: "Perfect! 'Primarily utilize' and 'work remotely' are top-tier IELTS academic phrases." },
            { text: "I primarily utilize a laptop keyboard as it allows me to work remotely from various locations, which I find highly conveniently.", score: 0, feedback: "Grammar Trap! You need the adjective 'convenient' after 'find [something],' not the adverb 'conveniently'." },
            { text: "I mostly use a laptop keyboard because I can work in different places, which is very helpful for me.", score: 50, feedback: "Context Trap! 'Primarily utilize' and 'highly convenient' are much stronger than 'mostly use' and 'very helpful'." },
            { text: "I primarily utilize a laptop keyboard as it allows me to work remotely from various locations, which I find highly conventional.", score: 40, feedback: "Vocabulary Trap! 'Conventional' means traditional or ordinary; 'convenient' means easy/useful." }
        ]
    },
    {
        q: "44. When did you learn how to type on a keyboard?",
        options: [
            { text: "I acquired this skill during my early teenage years, primarily through online tutorials and consistent practice at home.", score: 100, feedback: "Excellent! 'Acquired this skill' and 'consistent practice' are very natural, high-level expressions." },
            { text: "I acquired this skill during my early teenage years, primarily through online tutorials and consistent practices at home.", score: 0, feedback: "Grammar Trap! 'Practice' is uncountable in this context; 'practices' usually refers to professional businesses (like a doctor's practice)." },
            { text: "I learned how to type when I was a teenager by using the internet and practicing a lot at home.", score: 50, feedback: "Context Trap! 'Acquired this skill' and 'online tutorials' are more sophisticated than 'learned' and 'using the internet'." },
            { text: "I achieved this skill during my early teenage years, primarily through online tutorials and consistent practice at home.", score: 45, feedback: "Context Trap! You 'acquire' a skill over time; you 'achieve' a specific goal or result." }
        ]
    },
  {
        q: "45. How do you improve your typing?",
        options: [
            { text: "I've enhanced my typing speed and accuracy by utilizing specialized software that offers interactive drills and real-time feedback.", score: 100, feedback: "Perfect! 'Enhanced,' 'speed and accuracy,' and 'interactive drills' are great C1 terms." },
            { text: "I've enhanced my typing speed and accuracy by utilizing specialized software that offers interactive drill and real-time feedback.", score: 0, feedback: "Grammar Trap! Use the plural 'drills' when referring to multiple practice exercises." },
            { text: "I've made my typing better by using a computer program that has games and tells me when I make mistakes.", score: 50, feedback: "Context Trap! 'Utilizing specialized software' and 'real-time feedback' are much more academic." },
            { text: "I've enhanced my typing speed and accuracy by using specialized software that offers interactive drills and real-time feedbacks.", score: 45, feedback: "Grammar Trap! 'Feedback' is uncountable; it does not take an 's'." }
        ]
    },
  {
        q: "46. Do you look out the window at the scenery when travelling by bus or car?",
        options: [
            { text: "Absolutely; I find it quite therapeutic to gaze at the passing landscapes, as it allows my mind to wander and relax.", score: 100, feedback: "Excellent! 'Therapeutic,' 'gaze at,' and 'passing landscapes' are sophisticated descriptors." },
            { text: "Absolutely; I find it quite therapeutic to gaze at the passing landscapes, as it allows my mind to wonder and relax.", score: 0, feedback: "Vocabulary Trap! 'Wonder' means to think/question; 'wander' means to move aimlessly (like thoughts)." },
            { text: "Absolutely; I love looking at the views from the window because it helps me feel calm and think about things.", score: 50, feedback: "Context Trap! 'Therapeutic' and 'passing landscapes' are much more expressive than 'looking at views' and 'feel calm'." },
            { text: "Absolutely; I find it quite therapy to gaze at the passing landscapes, as it allows my mind to wander and relax.", score: 45, feedback: "Grammar Trap! You need the adjective 'therapeutic' after 'find it,' not the noun 'therapy'." }
        ]
    },
    {
        q: "47. Do you prefer the mountains or the sea?",
        options: [
            { text: "I'm more inclined toward the mountains, as I find the rugged terrain and crisp air much more invigorating than the coast.", score: 100, feedback: "Perfect! 'Inclined toward,' 'rugged terrain,' and 'invigorating' are top-tier collocations." },
            { text: "I'm more inclined toward the mountains, as I find the rugged terrains and crisp air much more invigorating than the coast.", score: 0, feedback: "Grammar Trap! 'Terrain' is generally uncountable here; 'terrains' is incorrect in this context." },
            { text: "I like the mountains more because the rocky ground and fresh air make me feel more awake than the beach.", score: 50, feedback: "Context Trap! 'Rugged terrain' and 'invigorating' are more precise and higher-level than 'rocky ground' and 'awake'." },
            { text: "I'm more inclined toward the mountains, as I find the rugged terrain and crisp air much more invigorated than the coast.", score: 45, feedback: "Grammar Trap! Use 'invigorating' to describe the effect of the mountains; 'invigorated' describes how you feel." }
        ]
    },
    {
        q: "48. Do you like to take scenery pictures?",
        options: [
            { text: "Yes, I'm quite keen on landscape photography as it allows me to capture the essence of a place and preserve memories of my travels.", score: 100, feedback: "Excellent! 'Keen on,' 'landscape photography,' and 'capture the essence' are sophisticated academic phrases." },
            { text: "Yes, I'm quite keen on landscape photography as it allows me to capture the essence of a place and preserve memory of my travels.", score: 0, feedback: "Grammar Trap! Use the plural 'memories' to refer to the collection of past experiences." },
            { text: "Yes, I like taking pictures of nature because I can remember the places I visited and the things I saw.", score: 50, feedback: "Context Trap! 'Keen on landscape photography' and 'capture the essence' are much stronger than 'like taking pictures'." },
            { text: "Yes, I'm quite keen on landscape photography as it allows me to capture the essences of a place and preserve memories of my travels.", score: 45, feedback: "Context Trap! 'Essence' (the core nature of a place) is usually singular in this context." }
        ]
    },
    {
        q: "49. What are the most beautiful sights you have seen while traveling?",
        options: [
            { text: "The most breath-taking sight I've witnessed was the sunrise over the Grand Canyon; the vibrant colors were truly awe-inspiring.", score: 100, feedback: "Perfect! 'Breath-taking,' 'witnessed,' and 'awe-inspiring' are fantastic C1-level descriptors." },
            { text: "The most breath-taking sight I've witnessed was the sunrise over the Grand Canyon; the vibrant colors were truly awe-inspire.", score: 0, feedback: "Grammar Trap! You need the adjective 'awe-inspiring' after 'were,' not the verb 'awe-inspire'." },
            { text: "The most beautiful thing I saw was the sun coming up at the Grand Canyon; the bright colors were very amazing.", score: 50, feedback: "Context Trap! 'Breath-taking,' 'witnessed,' and 'awe-inspiring' are much more powerful than 'beautiful,' 'saw,' and 'amazing'." },
            { text: "The most breath-taking sight I've witnessed was the sunrise over the Grand Canyon; the vibrant colors were truly awe-inspired.", score: 45, feedback: "Context Trap! 'Awe-inspiring' describes the sunrise; 'awe-inspired' would describe how you felt watching it." }
        ]
    },
  {
        q: "50. Are there tall buildings near your home?",
        options: [
            { text: "Actually, my neighborhood is primarily residential with low-rise houses, though there are a few high-rise apartments on the outskirts.", score: 100, feedback: "Perfect! 'Primarily residential,' 'low-rise,' and 'outskirts' are sophisticated architectural descriptors." },
            { text: "Actually, my neighborhood is primarily residential with low-rise houses, though there are a few high-rise apartments on the outskirt.", score: 0, feedback: "Grammar Trap! 'Outskirts' is always used in the plural form when referring to the edge of a city." },
            { text: "Actually, my area has mostly small houses, but there are some very tall buildings further away from the center.", score: 50, feedback: "Context Trap! 'Primarily residential' and 'high-rise' are much higher-level than 'small houses' and 'tall buildings'." },
            { text: "Actually, my neighborhood is primarily residential with low-rise houses, though there are a few high-rise apartments in the outskirts.", score: 45, feedback: "Grammar Trap! The correct preposition is 'on the outskirts,' not 'in'." }
        ]
    },
    {
        q: "51. Do you take photos of buildings?",
        options: [
            { text: "Occasionally; I'm often struck by unique architectural designs and try to capture them if the lighting is particularly favorable.", score: 100, feedback: "Excellent! 'Struck by,' 'architectural designs,' and 'favorable' are high-level choices." },
            { text: "Occasionally; I'm often struck by unique architectural designs and try to capture them if the lighting is particularly favorably.", score: 0, feedback: "Grammar Trap! You need the adjective 'favorable' to describe the lighting, not the adverb 'favorably'." },
            { text: "Sometimes; I like to take pictures of interesting buildings when the sun looks good and makes them look nice.", score: 50, feedback: "Context Trap! 'Struck by unique architectural designs' is much more expressive than 'interesting buildings'." },
            { text: "Occasionally; I'm often stroke by unique architectural designs and try to capture them if the lighting is particularly favorable.", score: 40, feedback: "Vocabulary Trap! 'Struck' is the past participle of strike; 'stroke' is a different word entirely." }
        ]
    },
    {
        q: "52. Is there a building that you would like to visit?",
        options: [
            { text: "I've always been fascinated by the Sagrada Familia in Barcelona and would love to witness its intricate craftsmanship in person.", score: 100, feedback: "Perfect! 'Fascinated by,' 'witness,' and 'intricate craftsmanship' are top-tier descriptors." },
            { text: "I've always been fascinated by the Sagrada Familia in Barcelona and would love to witness its intricate craftsmanships in person.", score: 0, feedback: "Grammar Trap! 'Craftsmanship' is an uncountable noun; it should not be plural." },
            { text: "I really want to go to the Sagrada Familia because I want to see the detailed work and how beautiful it is.", score: 50, feedback: "Context Trap! 'Intricate craftsmanship' and 'witness' are much more sophisticated than 'detailed work' and 'see'." },
            { text: "I've always been fascinated by the Sagrada Familia in Barcelona and would love to witness its internal craftsmanship in person.", score: 45, feedback: "Context Trap! 'Intricate' (detailed/complex) is the better word for architecture than 'internal'." }
        ]
    },
    {
        q: "53. Do you want to live in a tall building?",
        options: [
            { text: "I'm somewhat indifferent, although living on a higher floor would certainly offer a more spectacular view of the city skyline.", score: 100, feedback: "Excellent! 'Indifferent,' 'spectacular view,' and 'city skyline' are great C1-level phrases." },
            { text: "I'm somewhat indifferent, although living on a higher floor would certainly offer a more spectacular views of the city skyline.", score: 0, feedback: "Grammar Trap! Use the singular 'view' when referring to the specific scene from a window." },
            { text: "I don't really care, but living high up would give me a really great look at the city and the buildings.", score: 50, feedback: "Context Trap! 'Indifferent' and 'spectacular view' are much stronger than 'don't really care' and 'great look'." },
            { text: "I'm somewhat indifferent, although living on a higher floor would certainly offer a more spectacle view of the city skyline.", score: 40, feedback: "Grammar Trap! You need the adjective 'spectacular' here, not the noun 'spectacle'." }
        ]
    },
  {
        q: "54. What are your favourite activities?",
        options: [
            { text: "I'm quite passionate about outdoor pursuits like hiking and cycling, as they allow me to reconnect with nature and stay physically fit.", score: 100, feedback: "Perfect! 'Passionate about,' 'outdoor pursuits,' and 'reconnect with nature' are high-level collocations." },
            { text: "I'm quite passionate about outdoor pursuits like hiking and cycling, as they allow me to reconnect with nature and stay physically fits.", score: 0, feedback: "Grammar Trap! 'Fit' is an adjective here and should not be plural." },
            { text: "I really like doing things outside like walking and riding a bike because I can see nature and get some exercise.", score: 50, feedback: "Context Trap! 'Passionate about' and 'outdoor pursuits' are much more sophisticated than 'really like' and 'doing things'." },
            { text: "I'm quite passionate about outdoor pursuits like hiking and cycling, as they allow me to reconnect with nature and stay physical fit.", score: 45, feedback: "Grammar Trap! You need the adverb 'physically' to modify the adjective 'fit'." }
        ]
    },
    {
        q: "55. What were your favourite activities when you were a child?",
        options: [
            { text: "As a youngster, I was particularly fond of imaginative play and spent countless hours creating elaborate stories with my action figures.", score: 100, feedback: "Excellent! 'Particularly fond of,' 'imaginative play,' and 'elaborate' are very sophisticated choices." },
            { text: "As a youngster, I was particularly fond of imaginative play and spent countless hours creating elaborate stories with my action figure.", score: 0, feedback: "Grammar Trap! 'Action figures' should be plural to suggest you played with more than one." },
            { text: "When I was a kid, I liked playing with my toys a lot and making up stories about them for a long time.", score: 50, feedback: "Context Trap! 'Youngster,' 'imaginative play,' and 'elaborate' are higher-level than 'kid' and 'making up stories'." },
            { text: "As a youngster, I was particularly fond of imaginary play and spent countless hours creating elaborate stories with my action figures.", score: 45, feedback: "Vocabulary Trap! 'Imaginative' describes the person/activity; 'imaginary' means something that isn't real (like an imaginary friend)." }
        ]
    },
    {
        q: "56. Did you prefer to do activities alone or with a group of people when you were a child?",
        options: [
            { text: "I generally preferred group activities, as I enjoyed the camaraderie and the opportunity to develop social skills through collaborative play.", score: 100, feedback: "Perfect! 'Camaraderie,' 'social skills,' and 'collaborative play' are top-tier IELTS academic terms." },
            { text: "I generally preferred group activities, as I enjoyed the camaraderie and the opportunity to develop social skills through collaborative plays.", score: 0, feedback: "Grammar Trap! 'Play' is uncountable in this context; 'plays' refers to theatrical performances." },
            { text: "I mostly liked playing with other kids because it was fun to be with friends and learn how to talk to people.", score: 50, feedback: "Context Trap! 'Camaraderie' and 'collaborative play' are much stronger than 'fun' and 'playing with other kids'." },
            { text: "I generally preferred group activities, as I enjoyed the camaraderie and the opportunity to develop social skill through collaborative play.", score: 45, feedback: "Grammar Trap! 'Social skills' is almost always plural when referring to the set of abilities." }
        ]
    },
    {
        q: "57. Are there any differences between the activities you liked when you were a child and those you like now?",
        options: [
            { text: "Decidedly so; while I once enjoyed high-energy games, my preferences have evolved toward more tranquil and intellectually stimulating pastimes.", score: 100, feedback: "Excellent! 'Decidedly so,' 'evolved toward,' and 'intellectually stimulating' are fantastic C1-level phrases." },
            { text: "Decidedly so; while I once enjoyed high-energy games, my preferences have evolved toward more tranquil and intellectually stimulating pastime.", score: 0, feedback: "Grammar Trap! Use the plural 'pastimes' to refer to your various hobbies." },
            { text: "Yes, they are different; I used to like running around, but now I like quiet things that make me think more.", score: 50, feedback: "Context Trap! 'Evolved toward' and 'tranquil' are more precise and higher-level than 'different' and 'quiet'." },
            { text: "Decidedly so; while I once enjoyed high-energy games, my preferences have evolved toward more tranquil and intellectually stimulated pastimes.", score: 45, feedback: "Grammar Trap! Use 'stimulating' to describe the activities; 'stimulated' describes how you feel." }
        ]
    },
  {
        q: "58. Do you like taking pictures of different views?",
        options: [
            { text: "I'm quite enthusiastic about capturing diverse landscapes, as photography allows me to preserve the unique beauty of every location I visit.", score: 100, feedback: "Perfect! 'Enthusiastic about,' 'diverse landscapes,' and 'preserve the unique beauty' are high-level academic phrases." },
            { text: "I'm quite enthusiastic about capturing diverse landscapes, as photography allows me to preserve the unique beauty of every locations I visit.", score: 0, feedback: "Grammar Trap! 'Every' must be followed by a singular noun, so it should be 'location' instead of 'locations'." },
            { text: "I really like taking photos of many views because it helps me remember how beautiful the places were when I went there.", score: 50, feedback: "Context Trap! 'Enthusiastic about' and 'capturing diverse landscapes' are much more sophisticated than 'really like' and 'taking photos'." },
            { text: "I'm quite enthusiastic about capturing diverse landscapes, as photography allows me to preserve the unique beauty of every location I visiting.", score: 45, feedback: "Grammar Trap! You need the present simple 'visit' here, not the participle 'visiting'." }
        ]
    },
    {
        q: "59. Do you prefer views in urban areas or rural areas?",
        options: [
            { text: "I'm generally more drawn to rural vistas, as the tranquility of the countryside provides a refreshing contrast to the hectic pace of city life.", score: 100, feedback: "Excellent! 'Drawn to,' 'rural vistas,' and 'hectic pace' are very sophisticated choices." },
            { text: "I'm generally more drawn to rural vistas, as the tranquility of the countryside provides a refreshing contrast to the hectic paces of city life.", score: 0, feedback: "Grammar Trap! 'Pace' is uncountable in this context and should be singular." },
            { text: "I usually like looking at the countryside more because it is quiet and very different from the busy city where I live.", score: 50, feedback: "Context Trap! 'Rural vistas' and 'tranquility' are much higher-level than 'countryside' and 'quiet'." },
            { text: "I'm generally more drawn to rural vistas, as the tranquility of the countryside provides a refreshing contrast to the hectic pace of city lives.", score: 45, feedback: "Grammar Trap! 'City life' is a general concept and should be singular here." }
        ]
    },
    {
        q: "60. Do you prefer views in your own country or in other countries?",
        options: [
            { text: "I appreciate both, but I find foreign landscapes particularly captivating because they offer a glimpse into different geographical features and cultures.", score: 100, feedback: "Perfect! 'Foreign landscapes,' 'captivating,' and 'glimpse into' are top-tier IELTS descriptors." },
            { text: "I appreciate both, but I find foreign landscapes particularly captivating because they offer a glimpse into different geographical feature and cultures.", score: 0, feedback: "Grammar Trap! Use the plural 'features' to refer to the various characteristics of the land." },
            { text: "I like both, but I think other countries have very interesting views because the nature and the people are so different.", score: 50, feedback: "Context Trap! 'Captivating' and 'geographical features' are much more precise than 'interesting' and 'nature'." },
            { text: "I appreciate both, but I find foreign landscapes particularly captivating because they offer a glimpse into different geographic features and cultures.", score: 45, feedback: "Context Trap! 'Geographical' is the more common adjective used to describe features of the earth." }
        ]
    },
    {
        q: "61. Have you seen an unforgettable and beautiful view or scenery?",
        options: [
            { text: "One of the most awe-inspiring sights I've ever witnessed was a sunset over the Himalayas; the colors were truly magnificent.", score: 100, feedback: "Excellent! 'Awe-inspiring,' 'witnessed,' and 'magnificent' are fantastic C1-level phrases." },
            { text: "One of the most awe-inspiring sights I've ever witnessed was a sunset over the Himalayas; the colors were truly magnificently.", score: 0, feedback: "Grammar Trap! You need the adjective 'magnificent' after 'were,' not the adverb 'magnificently'." },
            { text: "I saw a very beautiful sunset in the mountains once and it was so great that I will never forget how it looked.", score: 50, feedback: "Context Trap! 'Awe-inspiring' and 'witnessed' are much more powerful than 'beautiful' and 'saw'." },
            { text: "One of the most awe-inspiring sights I've ever witnessed was a sunset over the Himalayas; the colors were truly majestic.", score: 45, feedback: "Context Trap! While 'majestic' is good, 'magnificent' is a slightly stronger collocation for the colors of a sunset." }
        ]
    },
  {
        q: "62. What did you often do with your friends in your childhood?",
        options: [
            { text: "We frequently engaged in outdoor sports and traditional games, which fostered a strong sense of community and teamwork from a young age.", score: 100, feedback: "Perfect! 'Engaged in,' 'fostered a strong sense of community,' and 'teamwork' are excellent high-level collocations." },
            { text: "We frequently engaged in outdoor sports and traditional games, which fostered a strong sense of community and teamwork from a young ages.", score: 0, feedback: "Grammar Trap! 'Age' should be singular here when referring to a general period of life." },
            { text: "We often played outside and did traditional games together, which helped us feel like a group and work together well.", score: 50, feedback: "Context Trap! 'Engaged in' and 'fostered' are much more sophisticated than 'played' and 'helped'." },
            { text: "We frequently engaged in outdoor sports and traditional games, which fostered a strong sense of community and teamworks from a young age.", score: 45, feedback: "Grammar Trap! 'Teamwork' is an uncountable noun and should not be plural." }
        ]
    },
    {
        q: "63. What do you think is the most important at the moment?",
        options: [
            { text: "Currently, I believe that achieving a healthy work-life balance is paramount, as it's essential for long-term well-being and productivity.", score: 100, feedback: "Excellent! 'Paramount,' 'well-being,' and 'productivity' are top-tier academic choices." },
            { text: "Currently, I believe that achieving a healthy work-life balance is paramount, as it's essential for long-term well-beings and productivity.", score: 0, feedback: "Grammar Trap! 'Well-being' is an uncountable noun and does not take an 's'." },
            { text: "Right now, I think having a good balance between work and life is the most important thing for being happy and doing good work.", score: 50, feedback: "Context Trap! 'Paramount' and 'productivity' are much stronger and more precise than 'most important thing' and 'doing good work'." },
            { text: "Currently, I believe that achieving a healthy work-life balance is paramount, as it's essential for long-term well-being and productivities.", score: 45, feedback: "Grammar Trap! 'Productivity' is uncountable in this context; 'productivities' is incorrect." }
        ]
    },
    {
        q: "64. Do you have any plans for the next five years?",
        options: [
            { text: "Over the next five years, I aspire to further my education and gain international experience to broaden my professional horizons.", score: 100, feedback: "Perfect! 'Aspire to,' 'further my education,' and 'broaden my professional horizons' are high-level goal-oriented phrases." },
            { text: "Over the next five years, I aspire to further my education and gain international experience to broaden my professional horizon.", score: 0, feedback: "Grammar Trap! The idiom is to 'broaden one's horizons' (plural)." },
            { text: "In the next five years, I want to keep studying and work in different countries to help my career grow.", score: 50, feedback: "Context Trap! 'Aspire to' and 'professional horizons' are much more sophisticated than 'want to' and 'help my career grow'." },
            { text: "Over the next five years, I aspire to further my education and gain international experience to broad my professional horizons.", score: 45, feedback: "Grammar Trap! You need the verb 'broaden' here, not the adjective 'broad'." }
        ]
    },
  {
        q: "65. How do people remember each stage of their lives?",
        options: [
            { text: "Most people rely on photographs and keepsakes to preserve memories, as these tangible items often evoke strong nostalgia.", score: 100, feedback: "Perfect! 'Tangible items' and 'evoke strong nostalgia' are excellent high-level choices." },
            { text: "Most people rely on photographs and keepsakes to preserve memories, as these tangible items often evoke strong nostalgias.", score: 0, feedback: "Grammar Trap! 'Nostalgia' is an uncountable noun; it should not be plural." },
            { text: "Most people rely on photographs and keepsakes to keep memories, as these tangible items often bring strong nostalgia.", score: 50, feedback: "Context Trap! 'Preserve' and 'evoke' are much more sophisticated than 'keep' and 'bring'." },
            { text: "Most people rely on photographs and keepsakes to preserve memories, as these tangible items often cause strong nostalgia.", score: 45, feedback: "Context Trap! We use 'evoke' for feelings and memories; 'cause' is usually for negative effects." }
        ]
    },
    {
        q: "66. Do you enjoy being the age you are now?",
        options: [
            { text: "I genuinely appreciate my current age because I've attained a level of maturity that allows me to navigate life's challenges more effectively.", score: 100, feedback: "Excellent! 'Attained a level of maturity' and 'navigate life's challenges' are C1-level expressions." },
            { text: "I genuinely appreciate my current age because I've attained a level of maturity that allows me to navigate life's challenge more effectively.", score: 0, feedback: "Grammar Trap! Use the plural 'challenges' when referring to the various difficulties in life." },
            { text: "I genuinely appreciate my current age because I've reached a level of maturity that allows me to handle life's challenges more effectively.", score: 50, feedback: "Context Trap! 'Attained' and 'navigate' are higher-level alternatives to 'reached' and 'handle'." },
            { text: "I genuinely appreciate my current age because I've attained a level of maturity that allows me to move life's challenges more effectively.", score: 40, feedback: "Context Trap! You 'navigate' or 'face' challenges, you don't 'move' them." }
        ]
    },
    {
        q: "67. At what age do you think people are the happiest?",
        options: [
            { text: "I believe happiness is subjective, but many people seem to find contentment in their 30s when they have established a stable career and personal life.", score: 100, feedback: "Perfect! 'Subjective,' 'contentment,' and 'established a stable career' are fantastic descriptors." },
            { text: "I believe happiness is subjective, but many people seem to find contentment in their 30s when they have established a stable careers and personal life.", score: 0, feedback: "Grammar Trap! 'Career' should be singular here as a general concept." },
            { text: "I believe happiness is personal, but many people seem to find happiness in their 30s when they have made a stable career and personal life.", score: 50, feedback: "Context Trap! 'Subjective' and 'established' are much more academic than 'personal' and 'made'." },
            { text: "I believe happiness is subjective, but many people seem to find contentment in their 30s when they have fixed a stable career and personal life.", score: 45, feedback: "Context Trap! You 'establish' or 'build' a career; you 'fix' things that are broken." }
        ]
    },
  {
        q: "68. What subjects are you studying?",
        options: [
            { text: "I'm currently pursuing a degree in Computer Science, with a particular focus on artificial intelligence and machine learning.", score: 100, feedback: "Perfect! 'Pursuing a degree' and 'particular focus on' are excellent high-level academic phrases." },
            { text: "I'm currently pursuing a degree in Computer Science, with a particular focus on artificial intelligence and machine learnings.", score: 0, feedback: "Grammar Trap! 'Learning' is an uncountable concept in this context; it should not be plural." },
            { text: "I am studying Computer Science right now, and I am mostly learning about AI and how computers learn things.", score: 50, feedback: "Context Trap! 'Pursuing a degree' and 'artificial intelligence' are much more professional for the exam." },
            { text: "I'm currently pursuing a degree in Computer Science, with a particular focus on artificial intelligence and machine learned.", score: 45, feedback: "Grammar Trap! You need the gerund 'learning' to describe the field of study." }
        ]
    },
    {
        q: "69. Do you like your subject?",
        options: [
            { text: "I find it incredibly stimulating; the field is constantly evolving, which keeps me engaged and motivated to learn more.", score: 100, feedback: "Excellent! 'Stimulating,' 'constantly evolving,' and 'engaged' are top-tier descriptors." },
            { text: "I find it incredibly stimulating; the field is constantly evolving, which keeps me engaged and motivated to learn mores.", score: 0, feedback: "Grammar Trap! 'More' is an adverb here and cannot be made plural." },
            { text: "I like it a lot because it changes all the time and that makes me want to keep studying and find out new things.", score: 50, feedback: "Context Trap! 'Stimulating' and 'constantly evolving' are much higher-level than 'like it a lot' and 'changes all the time'." },
            { text: "I find it incredibly stimulated; the field is constantly evolving, which keeps me engaged and motivated to learn more.", score: 45, feedback: "Grammar Trap! Use 'stimulating' to describe the subject; 'stimulated' describes how you feel." }
        ]
    },
    {
        q: "70. Why did you choose to study that subject?",
        options: [
            { text: "I've always been drawn to problem-solving, and I believe this field offers the best opportunity to develop innovative solutions for real-world issues.", score: 100, feedback: "Perfect! 'Drawn to,' 'innovative solutions,' and 'real-world issues' are fantastic academic choices." },
            { text: "I've always been drawn to problem-solving, and I believe this field offers the best opportunity to develop innovative solutions for real-world issue.", score: 0, feedback: "Grammar Trap! Use the plural 'issues' to refer to the various problems in the world." },
            { text: "I chose it because I like fixing problems and I think this job will help me make new things that people can use.", score: 50, feedback: "Context Trap! 'Drawn to' and 'innovative solutions' are more sophisticated than 'chose it' and 'make new things'." },
            { text: "I've always been drawn to problem-solving, and I believe this field offers the best opportunity to develop innovation solutions for real-world issues.", score: 45, feedback: "Grammar Trap! You need the adjective 'innovative' to describe solutions, not the noun 'innovation'." }
        ]
    },
    {
        q: "71. Do you think that your subject is popular in your country?",
        options: [
            { text: "Undoubtedly; there's a significant demand for professionals in this sector, which has led to a surge in students enrolling in related courses.", score: 100, feedback: "Excellent! 'Significant demand,' 'surge,' and 'enrolling' are very sophisticated vocabulary choices." },
            { text: "Undoubtedly; there's a significant demand for professionals in this sector, which has led to a surge in students enrolling in related course.", score: 0, feedback: "Grammar Trap! Use the plural 'courses' when referring to the various classes available." },
            { text: "Yes, many people want to do this job, so lots of students are starting to study it in school and university.", score: 50, feedback: "Context Trap! 'Significant demand' and 'surge' are much stronger than 'many people want' and 'lots of students'." },
            { text: "Undoubtedly; there's a significant demand for professionals in this sector, which has led to a surge in students enrolling in relative courses.", score: 40, feedback: "Vocabulary Trap! 'Related' means connected; 'relative' usually refers to family or a comparison." }
        ]
    },
    {
        q: "72. Do you have any plans for your studies in the next five years?",
        options: [
            { text: "I intend to pursue a Master's degree to deepen my expertise and potentially contribute to original research in my field.", score: 100, feedback: "Perfect! 'Intend to,' 'deepen my expertise,' and 'original research' are high-level goal-oriented phrases." },
            { text: "I intend to pursue a Master's degree to deepen my expertise and potentially contribute to original researches in my field.", score: 0, feedback: "Grammar Trap! 'Research' is uncountable; 'researches' is incorrect in this context." },
            { text: "I want to keep studying for a higher degree so I can know more and maybe write some new things about my subject.", score: 50, feedback: "Context Trap! 'Deepen my expertise' and 'original research' are much more academic than 'know more' and 'write new things'." },
            { text: "I intend to pursue a Master's degree to deep my expertise and potentially contribute to original research in my field.", score: 45, feedback: "Grammar Trap! You need the verb 'deepen' here, not the adjective 'deep'." }
        ]
    },
  {
        q: "73. What are the benefits of being your age?",
        options: [
            { text: "I believe the primary advantage is the balance of independence and energy, which allows me to pursue my goals while still enjoying life.", score: 100, feedback: "Perfect! 'Primary advantage' and 'pursue my goals' are excellent high-level academic choices." },
            { text: "I believe the primary advantage is the balance of independence and energy, which allows me to pursue my goals while still enjoying lives.", score: 0, feedback: "Grammar Trap! 'Life' should be singular here when referring to the general experience of living." },
            { text: "I think the best thing about my age is that I can do what I want and I still have a lot of energy to do things.", score: 50, feedback: "Context Trap! 'Independence' and 'pursue my goals' are much more sophisticated than 'do what I want'." },
            { text: "I believe the primary advantage is the balance of independence and energy, which allows me to pursue my goals while still enjoy life.", score: 45, feedback: "Grammar Trap! You need the gerund 'enjoying' after the preposition 'while'." }
        ]
    },
    {
        q: "74. Do you want to change your major?",
        options: [
            { text: "Not at all; I'm thoroughly satisfied with my current field of study as it perfectly aligns with my long-term career aspirations.", score: 100, feedback: "Excellent! 'Thoroughly satisfied' and 'aligns with my aspirations' are top-tier academic phrases." },
            { text: "Not at all; I'm thoroughly satisfied with my current field of study as it perfectly align with my long-term career aspirations.", score: 0, feedback: "Grammar Trap! The subject 'it' requires the singular verb 'aligns'." },
            { text: "No, I like what I am studying because it is exactly what I want to do for my job in the future.", score: 50, feedback: "Context Trap! 'Thoroughly satisfied' and 'career aspirations' are much stronger than 'like what I am studying'." },
            { text: "Not at all; I'm thoroughly satisfied with my current field of study as it perfectly aligns with my long-term career inspirations.", score: 45, feedback: "Vocabulary Trap! 'Aspirations' are goals; 'inspirations' are things that give you ideas." }
        ]
    },
    {
        q: "75. Do you prefer to study in the mornings or in the afternoons?",
        options: [
            { text: "I find that I'm most productive in the mornings, as my mind is fresh and I can tackle complex tasks with greater focus.", score: 100, feedback: "Perfect! 'Productive' and 'tackle complex tasks' are very natural, high-level expressions." },
            { text: "I find that I'm most productive in the mornings, as my mind is fresh and I can tackle complex task with greater focus.", score: 0, feedback: "Grammar Trap! Use the plural 'tasks' to refer to various study assignments." },
            { text: "I like studying in the morning because my brain is awake and I can do the hard work better.", score: 50, feedback: "Context Trap! 'Productive' and 'tackle complex tasks' are more sophisticated than 'awake' and 'hard work'." },
            { text: "I find that I'm most productive in the mornings, as my mind is fresh and I can tackle complex tasks with great focus.", score: 45, feedback: "Context Trap! 'Greater focus' (comparative) sounds more natural when explaining why you prefer one time over another." }
        ]
    },
    {
        q: "76. How much time do you spend on your studies each week?",
        options: [
            { text: "On average, I dedicate approximately forty hours a week to my studies, which includes attending lectures and independent research.", score: 100, feedback: "Excellent! 'Dedicate approximately' and 'independent research' are great academic collocations." },
            { text: "On average, I dedicate approximately forty hours a week to my studies, which includes attending lectures and independent researches.", score: 0, feedback: "Grammar Trap! 'Research' is an uncountable noun and should not be plural here." },
            { text: "I usually study for about forty hours every week, counting my classes and the time I spend reading on my own.", score: 50, feedback: "Context Trap! 'Dedicate' and 'independent research' are more professional than 'usually study' and 'reading on my own'." },
            { text: "On average, I dedicate approximately forty hours a week to my studies, which include attending lectures and independent research.", score: 45, feedback: "Grammar Trap! The verb 'includes' should be singular because it refers to the total amount of study time." }
        ]
    },
    {
        q: "77. Are you looking forward to working?",
        options: [
            { text: "I'm quite eager to enter the workforce, as I'm keen to apply the theoretical knowledge I've gained to practical, real-world scenarios.", score: 100, feedback: "Perfect! 'Enter the workforce' and 'theoretical knowledge' are high-level academic phrases." },
            { text: "I'm quite eager to enter the workforce, as I'm keen to apply the theoretical knowledge I've gained to practical, real-world scenario.", score: 0, feedback: "Grammar Trap! Use the plural 'scenarios' when referring to various situations in general." },
            { text: "I really want to start working so I can use what I learned in school for real jobs and problems.", score: 50, feedback: "Context Trap! 'Workforce' and 'theoretical knowledge' are much stronger than 'start working' and 'what I learned'." },
            { text: "I'm quite eager to enter the workforce, as I'm keen to apply the theoretic knowledge I've gained to practical, real-world scenarios.", score: 45, feedback: "Vocabulary Trap! Use the adjective 'theoretical' for knowledge; 'theoretic' is much less common." }
        ]
    },
    {
        q: "78. What technology do you use when you study?",
        options: [
            { text: "I rely heavily on my laptop for research and utilize various educational apps to organize my schedule and streamline my learning process.", score: 100, feedback: "Excellent! 'Rely heavily on,' 'utilize,' and 'streamline' are top-tier descriptors." },
            { text: "I rely heavily on my laptop for research and utilize various educational apps to organize my schedule and streamline my learning processes.", score: 0, feedback: "Grammar Trap! Use the singular 'process' when referring to your overall method of learning." },
            { text: "I use my computer a lot to find things out and I have some apps that help me plan my time and study faster.", score: 50, feedback: "Context Trap! 'Utilize' and 'streamline my learning process' are more sophisticated than 'use' and 'study faster'." },
            { text: "I rely heavy on my laptop for research and utilize various educational apps to organize my schedule and streamline my learning process.", score: 45, feedback: "Grammar Trap! You need the adverb 'heavily' to modify the verb 'rely'." }
        ]
    },
    {
        q: "79. What changes would you like to see in your school?",
        options: [
            { text: "I would appreciate more modern facilities, such as upgraded laboratories and communal study areas that foster collaboration among students.", score: 100, feedback: "Perfect! 'Modern facilities,' 'communal,' and 'foster collaboration' are high-level academic choices." },
            { text: "I would appreciate more modern facilities, such as upgraded laboratories and communal study areas that foster collaboration among student.", score: 0, feedback: "Grammar Trap! 'Students' must be plural as collaboration involves more than one person." },
            { text: "I want the school to have better things, like new labs and places where we can sit together and work on projects.", score: 50, feedback: "Context Trap! 'Modern facilities' and 'foster collaboration' are much stronger than 'better things' and 'places to sit'." },
            { text: "I would appreciate more modern facilities, such as upgraded laboratories and communal study areas that foster collaborations among students.", score: 45, feedback: "Context Trap! 'Collaboration' is usually uncountable here when referring to the general act of working together." }
        ]
    },
  {
        q: "80. What work do you do?",
        options: [
            { text: "I'm currently employed as a software developer, where I'm responsible for designing and maintaining various web applications.", score: 100, feedback: "Excellent! 'Employed as' and 'responsible for designing and maintaining' are professional descriptors." },
            { text: "I'm currently employed as a software developer, where I'm responsible for designing and maintaining various web application.", score: 0, feedback: "Grammar Trap! Use the plural 'applications' to refer to the multiple programs you work on." },
            { text: "I work as a computer coder, and my job is to make and fix different websites and programs.", score: 50, feedback: "Context Trap! 'Software developer' and 'maintaining applications' are much more professional titles." },
            { text: "I'm currently employed as a software developer, where I'm responsibility for designing and maintaining various web applications.", score: 45, feedback: "Grammar Trap! You need the adjective 'responsible,' not the noun 'responsibility'." }
        ]
    },
    {
        q: "81. Why did you choose to do that type of work (or that job)?",
        options: [
            { text: "I've always had a passion for technology, and I find the constant challenge of solving complex problems through code very rewarding.", score: 100, feedback: "Perfect! 'Passion for technology' and 'constant challenge' are very natural, high-level expressions." },
            { text: "I've always had a passion for technology, and I find the constant challenge of solving complex problems through code very reward.", score: 0, feedback: "Grammar Trap! You need the adjective 'rewarding' to describe the work, not the noun 'reward'." },
            { text: "I chose this job because I love computers and it feels good when I can fix a hard problem with my code.", score: 50, feedback: "Context Trap! 'Passion for technology' and 'solving complex problems' are much more sophisticated." },
            { text: "I've always had a passion for technology, and I find the constant challenge of solving complex problem through code very rewarding.", score: 45, feedback: "Grammar Trap! Use the plural 'problems' to refer to the various difficulties you face." }
        ]
    },
    {
        q: "82. Do you like your job?",
        options: [
            { text: "Absolutely; I find it immensely fulfilling, particularly when I'm able to see the tangible results of my work benefiting users.", score: 100, feedback: "Excellent! 'Immensely fulfilling' and 'tangible results' are top-tier C1-level descriptors." },
            { text: "Absolutely; I find it immensely fulfilling, particularly when I'm able to see the tangible result of my work benefiting users.", score: 0, feedback: "Grammar Trap! Use the plural 'results' when referring to the various outcomes of your efforts." },
            { text: "Yes, I like it a lot because it makes me happy to see people using the things I made to help them.", score: 50, feedback: "Context Trap! 'Immensely fulfilling' and 'tangible results' are much stronger than 'like it a lot' and 'things I made'." },
            { text: "Absolutely; I find it immense fulfilling, particularly when I'm able to see the tangible results of my work benefiting users.", score: 45, feedback: "Grammar Trap! You need the adverb 'immensely' to modify the adjective 'fulfilling'." }
        ]
    },
  {
        q: "83. What requirements did you need to meet to get your current job?",
        options: [
            { text: "Beyond a relevant university degree, I had to demonstrate proficiency in several programming languages and pass a rigorous technical interview.", score: 100, feedback: "Perfect! 'Relevant university degree,' 'proficiency,' and 'rigorous' are top-tier professional terms." },
            { text: "Beyond a relevant university degree, I had to demonstrate proficiency in several programming languages and pass a rigorous technical interviews.", score: 0, feedback: "Grammar Trap! 'Interview' should be singular here as it refers to the specific process you passed." },
            { text: "I needed a degree from college and I had to show that I was good at coding and pass a very hard test.", score: 50, feedback: "Context Trap! 'Proficiency' and 'technical interview' are much more professional for an IELTS context." },
            { text: "Beyond a relevant university degree, I had to demonstrate efficiency in several programming languages and pass a rigorous technical interview.", score: 45, feedback: "Vocabulary Trap! 'Proficiency' refers to skill level; 'efficiency' refers to how fast or well something works." }
        ]
    },
    {
        q: "84. Do you have any plans for your work in the next five years?",
        options: [
            { text: "In the coming years, I aim to transition into a senior role where I can lead larger projects and mentor junior developers within the team.", score: 100, feedback: "Excellent! 'Transition into a senior role' and 'mentor' are fantastic high-level career goals." },
            { text: "In the coming years, I aim to transition into a senior role where I can lead larger projects and mentor junior developer within the team.", score: 0, feedback: "Grammar Trap! Use the plural 'developers' to refer to the group of people you would mentor." },
            { text: "In the next five years, I want to get a better job where I am the boss and I can help new people learn how to code.", score: 50, feedback: "Context Trap! 'Senior role' and 'mentor' are more sophisticated than 'better job' and 'boss'." },
            { text: "In the coming years, I aim to transition into a senior role where I can lead larger projects and memory junior developers within the team.", score: 40, feedback: "Vocabulary Trap! 'Mentor' is the verb for teaching; 'memory' is a noun for things you remember." }
        ]
    },
 {
        q: "85. Do you want to change to another job?",
        options: [
            { text: "Not currently; I find my present position quite rewarding as it offers a wealth of opportunities for professional growth and skill development.", score: 100, feedback: "Excellent! 'Wealth of opportunities' and 'professional growth' are very natural high-level expressions." },
            { text: "Not currently; I find my present position quite rewarding as it offers a wealth of opportunities for professional growth and skill developments.", score: 0, feedback: "Grammar Trap! 'Skill development' is usually singular when referring to the overall process of improving." },
            { text: "No, I like where I work now because I can learn many new things and my career can grow here.", score: 50, feedback: "Context Trap! 'Wealth of opportunities' and 'professional growth' are much more academic than 'like where I work'." },
            { text: "Not currently; I find my present position quite rewarded as it offers a wealth of opportunities for professional growth and skill development.", score: 45, feedback: "Grammar Trap! Use 'rewarding' to describe the job; 'rewarded' describes how you feel." }
        ]
    },
    {
        q: "86. Do you miss being a student?",
        options: [
            { text: "While I occasionally miss the academic environment and the lack of professional responsibilities, I find my current career far more fulfilling.", score: 100, feedback: "Perfect! 'Academic environment' and 'professional responsibilities' are great C1-level descriptors." },
            { text: "While I occasionally miss the academic environment and the lack of professional responsibility, I find my current career far more fulfilling.", score: 0, feedback: "Grammar Trap! Use the plural 'responsibilities' to refer to the various duties of a job." },
            { text: "Sometimes I miss being in school and not having to work, but I like my job now much more than being a student.", score: 50, feedback: "Context Trap! 'Fulfilling' and 'academic environment' are more sophisticated than 'school' and 'like my job'." },
            { text: "While I occasionally miss the academic environment and the lack of professional responsibilities, I find my current career far more fulfilled.", score: 45, feedback: "Grammar Trap! Use 'fulfilling' to describe the career; 'fulfilled' describes how you feel." }
        ]
    },
    {
        q: "87. What technology do you use at work?",
        options: [
            { text: "I primarily utilize advanced software development tools and cloud-based platforms to collaborate with my colleagues and manage our codebase.", score: 100, feedback: "Excellent! 'Utilize,' 'cloud-based platforms,' and 'collaborate' are very professional terms." },
            { text: "I primarily utilize advanced software development tools and cloud-based platforms to collaborate with my colleague and manage our codebase.", score: 0, feedback: "Grammar Trap! Use the plural 'colleagues' to refer to the group of people you work with." },
            { text: "I mostly use computer programs and the internet to work with other people and keep our code safe.", score: 50, feedback: "Context Trap! 'Cloud-based platforms' and 'collaborate' are much more precise for a tech role." },
            { text: "I primarily utilize advanced software development tools and cloud-based platforms to collaboration with my colleagues and manage our codebase.", score: 45, feedback: "Grammar Trap! You need the verb 'collaborate' here, not the noun 'collaboration'." }
        ]
    },
    {
        q: "88. Who helps you the most? And how?",
        options: [
            { text: "My senior colleagues are incredibly supportive, often providing valuable insights and technical guidance whenever I encounter complex challenges.", score: 100, feedback: "Perfect! 'Incredibly supportive,' 'valuable insights,' and 'technical guidance' are top-tier descriptors." },
            { text: "My senior colleagues are incredibly supportive, often providing valuable insights and technical guidance whenever I encounter complex challenge.", score: 0, feedback: "Grammar Trap! Use the plural 'challenges' to refer to the various difficulties you face." },
            { text: "The older people at my work help me a lot by giving me good ideas and helping me when I have a hard problem with my code.", score: 50, feedback: "Context Trap! 'Senior colleagues' and 'technical guidance' are much more professional than 'older people'." },
            { text: "My senior colleagues are incredibly supportive, often providing valuable insight and technical guidance whenever I encounter complex challenges.", score: 45, feedback: "Context Trap! 'Insights' (plural) is more common when referring to multiple pieces of advice." }
        ]
    },
  {
        q: "89. What kind of house or apartment do you want to live in in the future?",
        options: [
            { text: "In the future, I aspire to reside in a sustainable, modern villa that utilizes renewable energy and features an open-plan layout.", score: 100, feedback: "Perfect! 'Reside in,' 'sustainable,' and 'open-plan layout' are high-level architectural descriptors." },
            { text: "I want to live in a new house that uses solar power and has a lot of open space inside for my family.", score: 50, feedback: "Context Trap! 'Reside in' and 'sustainable' are more professional for an IELTS context." },
            { text: "In the future, I aspire to reside in a sustainable, modern villa that utilizes renewable energy and features an open-planned layout.", score: 45, feedback: "Vocabulary Trap! The standard term is 'open-plan layout'." },
            { text: "In the future, I aspire to reside in a sustainable, modern villa that utilizes renewable energy and features an open-plan layouts.", score: 0, feedback: "Grammar Trap! 'Layout' should be singular when referring to the design of the house." }
        ]
    },
    {
        q: "90. Are the transport facilities to your home very good?",
        options: [
            { text: "Exceedingly so; my residence is conveniently located near a major transit hub, providing easy access to buses and the subway system.", score: 100, feedback: "Excellent! 'Exceedingly so,' 'transit hub,' and 'easy access' are very sophisticated choices." },
            { text: "Yes, it is very easy to get to my house because I live near the bus station and the train station.", score: 50, feedback: "Context Trap! 'Transit hub' and 'conveniently located' are much stronger than 'very easy to get to'." },
            { text: "Exceedingly so; my residence is convenient located near a major transit hub, providing easy access to buses and the subway system.", score: 45, feedback: "Grammar Trap! You need the adverb 'conveniently' to modify 'located'." },
            { text: "Exceedingly so; my residence is conveniently located near a major transit hub, providing easy access to buses and the subway systems.", score: 0, feedback: "Grammar Trap! 'System' should be singular when referring to the network as a whole." }
        ]
    },
    {
        q: "91. Do you prefer living in a house or an apartment?",
        options: [
            { text: "I lean toward living in an apartment, as I appreciate the sense of security and the communal amenities that often accompany high-rise living.", score: 100, feedback: "Perfect! 'Lean toward,' 'communal amenities,' and 'accompany' are top-tier descriptors." },
            { text: "I like apartments more because they feel safe and there are many extra things like a gym or a park nearby.", score: 50, feedback: "Context Trap! 'Communal amenities' is more academic than 'extra things'." },
            { text: "I lean toward living in an apartment, as I appreciate the sense of security and the communal amenities that often accompanies high-rise living.", score: 45, feedback: "Grammar Trap! The verb 'accompany' should be plural to match 'amenities'." },
            { text: "I lean toward living in an apartment, as I appreciate the sense of security and the communal amenity that often accompany high-rise living.", score: 0, feedback: "Grammar Trap! Use the plural 'amenities' for various facilities." }
        ]
    },
    {
        q: "92. Please describe the room you live in.",
        options: [
            { text: "My room is quite minimalist, featuring neutral tones and large windows that allow for an abundance of natural light throughout the day.", score: 100, feedback: "Excellent! 'Minimalist,' 'neutral tones,' and 'abundance' are very sophisticated vocabulary choices." },
            { text: "My room is simple with white walls and big windows that let in a lot of sun during the day.", score: 50, feedback: "Context Trap! 'Minimalist' and 'abundance of natural light' are much stronger than 'simple'." },
            { text: "My room is quite minimalist, featuring neutral tones and large windows that allow for an abandon of natural light throughout the day.", score: 40, feedback: "Vocabulary Trap! 'Abundance' means a lot; 'abandon' means to leave behind." },
            { text: "My room is quite minimalist, featuring neutral tones and large windows that allow for an abundance of natural lights throughout the day.", score: 0, feedback: "Grammar Trap! 'Light' is uncountable in this context." }
        ]
    },
    {
        q: "93. What part of your home do you like the most?",
        options: [
            { text: "I'm particularly fond of the balcony, as it offers a tranquil space where I can unwind and enjoy a panoramic view of the neighborhood.", score: 100, feedback: "Perfect! 'Tranquil space,' 'unwind,' and 'panoramic view' are fantastic C1-level phrases." },
            { text: "I like the balcony best because it is a quiet place where I can relax and look at the whole area.", score: 50, feedback: "Context Trap! 'Tranquil' and 'panoramic view' are more precise than 'quiet' and 'look at the area'." },
            { text: "I'm particularly fond of the balcony, as it offers a tranquil space where I can unwind and enjoy a panorama view of the neighborhood.", score: 45, feedback: "Grammar Trap! You need the adjective 'panoramic'." },
            { text: "I'm particularly fond of the balcony, as it offers a tranquil space where I can unwind and enjoy a panoramic views of the neighborhood.", score: 0, feedback: "Grammar Trap! Use the singular 'view' for the scene." }
        ]
    },
{
        q: "106. Where is your hometown?",
        options: [
            { text: "My hometown is situated in the coastal region of the province, which is renowned for its stunning beaches and vibrant local culture.", score: 100, feedback: "Excellent! 'Situated in,' 'renowned for,' and 'vibrant' are high-level descriptors." },
            { text: "My hometown is in a place near the sea, and many people know it because it has nice beaches and good culture.", score: 50, feedback: "Context Trap! 'Renowned for' is a much more sophisticated way to say 'many people know it'." },
            { text: "My hometown is situated in the coastal region of the province, which is renown for its stunning beaches and vibrant local culture.", score: 45, feedback: "Grammar Trap! You need the past participle 'renowned' used as an adjective." },
            { text: "My hometown is situated in the coastal region of the province, which is renowned for its stunning beaches and vibrant local cultures.", score: 0, feedback: "Grammar Trap! 'Culture' should be singular when referring to the overall identity of a place." }
        ]
    },
    {
        q: "107. Is that a big city or a small place?",
        options: [
            { text: "It's a moderately sized city that strikes a perfect balance between urban convenience and a tight-knit community feel.", score: 100, feedback: "Perfect! 'Moderately sized,' 'strikes a balance,' and 'tight-knit' are sophisticated choices." },
            { text: "It is not too big and not too small, so it has everything you need but the people still know each other well.", score: 50, feedback: "Context Trap! 'Strikes a perfect balance' and 'tight-knit' are much stronger for the exam." },
            { text: "It's a moderately sized city that strikes a perfect balance between urban convenience and a tight-knitted community feel.", score: 45, feedback: "Vocabulary Trap! The standard idiom is 'tight-knit'." },
            { text: "It's a moderately sized city that strikes a perfect balance between urban convenience and a tight-knit communities feel.", score: 0, feedback: "Grammar Trap! 'Community' should be singular here as it acts as an adjective for 'feel'." }
        ]
    },  
  {
        q: "94. How long have you lived there?",
        options: [
            { text: "I've resided in my current home for approximately five years, during which time I've grown very attached to the local community.", score: 100, feedback: "Excellent! 'Resided,' 'approximately,' and 'grown attached to' are sophisticated choices." },
            { text: "I have lived in my house for about five years and I really like the people who live near me now.", score: 50, feedback: "Context Trap! 'Resided' and 'grown attached to' are much more formal and academic." },
            { text: "I've resided in my current home for approximately five years, during which time I've grew very attached to the local community.", score: 45, feedback: "Grammar Trap! Use the past participle 'grown' after the auxiliary verb 'have'." },
            { text: "I've resided in my current home for approximately five years, during which time I've grown very attached to the local communities.", score: 0, feedback: "Grammar Trap! Use the singular 'community' to refer to your specific neighborhood." }
        ]
    },
    {
        q: "95. Do you plan to live there for a long time?",
        options: [
            { text: "For the foreseeable future, yes, as the location is ideal for my career and provides a high quality of life.", score: 100, feedback: "Perfect! 'Foreseeable future,' 'ideal,' and 'quality of life' are top-tier descriptors." },
            { text: "I think I will stay there for a long time because it is good for my job and I like living there.", score: 50, feedback: "Context Trap! 'Foreseeable future' is a very common and sophisticated academic idiom." },
            { text: "For the foreseeable future, yes, as the location is ideal for my career and provides a high qualify of life.", score: 45, feedback: "Vocabulary Trap! 'Quality' is the noun; 'qualify' is a verb." },
            { text: "For the foreseeable future, yes, as the location is ideal for my career and provides a high quality of lives.", score: 0, feedback: "Grammar Trap! 'Life' should be singular in the phrase 'quality of life'." }
        ]
    },
    {
        q: "96. What’s the difference between where you are living now and where you have lived in the past?",
        options: [
            { text: "The most significant difference is the level of urbanization; my previous residence was in a secluded rural area, whereas my current home is in a bustling city.", score: 100, feedback: "Excellent! 'Significant difference,' 'secluded,' and 'bustling' are great contrast markers." },
            { text: "My old house was in the quiet countryside and my new house is in a very busy and loud city.", score: 50, feedback: "Context Trap! 'Urbanization' and 'secluded' are much more sophisticated than 'busy' and 'quiet'." },
            { text: "The most significant difference is the level of urbanization; my previous residence was in a secluded rural area, whereas my current home is in a bustled city.", score: 40, feedback: "Grammar Trap! Use the adjective 'bustling' to describe a city full of activity." },
            { text: "The most significant difference is the level of urbanization; my previous residence was in a secluded rural area, whereas my current home is in a bustling cities.", score: 0, feedback: "Grammar Trap! Use the singular 'city' since you are referring to your current one." }
        ]
    },
    {
        q: "97. Can you describe the place where you live?",
        options: [
            { text: "I live in a contemporary apartment complex that boasts various facilities, including a rooftop garden and a fully-equipped gymnasium.", score: 100, feedback: "Perfect! 'Contemporary,' 'boasts,' and 'fully-equipped' are high-level academic terms." },
            { text: "I live in a modern building that has a garden on the roof and a big gym for the people who live there.", score: 50, feedback: "Context Trap! 'Contemporary' and 'boasts' are more sophisticated than 'modern' and 'has'." },
            { text: "I live in a contemporary apartment complex that boasts various facilities, including a rooftop garden and a full-equipped gymnasium.", score: 45, feedback: "Grammar Trap! You need the adverbial form 'fully-equipped'." },
            { text: "I live in a contemporary apartment complex that boasts various facilities, including a rooftop garden and a fully-equipped gymnasiums.", score: 0, feedback: "Grammar Trap! 'Gymnasium' should be singular here." }
        ]
    },
  {
        q: "98. What room does your family spend most of the time in?",
        options: [
            { text: "We primarily congregate in the living room, as it's the most spacious area and serves as the central hub for our social interactions.", score: 100, feedback: "Excellent! 'Primarily congregate,' 'spacious,' and 'central hub' are top-tier collocations." },
            { text: "We mostly sit in the living room because it is the biggest room and it is where we all talk and watch TV.", score: 50, feedback: "Context Trap! 'Congregate' and 'social interactions' are much more professional for an exam." },
            { text: "We primarily congregate in the living room, as it's the most space area and serves as the central hub for our social interactions.", score: 45, feedback: "Grammar Trap! You need the adjective 'spacious' to describe the room, not the noun 'space'." },
            { text: "We primarily congregate in the living room, as it's the most spacious area and serves as the central hub for our social interaction.", score: 0, feedback: "Grammar Trap! Use the plural 'interactions' to refer to the many times your family talks." }
        ]
    },
    {
        q: "99. What's your favorite room in your apartment or house?",
        options: [
            { text: "My favorite room is undoubtedly the study, as it provides a serene environment that is conducive to deep work and reflection.", score: 100, feedback: "Perfect! 'Undoubtedly,' 'serene environment,' and 'conducive to' are high-level academic descriptors." },
            { text: "I like my study room best because it is very quiet and I can do my work and think there.", score: 50, feedback: "Context Trap! 'Serene' and 'conducive to' are much stronger than 'quiet' and 'can do'." },
            { text: "My favorite room is undoubtedly the study, as it provides a serene environment that is conductive to deep work and reflection.", score: 40, feedback: "Vocabulary Trap! 'Conductive' is for electricity; 'conducive' means making something possible." },
            { text: "My favorite room is undoubtedly the study, as it provides a serene environment that is conducive to deep works and reflection.", score: 0, feedback: "Grammar Trap! 'Work' is uncountable here; adding an 's' makes it incorrect." }
        ]
    },
    {
        q: "100. What makes you feel pleasant in your home?",
        options: [
            { text: "The abundance of indoor plants and the warm, ambient lighting create a cozy atmosphere that makes me feel incredibly relaxed.", score: 100, feedback: "Excellent! 'Abundance,' 'ambient lighting,' and 'cozy atmosphere' are sophisticated choices." },
            { text: "I feel good because I have many plants and the lights are soft, so it feels very comfortable at home.", score: 50, feedback: "Context Trap! 'Ambient lighting' and 'cozy atmosphere' are more precise and higher-level than 'soft lights'." },
            { text: "The abundance of indoor plants and the warm, ambient lighting create a cozy atmosphere that makes me feel incredible relaxed.", score: 45, feedback: "Grammar Trap! You need the adverb 'incredibly' to modify the adjective 'relaxed'." },
            { text: "The abundance of indoor plants and the warm, ambient lighting create a cozy atmosphere that makes me feel incredibly relax.", score: 0, feedback: "Grammar Trap! You need the adjective 'relaxed' to describe your feelings, not the verb 'relax'." }
        ]
    },
    {
        q: "101. Do you think it is important to live in a comfortable environment?",
        options: [
            { text: "Absolutely; I believe a comfortable environment is vital for mental well-being, as it provides a sanctuary where one can recover from daily stressors.", score: 100, feedback: "Perfect! 'Vital,' 'mental well-being,' and 'sanctuary' are top-tier C1 terms." },
            { text: "Yes, it is very important because you need a nice place to be happy and forget about the problems of work and life.", score: 50, feedback: "Context Trap! 'Mental well-being' and 'sanctuary' are much more expressive and academic." },
            { text: "Absolutely; I believe a comfortable environment is vital for mental well-being, as it provides a sanctuary where one can recovery from daily stressors.", score: 45, feedback: "Grammar Trap! You need the verb 'recover' after the modal 'can,' not the noun 'recovery'." },
            { text: "Absolutely; I believe a comfortable environment is vital for mental well-beings, as it provides a sanctuary where one can recover from daily stressors.", score: 0, feedback: "Grammar Trap! 'Well-being' is an uncountable noun and does not take an 's'." }
        ]
    },
    {
        q: "102. Do you live in an apartment or a house?",
        options: [
            { text: "I currently reside in a multi-story apartment building, which is conveniently situated within walking distance of the city center.", score: 100, feedback: "Excellent! 'Reside in,' 'multi-story,' and 'conveniently situated' are professional descriptors." },
            { text: "I live in a tall apartment building that is very close to the middle of the city so I can walk there.", score: 50, feedback: "Context Trap! 'Multi-story' and 'conveniently situated' are much higher-level than 'tall' and 'close to'." },
            { text: "I currently reside in a multi-story apartment building, which is convenient situated within walking distance of the city center.", score: 45, feedback: "Grammar Trap! You need the adverb 'conveniently' to describe where it is situated." },
            { text: "I currently reside in a multi-story apartment building, which is conveniently situated within walking distance of the city centers.", score: 0, feedback: "Grammar Trap! 'City center' should be singular as you are referring to the one in your city." }
        ]
    },
    {
        q: "103. Who do you live with?",
        options: [
            { text: "I share my living space with my immediate family, which creates a supportive environment where we can bond and assist each other.", score: 100, feedback: "Perfect! 'Immediate family,' 'supportive environment,' and 'bond' are high-level academic collocations." },
            { text: "I live with my parents and my sister, and we help each other and have a good time together at home.", score: 50, feedback: "Context Trap! 'Immediate family' is a more professional way to categorize your relatives in an exam." },
            { text: "I share my living space with my immediate family, which creates a support environment where we can bond and assist each other.", score: 45, feedback: "Grammar Trap! You need the adjective 'supportive' to describe the environment." },
            { text: "I share my living space with my immediate family, which creates a supportive environment where we can bond and assist each others.", score: 0, feedback: "Grammar Trap! The idiom is 'each other' (singular) for reciprocal action." }
        ]
    },
    {
        q: "104. What do you usually do in your apartment?",
        options: [
            { text: "I typically spend my time reading, engaging in creative hobbies, or hosting small gatherings for my close friends.", score: 100, feedback: "Excellent! 'Typically,' 'engaging in,' and 'hosting gatherings' are very natural high-level expressions." },
            { text: "I usually read books, do my hobbies, or have my friends over to my place to talk and eat.", score: 50, feedback: "Context Trap! 'Typically' and 'hosting gatherings' are much stronger than 'usually' and 'have friends over'." },
            { text: "I typically spend my time reading, engaging in creative hobbies, or hosting small gatherings for my closely friends.", score: 40, feedback: "Grammar Trap! You need the adjective 'close' to describe friends, not the adverb 'closely'." },
            { text: "I typically spend my time reading, engaging in creative hobbies, or hosting small gatherings for my close friend.", score: 0, feedback: "Grammar Trap! Use the plural 'friends' when talking about social gatherings." }
        ]
    },
    {
        q: "105. What kinds of accommodation do you live in?",
        options: [
            { text: "I inhabit a modern urban apartment, which is characterized by its contemporary design and state-of-the-art facilities.", score: 100, feedback: "Perfect! 'Inhabit,' 'characterized by,' and 'state-of-the-art' are top-tier descriptors." },
            { text: "I live in a new city apartment that has a very modern look and many new things for the people who live there.", score: 50, feedback: "Context Trap! 'Inhabit' and 'state-of-the-art' are more precise and higher-level than 'live in' and 'new things'." },
            { text: "I inhabit a modern urban apartment, which is characteristic by its contemporary design and state-of-the-art facilities.", score: 45, feedback: "Grammar Trap! The standard phrase is 'characterized by' when describing features." },
            { text: "I inhabit a modern urban apartment, which is characterized by its contemporary design and state-of-the-art facility.", score: 0, feedback: "Grammar Trap! Use the plural 'facilities' to refer to the various modern features." }
        ]
    },
  {
        q: "106. Where is your hometown?",
        options: [
            { text: "My hometown is situated in the coastal region of the province, which is renowned for its stunning beaches and vibrant local culture.", score: 100, feedback: "Excellent! 'Situated in,' 'renowned for,' and 'vibrant' are high-level descriptors." },
            { text: "My hometown is in a place near the sea, and many people know it because it has nice beaches and good culture.", score: 50, feedback: "Context Trap! 'Renowned for' is a much more sophisticated way to say 'many people know it'." },
            { text: "My hometown is situated in the coastal region of the province, which is renown for its stunning beaches and vibrant local culture.", score: 45, feedback: "Grammar Trap! You need the past participle 'renowned' used as an adjective." },
            { text: "My hometown is situated in the coastal region of the province, which is renowned for its stunning beaches and vibrant local cultures.", score: 0, feedback: "Grammar Trap! 'Culture' should be singular when referring to the overall identity of a place." }
        ]
    },
    {
        q: "107. Is that a big city or a small place?",
        options: [
            { text: "It's a moderately sized city that strikes a perfect balance between urban convenience and a tight-knit community feel.", score: 100, feedback: "Perfect! 'Moderately sized,' 'strikes a balance,' and 'tight-knit' are sophisticated choices." },
            { text: "It is not too big and not too small, so it has everything you need but the people still know each other well.", score: 50, feedback: "Context Trap! 'Strikes a perfect balance' and 'tight-knit' are much stronger for the exam." },
            { text: "It's a moderately sized city that strikes a perfect balance between urban convenience and a tight-knitted community feel.", score: 45, feedback: "Vocabulary Trap! The standard idiom is 'tight-knit'." },
            { text: "It's a moderately sized city that strikes a perfect balance between urban convenience and a tight-knit communities feel.", score: 0, feedback: "Grammar Trap! 'Community' should be singular here as it acts as an adjective for 'feel'." }
        ]
    },
    {
        q: "108. Please describe your hometown a little.",
        options: [
            { text: "My hometown is a picturesque locality characterized by its historical architecture and lush green spaces that offer a peaceful retreat.", score: 100, feedback: "Excellent! 'Picturesque,' 'characterized by,' and 'lush' are very descriptive C1-level words." },
            { text: "My hometown is a beautiful place that has old buildings and many parks where you can go to be quiet.", score: 50, feedback: "Context Trap! 'Picturesque' and 'historical architecture' are more academic than 'beautiful' and 'old buildings'." },
            { text: "My hometown is a picturesque locality characteristic by its historical architecture and lush green spaces that offer a peaceful retreat.", score: 45, feedback: "Grammar Trap! The phrase is 'characterized by,' not 'characteristic by'." },
            { text: "My hometown is a picturesque locality characterized by its historical architectures and lush green spaces that offer a peaceful retreat.", score: 0, feedback: "Grammar Trap! 'Architecture' is an uncountable noun in this general sense." }
        ]
    },
    {
        q: "109. How long have you been living there?",
        options: [
            { text: "I've resided there since birth, which has allowed me to witness the significant transformation of the area over the past two decades.", score: 100, feedback: "Perfect! 'Resided since birth' and 'significant transformation' are high-level ways to discuss personal history." },
            { text: "I have lived there all my life, so I have seen many big changes in the town since I was born.", score: 50, feedback: "Context Trap! 'Witness the significant transformation' is much more sophisticated than 'seen many big changes'." },
            { text: "I've resided there since birth, which has allowed me to witness the significant transformations of the area over the past two decades.", score: 45, feedback: "Context Trap! While 'transformations' is possible, the singular 'transformation' usually refers to the overall process better." },
            { text: "I've resided there since birth, which has allowed me to witnessed the significant transformation of the area over the past two decades.", score: 0, feedback: "Grammar Trap! You need the infinitive 'witness' after 'to,' not the past tense 'witnessed'." }
        ]
    },
    {
        q: "110. Do you think you will continue living there for a long time?",
        options: [
            { text: "While I'm open to exploring new opportunities elsewhere, a part of me will always be deeply rooted in my hometown due to my strong familial ties.", score: 100, feedback: "Excellent! 'Deeply rooted' and 'familial ties' are sophisticated idiomatic expressions." },
            { text: "I might move to a new place for work, but I will always like my hometown because my family lives there.", score: 50, feedback: "Context Trap! 'Deeply rooted' and 'familial ties' are much stronger than 'like my hometown' and 'family lives there'." },
            { text: "While I'm open to exploring new opportunities elsewhere, a part of me will always be deeply rooted in my hometown due to my strong family ties.", score: 55, feedback: "Note: 'Family ties' is correct, but 'familial ties' is a higher-level academic synonym." },
            { text: "While I'm open to exploring new opportunities elsewhere, a part of me will always be deeply rooted in my hometown due to my strong familial tie.", score: 0, feedback: "Grammar Trap! Use the plural 'ties' to refer to the various connections to your family." }
        ]
    },
    {
        q: "111. Do you like your hometown?",
        options: [
            { text: "Most definitely; I have an immense fondness for my hometown, as it's where my most cherished childhood memories were formed.", score: 100, feedback: "Perfect! 'Immense fondness' and 'cherished memories' are very natural, high-level collocations." },
            { text: "Yes, I like it very much because I have many good memories from when I was a child in that place.", score: 50, feedback: "Context Trap! 'Immense fondness' and 'cherished' are much more expressive than 'like it very much' and 'good'." },
            { text: "Most definitely; I have an immense fondness for my hometown, as it's where my most cherished childhood memory were formed.", score: 0, feedback: "Grammar Trap! Use the plural 'memories' to match the plural verb 'were'." },
            { text: "Most definitely; I have an immense fond for my hometown, as it's where my most cherished childhood memories were formed.", score: 45, feedback: "Grammar Trap! You need the noun 'fondness' after the adjective 'immense,' not the adjective 'fond'." }
        ]
    },
    {
        q: "112. Do you like living there?",
        options: [
            { text: "I do, primarily because of the high quality of life and the sense of belonging I feel when surrounded by familiar faces and landmarks.", score: 100, feedback: "Excellent! 'Sense of belonging' and 'familiar landmarks' are top-tier descriptors for home." },
            { text: "Yes, I like it because life is good there and I feel happy when I see the people and places I know.", score: 50, feedback: "Context Trap! 'Sense of belonging' is a much more sophisticated way to describe feeling 'happy' in a place." },
            { text: "I do, primarily because of the high quality of lives and the sense of belonging I feel when surrounded by familiar faces and landmarks.", score: 0, feedback: "Grammar Trap! 'Life' should be singular in the fixed phrase 'quality of life'." },
            { text: "I do, primarily because of the high quality of life and the sense of belong I feel when surrounded by familiar faces and landmarks.", score: 45, feedback: "Grammar Trap! You need the gerund 'belonging' after 'sense of'." }
        ]
    },
  {
        q: "113. What do you like most about your hometown?",
        options: [
            { text: "I'm most fond of the hospitality of the residents; there's a genuine sense of community where everyone looks out for one another.", score: 100, feedback: "Excellent! 'Hospitality' and 'genuine sense of community' are high-level social descriptors." },
            { text: "I like the people best because they are very friendly and everyone helps each other when there is a problem.", score: 50, feedback: "Context Trap! 'Hospitality' and 'looks out for one another' are more sophisticated than 'very friendly' and 'helps each other'." },
            { text: "I'm most fond of the hospitality of the residents; there's a genuine sense of community where everyone looks out for one others.", score: 0, feedback: "Grammar Trap! The idiom is 'one another' or 'each other' (singular) for reciprocal actions." },
            { text: "I'm most fond of the hospitality of the residents; there's a genuine sense of community where everyone looks after one another.", score: 90, feedback: "Note: 'Looks after' is correct, but 'looks out for' is a slightly more natural idiom for community safety." }
        ]
    },
    {
        q: "114. Is there anything you dislike about it?",
        options: [
            { text: "If I had to choose, I'd say the lack of public transport infrastructure can be somewhat inconvenient for those living in the outskirts.", score: 100, feedback: "Perfect! 'Infrastructure,' 'somewhat inconvenient,' and 'outskirts' are top-tier C1-level terms." },
            { text: "I don't like that there are not many buses or trains, which makes it hard for people who live far from the center.", score: 50, feedback: "Context Trap! 'Infrastructure' and 'outskirts' are much more professional than 'not many buses' and 'far from the center'." },
            { text: "If I had to choose, I'd say the lack of public transport infrastructure can be somewhat inconvenient for those living in the outskirt.", score: 0, feedback: "Grammar Trap! 'Outskirts' is a plural noun; it cannot be used in the singular 'outskirt'." },
            { text: "If I had to choose, I'd say the lack of public transport infrastructure can be somewhat inconvenience for those living in the outskirts.", score: 45, feedback: "Grammar Trap! You need the adjective 'inconvenient' here, not the noun 'inconvenience'." }
        ]
    },
    {
        q: "115. What's your hometown famous for?",
        options: [
            { text: "My hometown is primarily renowned for its traditional cuisine, which attracts food enthusiasts from all over the country.", score: 100, feedback: "Excellent! 'Primarily renowned,' 'traditional cuisine,' and 'enthusiasts' are sophisticated choices." },
            { text: "My town is famous for its special food, and many people from different cities come here just to eat it.", score: 50, feedback: "Context Trap! 'Renowned' and 'cuisine' are much higher-level than 'famous' and 'special food'." },
            { text: "My hometown is primarily renowned for its traditional cuisine, which attracts food enthusiast from all over the country.", score: 0, feedback: "Grammar Trap! Use the plural 'enthusiasts' to refer to the group of people." },
            { text: "My hometown is primary renowned for its traditional cuisine, which attracts food enthusiasts from all over the country.", score: 45, feedback: "Grammar Trap! You need the adverb 'primarily' to modify the adjective 'renowned'." }
        ]
    },
    {
        q: "116. Did you learn about the history of your hometown at school?",
        options: [
            { text: "Yes, our curriculum included several modules on local history, which provided fascinating insights into the origins and development of the area.", score: 100, feedback: "Perfect! 'Curriculum,' 'modules,' and 'fascinating insights' are top-tier academic terms." },
            { text: "Yes, we studied our town in school and I learned many interesting things about how the place started and grew.", score: 50, feedback: "Context Trap! 'Curriculum' and 'origins and development' are much stronger than 'studied in school' and 'how it started'." },
            { text: "Yes, our curriculum included several modules on local history, which provided fascinating insight into the origins and development of the area.", score: 55, feedback: "Note: 'Insight' can be uncountable, but 'insights' is more common for multiple pieces of information." },
            { text: "Yes, our curriculum included several modules on local history, which provided fascinating insights into the origins and development of the areas.", score: 0, feedback: "Grammar Trap! Use the singular 'area' to refer specifically to your hometown." }
        ]
    },
    {
        q: "117. Are there many young people in your hometown?",
        options: [
            { text: "To be honest, many young people tend to migrate to larger cities in search of better educational and employment prospects.", score: 100, feedback: "Excellent! 'Migrate,' 'prospects,' and 'employment' are very sophisticated academic choices." },
            { text: "Actually, a lot of young people leave and go to the big city because they want to find a better school or a good job.", score: 50, feedback: "Context Trap! 'Migrate' and 'prospects' are more formal than 'leave' and 'find a job'." },
            { text: "To be honest, many young people tend to migrate to larger cities in search of better educational and employment prospect.", score: 0, feedback: "Grammar Trap! Use the plural 'prospects' to refer to the various opportunities available." },
            { text: "To be honest, many young people tend to migrate to larger cities in search of better education and employment prospects.", score: 90, feedback: "Note: 'Education' is correct, but 'educational' (adjective) better matches 'employment' (adjective-like use)." }
        ]
    },
    {
        q: "118. Is your hometown a good place for young people to pursue their careers?",
        options: [
            { text: "It's somewhat limited; while it's a peaceful place to live, it lacks the diverse career opportunities found in major metropolitan areas.", score: 100, feedback: "Perfect! 'Limited,' 'diverse,' and 'metropolitan areas' are sophisticated descriptors." },
            { text: "Not really, because even if it is a nice place, there aren't many different jobs like you can find in a big city.", score: 50, feedback: "Context Trap! 'Metropolitan areas' is a much more professional way to say 'big city'." },
            { text: "It's somewhat limited; while it's a peaceful place to live, it lacks the diverse career opportunity found in major metropolitan areas.", score: 0, feedback: "Grammar Trap! Use the plural 'opportunities' for the various types of work." },
            { text: "It's somewhat limited; while it's a peaceful place to live, it lacks the diverse career opportunities found in major metropolitan area.", score: 45, feedback: "Grammar Trap! Use the plural 'areas' to refer to big cities in general." }
        ]
    },
    {
        q: "119. Have you learned anything about the history of your hometown?",
        options: [
            { text: "I've independently researched local archives to better understand the historical events that shaped the community into what it is today.", score: 100, feedback: "Excellent! 'Independently researched,' 'archives,' and 'shaped the community' are high-level expressions." },
            { text: "I looked up some things on my own to learn more about the old stories and things that happened here a long time ago.", score: 50, feedback: "Context Trap! 'Archives' and 'shaped the community' are more precise than 'old stories' and 'things that happened'." },
            { text: "I've independently researched local archives to better understand the historical events that shaped the community into what it is todays.", score: 0, feedback: "Grammar Trap! 'Today' is an adverb/noun and cannot be pluralized in this context." },
            { text: "I've independently research local archives to better understand the historical events that shaped the community into what it is today.", score: 45, feedback: "Grammar Trap! Use the past participle 'researched' after 'have'." }
        ]
    },
    {
        q: "120. Did you learn about the culture of your hometown in your childhood?",
        options: [
            { text: "Absolutely; I was immersed in local traditions from a young age, participating in annual festivals and community gatherings.", score: 100, feedback: "Perfect! 'Immersed,' 'traditions,' and 'annual festivals' are fantastic descriptive choices." },
            { text: "Yes, I did many traditional things when I was little, like going to the big parties and meetings in my town every year.", score: 50, feedback: "Context Trap! 'Immersed' and 'community gatherings' are much stronger than 'did traditional things' and 'meetings'." },
            { text: "Absolutely; I was immersed in local traditions from a young age, participating in annual festivals and community gathering.", score: 0, feedback: "Grammar Trap! Use the plural 'gatherings' to refer to the multiple events." },
            { text: "Absolutely; I was immerse in local traditions from a young age, participating in annual festivals and community gatherings.", score: 45, feedback: "Grammar Trap! You need the past participle 'immersed' for the passive voice." }
        ]
    },
  {
        q: "121. Do you like the area that you live in?",
        options: [
            { text: "I'm quite fond of it; the neighborhood has a vibrant atmosphere and provides easy access to a variety of local amenities.", score: 100, feedback: "Excellent! 'Vibrant atmosphere' and 'local amenities' are top-tier descriptors for a neighborhood." },
            { text: "I like it a lot because there are many things to do and I can get to the shops and parks very easily.", score: 50, feedback: "Context Trap! 'Local amenities' is a much more professional way to say 'shops and parks'." },
            { text: "I'm quite fond of it; the neighborhood has a vibrant atmosphere and provides easy access to a variety of local amenity.", score: 0, feedback: "Grammar Trap! Use the plural 'amenities' to refer to the various facilities available." },
            { text: "I'm quite fond of it; the neighborhood has a vibrant atmosphere and provides easy access to a vary of local amenities.", score: 45, feedback: "Grammar Trap! You need the noun 'variety,' not the verb 'vary'." }
        ]
    },
    {
        q: "122. Where do you like to go in that area?",
        options: [
            { text: "I particularly enjoy visiting the local park, as it offers a tranquil escape from the hustle and bustle of city life.", score: 100, feedback: "Perfect! 'Tranquil escape' and the idiom 'hustle and bustle' are fantastic high-level choices." },
            { text: "I like going to the park near my house because it is very quiet and far away from the busy and loud city.", score: 50, feedback: "Context Trap! 'Hustle and bustle' is a very natural and sophisticated idiomatic expression for IELTS." },
            { text: "I particularly enjoy visiting the local park, as it offers a tranquil escape from the hustle and bustle of cities life.", score: 0, feedback: "Grammar Trap! 'City life' is a compound noun and should remain singular here." },
            { text: "I particularly enjoy visiting the local park, as it offers a tranquil escape from the hustle and bustle of city lives.", score: 45, feedback: "Grammar Trap! Use the singular 'life' when referring to the general experience of living in a city." }
        ]
    },
    {
        q: "123. Do you know any famous people in your area?",
        options: [
            { text: "Not personally, although several prominent figures in the arts reside nearby, which adds a certain prestige to the neighborhood.", score: 100, feedback: "Excellent! 'Prominent figures' and 'reside' are much more sophisticated than 'famous people' and 'live'." },
            { text: "I don't know them, but some famous artists live near me and that makes the area feel more special.", score: 50, feedback: "Context Trap! 'Prominent figures' and 'prestige' are more academic than 'famous artists' and 'special'." },
            { text: "Not personally, although several prominent figures in the arts reside nearby, which adds a certain prestige to the neighborhoods.", score: 0, feedback: "Grammar Trap! Use the singular 'neighborhood' to refer to the specific area where you live." },
            { text: "Not personally, although several prominent figures in the arts reside nearby, which add a certain prestige to the neighborhood.", score: 45, feedback: "Grammar Trap! The verb 'adds' should be singular to match the singular subject 'which' (referring to the fact that they reside there)." }
        ]
    },
    {
        q: "124. What are some changes in the area recently?",
        options: [
            { text: "Recently, there's been a significant increase in modern residential developments, which has substantially altered the local skyline.", score: 100, feedback: "Perfect! 'Significant increase' and 'substantially altered' are high-level academic descriptors." },
            { text: "Lately, they have built many new apartment buildings and now the view of the city looks very different.", score: 50, feedback: "Context Trap! 'Residential developments' and 'skyline' are more precise and professional." },
            { text: "Recently, there's been a significant increase in modern residential developments, which have substantially altered the local skyline.", score: 45, feedback: "Grammar Trap! The verb 'has' should be singular as it refers to the 'increase' (singular subject)." },
            { text: "Recently, there's been a significant increase in modern residential developments, which has substantially altered the local skylines.", score: 0, feedback: "Grammar Trap! 'Skyline' is usually singular when referring to the view of a single city or area." }
        ]
    },
    {
        q: "125. Do you know any of your neighbors?",
        options: [
            { text: "I'm on friendly terms with a few of them; we often exchange pleasantries when we cross paths in the hallway or the communal garden.", score: 100, feedback: "Excellent! 'On friendly terms,' 'exchange pleasantries,' and 'cross paths' are sophisticated and natural." },
            { text: "I know some of the people living near me, and we usually say hello when we see each other outside or in the building.", score: 50, feedback: "Context Trap! 'Exchange pleasantries' is a much more elegant way to say 'say hello'." },
            { text: "I'm on friendly terms with a few of them; we often exchange pleasantries when we cross paths in the hallway or the communal gardens.", score: 55, feedback: "Note: 'Communal garden' is usually singular unless there are specifically many different gardens." },
            { text: "I'm on friendly terms with a few of them; we often exchange pleasantry when we cross paths in the hallway or the communal garden.", score: 0, feedback: "Grammar Trap! The idiom is 'exchange pleasantries' (plural)." }
        ]
    },
    {
        q: "126. Are the people in your neighborhood nice and friendly?",
        options: [
            { text: "By and large, yes; there's a strong sense of camaraderie, and residents are generally quite considerate and helpful toward one another.", score: 100, feedback: "Perfect! 'By and large,' 'camaraderie,' and 'considerate' are top-tier C1-level words." },
            { text: "Most of them are very nice and people usually help each other and think about others in the building.", score: 50, feedback: "Context Trap! 'Camaraderie' and 'considerate' are much more expressive than 'nice' and 'help each other'." },
            { text: "By and large, yes; there's a strong sense of camaraderie, and residents are generally quite considerate and helpful toward one others.", score: 0, feedback: "Grammar Trap! The idiom is 'one another' (singular) for reciprocal action." },
            { text: "By and large, yes; there's a strong sense of camaraderie, and residents are generally quite consider and helpful toward one another.", score: 45, feedback: "Grammar Trap! You need the adjective 'considerate' here, not the verb 'consider'." }
        ]
    },
    {
        q: "127. Do you live in a noisy or a quiet area?",
        options: [
            { text: "Fortunately, I reside in a relatively tranquil area, as it's tucked away from the main thoroughfares and heavy traffic.", score: 100, feedback: "Excellent! 'Tranquil,' 'tucked away,' and 'thoroughfares' are very sophisticated vocabulary choices." },
            { text: "I live in a very quiet place because it is not near the big roads or all the loud cars and traffic.", score: 50, feedback: "Context Trap! 'Tranquil' and 'main thoroughfares' are more academic than 'quiet' and 'big roads'." },
            { text: "Fortunately, I reside in a relatively tranquil area, as it's tucked away from the main thoroughfares and heavy traffics.", score: 0, feedback: "Grammar Trap! 'Traffic' is an uncountable noun and should not be pluralized." },
            { text: "Fortunately, I reside in a relatively tranquil area, as it's tucked away from the main thoroughfare and heavy traffic.", score: 55, feedback: "Note: 'Thoroughfares' (plural) is more common when referring to the general network of roads." }
        ]
    },
    {
        q: "128. What city do you live in?",
        options: [
            { text: "I'm currently based in a bustling metropolis that serves as a major economic and cultural hub for the entire region.", score: 100, feedback: "Perfect! 'Based in,' 'bustling metropolis,' and 'cultural hub' are high-level academic descriptors." },
            { text: "I live in a very big and busy city that is important for money and culture in this part of the country.", score: 50, feedback: "Context Trap! 'Bustling metropolis' and 'economic hub' are much more professional for an IELTS context." },
            { text: "I'm currently based in a bustling metropolis that serves as a major economic and cultural hubs for the entire region.", score: 0, feedback: "Grammar Trap! 'Hub' should be singular when referring to the city itself." },
            { text: "I'm currently based in a bustling metropolis that serve as a major economic and cultural hub for the entire region.", score: 45, feedback: "Grammar Trap! The verb 'serves' must be singular to match the singular subject 'metropolis'." }
        ]
    },
  {
        q: "129. Do you like this city? Why?",
        options: [
            { text: "I'm immensely fond of it, primarily due to the diverse cultural experiences and the high standard of living it provides.", score: 100, feedback: "Excellent! 'Immensely fond,' 'diverse cultural experiences,' and 'standard of living' are top-tier descriptors." },
            { text: "I like this city very much because there are many things to do and it is a very comfortable place to live.", score: 50, feedback: "Context Trap! 'Diverse cultural experiences' and 'standard of living' are much more professional for an exam." },
            { text: "I'm immensely fond of it, primarily due to the diverse cultural experiences and the high standard of lives it provides.", score: 0, feedback: "Grammar Trap! 'Life' should be singular in the fixed phrase 'standard of living'." },
            { text: "I'm immensely fond of it, primary due to the diverse cultural experiences and the high standard of living it provides.", score: 45, feedback: "Grammar Trap! You need the adverb 'primarily' to modify the prepositional phrase." }
        ]
    },
    {
        q: "130. How long have you lived in this city?",
        options: [
            { text: "I've been a resident here for approximately a decade, which has given me ample time to explore its hidden gems and unique neighborhoods.", score: 100, feedback: "Perfect! 'Resident,' 'approximately a decade,' and 'ample time' are sophisticated ways to describe time." },
            { text: "I have lived in this city for about ten years, so I know many of the secret places and different areas very well.", score: 50, feedback: "Context Trap! 'Hidden gems' and 'unique neighborhoods' are much stronger vocabulary choices." },
            { text: "I've been a resident here for approximately a decade, which has given me ample time to explore its hidden gems and unique neighborhood.", score: 45, feedback: "Grammar Trap! Use the plural 'neighborhoods' when referring to the different areas of a city." },
            { text: "I've been a resident here for approximately a decade, which have given me ample time to explore its hidden gems and unique neighborhoods.", score: 0, feedback: "Grammar Trap! The verb 'has' should be singular to match the singular subject 'which' (referring to being a resident)." }
        ]
    },
    {
        q: "131. Are there big changes in this city?",
        options: [
            { text: "Indeed; the city has undergone a dramatic transformation, particularly in its infrastructure and the revitalization of old industrial districts.", score: 100, feedback: "Excellent! 'Undergone a transformation,' 'infrastructure,' and 'revitalization' are fantastic C1-level terms." },
            { text: "Yes, the city has changed a lot, especially with the new roads and making the old factory areas look better.", score: 50, feedback: "Context Trap! 'Infrastructure' and 'revitalization' are more precise and higher-level than 'new roads' and 'making look better'." },
            { text: "Indeed; the city has undergone a dramatic transformation, particularly in its infrastructure and the revitalization of old industrial district.", score: 0, feedback: "Grammar Trap! Use the plural 'districts' to refer to the various areas." },
            { text: "Indeed; the city has undergone a dramatic transformation, particularly in its infrastructure and the revitalizing of old industrial districts.", score: 90, feedback: "Note: 'Revitalizing' is acceptable, but 'revitalization' is the stronger noun form for this context." }
        ]
    },
    {
        q: "132. Is this city your permanent residence?",
        options: [
            { text: "While I'm settled here for now, I wouldn't rule out relocating in the future if a compelling career opportunity were to arise elsewhere.", score: 100, feedback: "Perfect! 'Rule out,' 'relocating,' and 'compelling career opportunity' are top-tier academic expressions." },
            { text: "I live here now, but maybe I will move to a different city later if I find a very good job in another place.", score: 50, feedback: "Context Trap! 'Rule out relocating' and 'compelling' are much more sophisticated than 'maybe I will move'." },
            { text: "While I'm settled here for now, I wouldn't rule out relocating in the future if a compelling career opportunity was to arise elsewhere.", score: 95, feedback: "Note: 'Was' is common, but 'were' is the correct subjunctive form for hypothetical situations." },
            { text: "While I'm settled here for now, I wouldn't rule out relocate in the future if a compelling career opportunity were to arise elsewhere.", score: 0, feedback: "Grammar Trap! You need the gerund 'relocating' after the phrase 'rule out'." }
        ]
    },
    {
        q: "133. Are there people of different ages living in this city?",
        options: [
            { text: "Certainly; the city boasts a multi-generational population, which contributes to a rich tapestry of perspectives and social dynamics.", score: 100, feedback: "Excellent! 'Multi-generational population,' 'rich tapestry,' and 'social dynamics' are highly sophisticated choices." },
            { text: "Yes, there are many people of all ages here, and it is good to have young and old people living together in one place.", score: 50, feedback: "Context Trap! 'Multi-generational' and 'social dynamics' are much stronger for an academic exam." },
            { text: "Certainly; the city boasts a multi-generational population, which contributes to a rich tapestry of perspective and social dynamics.", score: 45, feedback: "Grammar Trap! Use the plural 'perspectives' to refer to the many viewpoints of different people." },
            { text: "Certainly; the city boasts a multi-generational population, which contribute to a rich tapestry of perspectives and social dynamics.", score: 0, feedback: "Grammar Trap! The verb 'contributes' must be singular to match the singular subject 'population'." }
        ]
    },
    {
        q: "134. Are the people friendly in the city?",
        options: [
            { text: "In my experience, the locals are remarkably hospitable and possess a welcoming demeanor that makes newcomers feel at home.", score: 100, feedback: "Perfect! 'Remarkably hospitable,' 'welcoming demeanor,' and 'at home' are top-tier descriptors." },
            { text: "I think the people here are very nice and they act in a way that helps new people feel comfortable in the city.", score: 50, feedback: "Context Trap! 'Welcoming demeanor' is a much more elegant way to describe how people act." },
            { text: "In my experience, the locals are remarkably hospitable and possess a welcoming demeanor that make newcomers feel at home.", score: 0, feedback: "Grammar Trap! The verb 'makes' must be singular to match the singular subject 'demeanor'." },
            { text: "In my experience, the locals are remarkably hospital and possess a welcoming demeanor that makes newcomers feel at home.", score: 40, feedback: "Vocabulary Trap! 'Hospitable' means friendly; a 'hospital' is a place for medical treatment." }
        ]
    },
    {
        q: "135. Is the city friendly to children and old people?",
        options: [
            { text: "Extremely; the urban planning prioritizes inclusivity, with numerous accessible parks and specialized facilities for both demographics.", score: 100, feedback: "Excellent! 'Urban planning,' 'inclusivity,' and 'demographics' are professional and precise academic terms." },
            { text: "Yes, the city is good for them because there are many parks they can use and special buildings to help young and old people.", score: 50, feedback: "Context Trap! 'Prioritizes inclusivity' and 'demographics' are much more sophisticated than 'good for them'." },
            { text: "Extremely; the urban planning prioritizes inclusivity, with numerous accessible parks and specialized facility for both demographics.", score: 0, feedback: "Grammar Trap! Use the plural 'facilities' to refer to the various types of assistance available." },
            { text: "Extremely; the urban planning prioritize inclusivity, with numerous accessible parks and specialized facilities for both demographics.", score: 45, feedback: "Grammar Trap! The verb 'prioritizes' must be singular to match the singular subject 'planning'." }
        ]
    },
    {
        q: "136. Do you often see your neighbors?",
        options: [
            { text: "We encounter each other periodically, and while we're not close friends, we always maintain a polite and cordial relationship.", score: 100, feedback: "Perfect! 'Encounter periodically,' 'maintain,' and 'cordial' are high-level social descriptors." },
            { text: "I see them sometimes, and even if we don't talk a lot, we are always nice and friendly to each other.", score: 50, feedback: "Context Trap! 'Cordial' is a more sophisticated and precise way to describe a polite, non-intimate relationship." },
            { text: "We encounter each other periodically, and while we're not close friends, we always maintain a polite and cordial relationships.", score: 0, feedback: "Grammar Trap! 'Relationship' should be singular when describing the general state of your interaction." },
            { text: "We encounter each other periodically, and while we're not close friends, we always maintain a polite and cordially relationship.", score: 45, feedback: "Grammar Trap! You need the adjective 'cordial' to describe the noun 'relationship'." }
        ]
    },
    {
        q: "137. What's the weather like where you live?",
        options: [
            { text: "The climate is characterized by its temperate nature, with distinct seasonal variations that range from mild summers to brisk winters.", score: 100, feedback: "Excellent! 'Temperate nature,' 'seasonal variations,' and 'brisk' are top-tier meteorological descriptors." },
            { text: "The weather is usually okay, but it changes through the year from warm in the summer to cold in the winter.", score: 50, feedback: "Context Trap! 'Temperate nature' and 'brisk' are more precise and higher-level than 'okay' and 'cold'." },
            { text: "The climate is characterized by its temperate nature, with distinct seasonal variation that range from mild summers to brisk winters.", score: 45, feedback: "Grammar Trap! Use the plural 'variations' to refer to the different changes across the seasons." },
            { text: "The climate is characterized by its temperate nature, with distinct seasonal variations that range from mild summers to brisk winter.", score: 0, feedback: "Grammar Trap! Use the plural 'winters' to match 'summers' and refer to the season in general." }
        ]
    },
    {
        q: "138. Would you recommend your city to others?",
        options: [
            { text: "Without hesitation; I believe it offers a unique blend of historical charm and modern innovation that would appeal to any visitor.", score: 100, feedback: "Perfect! 'Without hesitation,' 'unique blend,' and 'innovation' are sophisticated and persuasive choices." },
            { text: "Yes, I would tell people to come here because it has old and new things that I think everyone will like to see.", score: 50, feedback: "Context Trap! 'Unique blend' and 'historical charm' are much more expressive than 'old and new things'." },
            { text: "Without hesitation; I believe it offers a unique blend of historical charm and modern innovation that would appeal to any visitors.", score: 0, feedback: "Grammar Trap! 'Visitor' should be singular here when referring to the general type of person ('any visitor')." },
            { text: "Without hesitation; I believe it offer a unique blend of historical charm and modern innovation that would appeal to any visitor.", score: 45, feedback: "Grammar Trap! The verb 'offers' must be singular to match the singular subject 'it'." }
        ]
    },
  
];