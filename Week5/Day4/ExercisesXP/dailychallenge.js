class Video {
    constructor (title, uploader, time) {
        this.title = title;
        this.uploader=uploader;
        this.time=time;
    }


watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
}}


let newVideo = new Video("Wicked","John",3);
newVideo.watch();


let anotherVideo = new Video("Harry Potter","Aloni",2);
anotherVideo.watch();


const FiveVideos =[
    ["Nosferatu","Chani",2.5],
    ["Cinderella","Alonn",2],
    ["James Bond","Juno",3],
];

FiveVideos.forEach (video => {
    new Video(FiveVideos[index);
};