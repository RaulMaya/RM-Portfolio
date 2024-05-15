const mongoose = require("mongoose");
const Project = require("../models/Projects");

// Use environment variable for MongoDB URI
const mongoURI =   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/rmportfolio" || "mongodb://localhost/rmportfolio"

// Connect to the MongoDB database
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedData = async () => {
    try {
        await Project.deleteMany({});

        await Project.create({
            name: "Party Master",
            tags: ["Event Manager", "React", "Chakra UI", "GraphQL", "Node"],
            description: "Introducing our MERN-based app with GraphQL integration! Designed to revolutionize event management, our platform simplifies the process of discovering, creating, and sharing events. With seamless integration of resolvers, deftypes, and mutations, our app empowers users to effortlessly generate and modify events according to their preferences. Stay connected with friends and the community as you invite, confirm, and comment on upcoming events. Our intuitive interface ensures that users are always informed and engaged with the latest happenings. Experience the ease and convenience of event planning with our innovative app.",
            portrait: "https://raw.githubusercontent.com/RaulMaya/PartyMaster/master/readme/landing.jpg",
            images: [
                "https://raw.githubusercontent.com/RaulMaya/PartyMaster/master/readme/signup.jpg",
                "https://raw.githubusercontent.com/RaulMaya/PartyMaster/master/readme/singleevent.jpg"
            ],
            startDate: "2023-06-22",
            endDate: "2023-07-15",
            status: "Completed",
            deployment: "https://party-master-3da8572da2e5.herokuapp.com/",
            repository: "https://github.com/RaulMaya/PartyMaster/tree/master"
        });

        await Project.create({
            name: "Learning Log App",
            tags: ["Django", "Python", "CSS", "Django Models", "HTML"],
            description: "Online journal app that helps you track data, information, and statistics about a particular topic. This app, allows users to log the topics of their concerns, or interests and create journal inputs as they keep on learning and investigating about the topic. The Learning Log App home page will explain the site and invite the users/client, to either register or log in. Once logged in, the user can create new topics, add new inputs, edit existing files, and read created entries.",
            portrait: "https://raw.githubusercontent.com/RaulMaya/Learning-Log-App/master/ReadMe_Images/home.png",
            images: [
                "https://github.com/RaulMaya/Learning-Log-App/blob/master/ReadMe_Images/insert_entry2.png",
                "https://raw.githubusercontent.com/RaulMaya/Learning-Log-App/master/ReadMe_Images/Topics.png"
            ],
            startDate: "2021-04-25",
            endDate: "2021-06-06",
            status: "Completed",
            deployment: "https://learning-la.herokuapp.com/",
            repository: "https://github.com/RaulMaya/Learning-Log-App"
        });

        await Project.create({
            name: "Web Scraping: Mars Data",
            tags: ["Selenium", "Python", "Chrome Driver", "Web Scraping", "HTML"],
            description: "The project consists of developing a Web Page that is powered with a program that extracts data from different websites related to the planet Mars. All the extracted information will be stored in a Mongo database. So when the information is in the database, the program will call the new scraped data and replace the old data from our main web page with the new information from our Mongo database.",
            portrait: "https://raw.githubusercontent.com/RaulMaya/Mars-Mission-Scraping/master/images/mars.jpg",
            images: [
                "https://raw.githubusercontent.com/RaulMaya/Mars-Mission-Scraping/master/images/mars.jpg",
                "https://raw.githubusercontent.com/RaulMaya/Mars-Mission-Scraping/master/images/mars.jpg"
            ],
            startDate: "2021-02-27",
            endDate: "2021-03-17",
            status: "Completed",
            deployment: "https://scraping-mars-info.herokuapp.com",
            repository: "https://github.com/RaulMaya/Mars-Mission-Scraping"
        });

        await Project.create({
            name: "Mini Projects",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "This repository is dedicated to small projects that help me polish and practice my skills in HTML, CSS, and JavaScript. These languages are the backbone of web development, and engaging in practical projects is the most effective way to learn and master them. Each project is designed to challenge my understanding and push my abilities further. By focusing on creating diverse and interesting applications, I aim to solidify my proficiency in these essential web technologies. Join me on this journey of continuous learning and improvement through hands-on development.",
            portrait: "https://dl.dropboxusercontent.com/scl/fi/6z65kmixdv102q6on24mj/MiniProjects.png?rlkey=vdhw98umntman5lec4ucjplys&st=bt7v46l9&raw=1",
            images: [
                "https://dl.dropboxusercontent.com/scl/fi/6z65kmixdv102q6on24mj/MiniProjects.png?rlkey=vdhw98umntman5lec4ucjplys&st=bt7v46l9&raw=1",
                "https://dl.dropboxusercontent.com/scl/fi/6z65kmixdv102q6on24mj/MiniProjects.png?rlkey=vdhw98umntman5lec4ucjplys&st=bt7v46l9&raw=1"
            ],
            startDate: "2023-06-27",
            endDate: "2024-05-14",
            status: "InProgress",
            deployment: "https://raulmaya.github.io/MiniProjects/",
            repository: "https://github.com/RaulMaya/MiniProjects"
        });

        await Project.create({
            name: "Premier League Fixtures",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "This repository is dedicated to small projects that help me polish and practice my skills in HTML, CSS, and JavaScript. These languages are the backbone of web development, and engaging in practical projects is the most effective way to learn and master them. Each project is designed to challenge my understanding and push my abilities further. By focusing on creating diverse and interesting applications, I aim to solidify my proficiency in these essential web technologies. Join me on this journey of continuous learning and improvement through hands-on development.",
            portrait: "https://dl.dropboxusercontent.com/scl/fi/d3sj769t88hid23t3joft/PremierLeague.png?rlkey=qj8bd4eiauxk0jq33k1jpruhi&st=p8aceac2&raw=1",
            images: [
                "https://dl.dropboxusercontent.com/scl/fi/d3sj769t88hid23t3joft/PremierLeague.png?rlkey=qj8bd4eiauxk0jq33k1jpruhi&st=p8aceac2&raw=1",
                "https://dl.dropboxusercontent.com/scl/fi/d3sj769t88hid23t3joft/PremierLeague.png?rlkey=qj8bd4eiauxk0jq33k1jpruhi&st=p8aceac2&raw=1"
            ],
            startDate: "2023-03-21",
            endDate: "2023-05-14",
            status: "Completed",
            deployment: "https://raulmaya.github.io/MiniProjects/premier_league_fixtures/premier_league.html",
            repository: "https://github.com/RaulMaya/MiniProjects/tree/master/premier_league_fixtures"
        });

        
        console.log("Dummy data seeded successfully");
        mongoose.disconnect();
    } catch (error) {
        console.error("Error seeding dummy data:", error);
        mongoose.disconnect();
    }
};

// Call the seedData function to start seeding the data
seedData();
