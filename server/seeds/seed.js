const mongoose = require("mongoose");
const Project = require("../models/Projects");

// Use environment variable for MongoDB URI
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/partymaster";

// Connect to the MongoDB database
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedData = async () => {
    try {
        await Project.deleteMany({});

        const project1 = await Project.create({
            name: "Party Master",
            tags: ["Event Manager", "React", "Chakra UI", "GraphQL", "Node"],
            description: "Event Management Platform: Users create, discover, and manage events based on location. Register, log in, create profiles, specify event details, set visibility preferences, browse events, RSVP, and communicate with organizers and attendees. ",
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

        console.log("Dummy data seeded successfully");
        mongoose.disconnect();
    } catch (error) {
        console.error("Error seeding dummy data:", error);
        mongoose.disconnect();
    }
};

// Call the seedData function to start seeding the data
seedData();
