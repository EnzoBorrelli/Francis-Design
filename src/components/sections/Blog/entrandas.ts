import hanary from '../../../assets/images/hanary.jpg'


interface EntradaContenido{
    id: number;
    CoverColor: string; //color de la tapa
    BookTitle: string; //titulo del libro

    page1bg: string; // foto de fondo pag1(back de la portada)
    page1content: string; // texto de pag1

    page2bgF: string; //bgF = background Front
    page2contentF: string;
    page2bgB: string; //b = Back
    page2contentB: string;

    page3bgF: string; //bgF = background Front
    page3contentF: string;
    page3bgB: string; //b = Back
    page3contentB: string;

    page4bgF: string; //bgF = background Front
    page4contentF: string;
    page4bgB: string; //b = Back
    page4contentB: string;

    page5bg: string; //frente de la contratapa
    page5content: string;

}

interface DataEntradas{
    entradas:EntradaContenido[];
}
const dataEntradas: DataEntradas = {
    entradas:[
        {
            id: 1,
            CoverColor: "pink", //color de la tapa
            BookTitle: "this is a title", //titulo del libro
        
            page1bg: hanary, // foto de fondo pag1(back de la portada)
            page1content: "", // texto de pag1
        
            page2bgF: "", //bgF = background Front
            page2contentF: "front2",
            page2bgB: "", //b = Back
            page2contentB: "back2",
        
            page3bgF: "", //bgF = background Front
            page3contentF: "front3",
            page3bgB: "", //b = Back
            page3contentB: "back3",
        
            page4bgF: "", //bgF = background Front
            page4contentF: "front4",
            page4bgB: "", //b = Back
            page4contentB: "back4",
        
            page5bg: "", //frente de la contratapa
            page5content: "front5"
        },
        {
            id: 2,
            CoverColor: "red", //color de la tapa
            BookTitle: "this is also title", //titulo del libro
        
            page1bg: "", // foto de fondo pag1(back de la portada)
            page1content: "", // texto de pag1
        
            page2bgF: hanary, //bgF = background Front
            page2contentF: "",
            page2bgB: "", //b = Back
            page2contentB: "y viste es todo un tema",
        
            page3bgF: "", //bgF = background Front
            page3contentF: "front3",
            page3bgB: "", //b = Back
            page3contentB: "back3",
        
            page4bgF: "", //bgF = background Front
            page4contentF: "front4",
            page4bgB: hanary, //b = Back
            page4contentB: "back4",
        
            page5bg: "", //frente de la contratapa
            page5content: "front5"
        },
        {
            id: 3,
            CoverColor: "lightblue", //color de la tapa
            BookTitle: "this is not a title", //titulo del libro
        
            page1bg: "", // foto de fondo pag1(back de la portada)
            page1content: "", // texto de pag1
        
            page2bgF: "", //bgF = background Front
            page2contentF: "front2",
            page2bgB: "", //b = Back
            page2contentB: "back2",
        
            page3bgF: "", //bgF = background Front
            page3contentF: "front3",
            page3bgB: "", //b = Back
            page3contentB: "back3",
        
            page4bgF: "", //bgF = background Front
            page4contentF: "front4",
            page4bgB: "", //b = Back
            page4contentB: "back4",
        
            page5bg: hanary, //frente de la contratapa
            page5content: "front5"
        },
    ]
};
export default dataEntradas;