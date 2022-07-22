import { createStore } from 'vuex'

export default createStore({
    state: {
        projects: [{
                image: "https://i.postimg.cc/zX9QGs96/Pokedex.png",
                projectName: "Marvel Store",
                aboutProject: " 4th month Group project using vue.js to create an e-com demo",
                link: "https://effortless-cocada-955831.netlify.app/?",
                github: "",
            },
            {
                image: "https://i.postimg.cc/tTM5mPbw/Property-Listing.png",
                projectName: "Meet Us",
                aboutProject: "first group project at the start of the course",
                link: "https://effortless-cocada-955831.netlify.app/?",
                github: "",

            },
            {
                image: "https://i.postimg.cc/506G0f2c/TodoApp.png",
                projectName: "TodoApp",
                aboutProject: "simple js app adding items to a array and using crud",
                link: "https://effortless-cocada-955831.netlify.app/?",
                github: "",
            },
            {
                image: "https://i.postimg.cc/MG8KVrjr/Bmi-Calculator.png",
                projectName: "Calculator",
                aboutProject: "My js calculator",
                link: "https://thunderous-cupcake-e3d0cb.netlify.app/",
                github: "",
            },
            {
                image: "https://i.postimg.cc/qBKbZbtG/Swegga.png",
                projectName: "hexColor-to-RGB",
                aboutProject: "converts hex color values to RGB values",
                link: "https://hex-to-rgb-js.netlify.app/",
                github: "",
            },
            {
                image: "https://i.postimg.cc/VN549DQn/Temp-Calculator.png",
                projectName: "Beast-List",
                aboutProject: "This project I created a site to add products",
                github: "",
            },
        ],
        testimonials: [{
                image: "https://www.lifechoices.co.za/sites/default/files/2022-01/godwin-2022.jpg",
                name: "Godwin Dzvapatsva",
                quote: "Emile has a very gentle personality. Since joining Lifechoices Academy, Emile has shown great enthusiasm for coding. He is hard-working and gets along well with his classmates. I am confident that he will continue to be productive and willing to learn new concepts. I recommend him.",
                level: "Head of Curriculum",
            },
            {
                image: "https://i.postimg.cc/JnLxwmHc/Mashalino.jpg",
                name: "Marshalino Jankowski",
                quote: "Emile van Wyk is one of the best future developers I have ever seen, he displays genuine uncapped and raw talent equipped with his unrelenting desire to be nothing but the best in everything he does. He has a friendly and helpful spirit, always assisting his colleagues when they are stuck. It has been a pleasure to call him both friend and colleague and he will be a great asset to any company that he is employed at..",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.ibb.co/QJrb9Ps/Reagan1.jpg",
                name: "Reagan Carolussen",
                quote: "Emile is highly talented and always takes initiative to better himself and his work further each day. He brings great energy to the workplace and produces even better work. His personality lights up whichever room he enters as he is ready to help anyone that needs it .It is with these qualities that I highly recommend him to any position that arises.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.ibb.co/TH6GzhT/image-1.png",
                name: "Carla Lawrence",
                quote: "Emile Van Wyk is an excellent web developer. He hones his craft and both his effort and professionalism can be seen in any projects he has worked on. His impressive skills, work ethic,  creativity and unique approach makes him an asset. Having Emile on your team or in your company is definitely advantageous and I would highly recommend him.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.ibb.co/swfjz44/joshe.jpg",
                name: "Joshe Theys",
                quote: "Emile is a talented web developer who clearly has a passion for the trade. He is a helpful individual who is always willing to assist his teammates. He has great potential to become an irreplaceable member of your company as he is always working towards improving his skills. His  bright  personality will be sure to fit in with any team and his communication skills will make working with him a breeze.",
                level: "Colleague / Peer",
            },
            {
                image: "https://i.ibb.co/jbLwdDB/amanda.jpg",
                name: "Amanda Gudlwa",
                quote: "I have known Emile for little over a month now. He is a pleasure to be around. I can say that he would be an asset to any team, of any size. Emile is a person who knows who he is and where he is going, yet he is humble and is accepting of everyone. Even outside the class room he is able to hold any conversation. Emile is secure enough to accept himself, and others. He lights up a room when he enters. Any team would be lucky to have him, he is as much of a teacher, as he is a leaner. He gracefully moves from not knowing something, to knowing it",
                level: "Colleague / Peer",
            },
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})