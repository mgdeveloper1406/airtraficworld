import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"LSZH Apron (South)",
            artist: "Zurich, Switzerland",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://s1-bos.liveatc.net/lszh1_apr_s?nocache=2023033018281146619",
            active: true,       
         },
        {   
            name:"CYQM Gnd/Twr/Misc - Moncton",
            artist: "New Brunswick, Canada",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://s1-fmt2.liveatc.net/cyqm_gnd_twr?nocache=2023033018292017188",
            active: false,
        },
        {
            
            name:"RJTT Tokyo Control",
            artist: "Tokyo, Japan",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://s1-bos.liveatc.net/rjtt_control?nocache=2023033018302892205",
            active: false,
        },
        {
            name:"VHHH App/Dep/Dir/Zone",
            artist: "Hong Kong, Hong Kong",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://s1-bos.liveatc.net/vhhh5?nocache=2023033018330240734",
            active: false,
        },
        {
            name:"SBPB Info - Parnaiba",
            artist: "Brazil",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://s1-fmt2.liveatc.net/sbpb2?nocache=2023033018341212402",
            active: false,
        },
        {
            name:"MMMX Tower",
            artist: "Mexico City, Mexico",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://s1-fmt2.liveatc.net/mmmx1_twr?nocache=2023033018371712084",
            active: false,
        },
        {
            name:"UUEE Twr/App/Radar",
            artist: "Moscow, Russia",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://s1-fmt2.liveatc.net/uuee3?nocache=2023033018350465337",
            active: false,       
        },
        {
            name:"CYVR App/Dep #1 ",
            artist: "Vancouver, British Columbia, Canada",
            cover: "https://cdn.xxl.thumbs.canstockphoto.com/illustration-of-radar-vector-clipart_csp5212180.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://s1-bos.liveatc.net/cyvr1_app?nocache=2023033018360014111",
            active: false,
      
        },
    ];
}

export default chillHop;


