class movie{
    constructor(Title,Studio,Range="PG"){
        this.Title=Title,
        this.Studio=Studio,
        this.Range=Range
    }
}
const Movie1=new movie("casino Royale","Eon production","PG13");
const Movie2=new movie("casino Royale","Eon production","R")
const Movie3=new movie("casino Royale","Eon production",)
console.log(Movie1);
console.log(Movie2);
console.log(Movie3);
console.log(Movie1.Title);
console.log(Movie1.Studio);
console.log(Movie1.Range);
console.log(Movie3.Rating);