import { Card } from "@material-ui/core";
import Quizlet from "./quizlet";
const RandomFlag = () =>{
    const quiz = [
        {
            name: "agender",
            src: "./images/Agender2.jpg"
        },
        {
            name: "ally",
            src: "./images/ally.jpg"
        },
        {
            name: "androgynous",
            src: "./images/androgynous.jpg"
        },
        {
            name: "aromantic",
            src: "./images/aromantic.jpg"
        },
        {
            name: "asexual",
            src: "./images/asexual.jpg"
        },
        {
            name: "bear",
            src: "./images/bear.jpg"
        },
        {
            name: "bigender",
            src: "./images/bigender.jpg"
        },
        {
            name: "bisexual",
            src: "./images/bisexual.jpg"
        },
        {
            name: "butch lesbian",
            src: "./images/butch_lesbian.jpg"
        },
        {
            name: "demiboy",
            src: "./images/demiboy.jpg"
        },
        {
            name: "demigender",
            src: "./images/demigender.jpg"
        },
        {
            name: "demigirl",
            src: "./images/demigirl.jpg"
        },
        {
            name: "gay",
            src: "./images/gay-pride.jpg"
        },
        {
            name: "gender questioning",
            src: "./images/gender-questioning.jpg"
        },
        {
            name: "genderfluid",
            src: "./images/genderfluid.jpg"
        },
        {
            name: "genderflux",
            src: "./images/genderflux.jpg"
        },
        {
            name: "genderqueer",
            src: "./images/genderqueer.jpg"
        },
        {
            name: "gilbert baker",
            src: "./images/gilbert-baker.jpg"
        },
        {
            name: "graysexual",
            src: "./images/graysexual.jpg"
        },
        {
            name: "hijra",
            src: "./images/hijra.jpg"
        },
        {
            name: "intersex",
            src: "./images/intersex.jpg"
        },
        {
            name: "labrys",
            src: "./images/labrys.jpg"
        },
        {
            name: "leather",
            src: "./images/leather.jpg"
        },
        {
            name: "lesbian",
            src: "./images/lesbian.jpg"
        },
        {
            name: "maverique",
            src: "./images/maverique.jpg"
        },
        {
            name: "neutrois",
            src: "./images/neutrois.jpg"
        },
        {
            name: "nonbinary",
            src: "./images/nonbinary.jpg"
        },
        {
            name: "omnisexual",
            src: "./images/omnisexual-2.jpg"
        },
        {
            name: "pangender",
            src: "./images/pangender-2.jpg"
        },
        {
            name: "pansexual",
            src: "./images/pansexuality.jpg"
        },
        {
            name: "pocket gender",
            src: "./images/pocket-gender.jpg"
        },
        {
            name: "polyamory",
            src: "./images/polyamory.jpg"
        },
        {
            name: "polysexual",
            src: "./images/polysexual.jpg"
        },
        {
            name: "transgender",
            src: "./images/transgender.jpg"
        },
        {
            name: "trigender",
            src: "./images/trigender.jpg"
        },
        {
            name: "twink",
            src: "./images/twink-2.jpg"
        },
        {
            name: "two spirit",
            src: "/images/two-spirit.jpg"
        },
        
    ];
    var random = quiz[Math.floor(Math.random()*quiz.length)]
    return(
        <>
        <div className="App">
            <Card className="flagcontent">
            <img src = {random.src} alt="Flag" width="250px" height="200px"></img>
            <Quizlet props={{name: random.name}}></Quizlet>
            </Card>
        </div>
        </>
    );
}

export default RandomFlag;