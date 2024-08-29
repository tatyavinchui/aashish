function generatePickupLine() {
    const pickupLines = [
        "तुझं हसणं म्हणजे माझ्यासाठी अमृत आहे, आणि मला रोज जिवंत रहायचंय.",
        "तुझं हसणं म्हणजे माझ्यासाठी अमृत आहे, आणि मला रोज जिवंत रहायचंय.",
         "तू हसलीस की, माझ्या मनाचं गाणं सूर पकडतं.",
           "तुझं हसणं इतकं खास आहे की, ते पाहून माझं मन मोहून जातं.❤️",
           "तुझ्या प्रत्येक गोष्टीत अशी काही मोहकता आहे की, माझं लक्ष तुझ्यावरून हटतच नाही.😍",
        "Tuza gharat konta rice khala jato indaryani ki kolam",
        "Are you a snowflake? Because you’ve fallen straight from heaven.",
         "If you were a triangle, you’d be acute one.",
         "Do you have a pencil? Because I want to erase your past and write our future.",
       "Can I follow you home? Because my parents always told me to follow my dreams.",
      "Is your dad a boxer? Because you’re a knockout!",
    "If you were a burger at McDonald’s, you’d be the McGorgeous.",
     "Are you a campfire? Because you’re hot and I want s’more.",
      "Are you made of copper and tellurium? Because you’re Cu-Te.",
     "Do you have a quarter? Because I want to call my mom and tell her I met ‘the one.’",
    "Is your name Ariel? Because we mermaid for each other.",
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "Do you have a map? Because I keep getting lost in your eyes.",
        "Is your name Google? Because you have everything I’ve been searching for.",
        "Are you a parking ticket? Because you’ve got ‘FINE’ written all over you.",
        "Do you believe in love at first sight—or should I walk by again?"
    ];

    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    document.getElementById('pickup-line').innerText = pickupLines[randomIndex];
}
