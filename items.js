

const posts = [];

const Søgne = [

    ['Søgne/DSC05846.jpg','',''],
    ['Søgne/DSC05843.jpg','',''],
    ['Søgne/DSC05839.jpg','',''],
    ['Søgne/DSC05836.jpg','',''],
    ['Søgne/DSC05834.jpg','',''],
    ['Søgne/DSC05819.jpg','',''],
    ['Søgne/DSC05804.jpg','',''],
    ['Søgne/DSC05789.jpg','',''],
    ['Søgne/DSC05686.jpg','',''],
    ['Søgne/DSC05591.jpg','',''],
    ['Søgne/DSC05585.jpg','',''],
    ['Søgne/DSC05182.jpg','',''],
    ['Søgne/DSC05177.jpg','',''],
    ['Søgne/DSC05172.jpg','',''],
    ['Søgne/ikke komprimerte bilder/DSC05679.jpg','',''],
    ['Søgne/ikke komprimerte bilder/DSC05672.jpg','',''],
    //['Søgne/DSC05132.jpg','',''],
    ['Søgne/DSC05115.jpg','',''],
    ['Søgne/ikke komprimerte bilder/DSC05908.jpg','','']


];

const Kjellandsheia = [

    //['Søgne/DSC_0034.jpg','Bie på blomst',''],
    //['Kjellandsheia/DSC05622.jpg','','19/07-23'],
    ['Søgne/DSC_0419.jpg','','02/07-23'],
    //['Søgne/DSC_0017.jpg','','23/06-23'],
    ['Søgne/DSC_0020.jpg','','23/06-23'],
    ['Kjellandsheia/DSC05619.jpg','','19/07-23'],
    ['Kjellandsheia/DSC05860.jpg','','19/07-23'],
    ['Kjellandsheia/DSC05648.jpg','','19/07-23'],
    ['Kjellandsheia/DSC05667.jpg','','19/07-23'],
    ['Kjellandsheia/DSC05655.jpg','','19/07-23'],
    ['Kjellandsheia/DSC05658.jpg','','19/07-23'],
    

    
    
];

const Ravnedalen = [

    //['Ravnedalen/DSC05293.jpg','','13/07-23'],
    //['Ravnedalen/DSC05299.jpg','','13/07-23'],
    ['Ravnedalen/DSC05263.jpg','Beharie','13/07-23'],
    ['Ravnedalen/DSC05270.jpg','','13/07-23'],
    
    ['Ravnedalen/DSC05403.jpg','HIGHASAKITE','13/07-23'],
    ['Ravnedalen/DSC05407.jpg','HIGHASAKITE','13/07-23'],
    ['Ravnedalen/DSC05426.jpg','HIGHASAKITE','13/07-23'],

    ['Ravnedalen/DSC05545.jpg','Rocket Man','13/07-23'],
    ['Ravnedalen/DSC05546.jpg','Rocket Man','13/07-23'],

    ['Ravnedalen/DSC05308.jpg','HIGHASAKITE','13/07-23'],
    ['Ravnedalen/DSC05343.jpg','HIGHASAKITE','13/07-23'],

    ['Ravnedalen/DSC05466.jpg','','13/07-23'],
    ['Ravnedalen/DSC05467.jpg','','13/07-23'],

    ['Ravnedalen/DSC05389.jpg','HIGHASAKITE','13/07-23'],
    ['Ravnedalen/DSC05393.jpg','HIGHASAKITE','13/07-23'],

];

const Vinter = [

    ['Vinter/P2280116.jpg','Selfieruta','28/02-23'],
    ['Vinter/P5191352.jpg','Over Alpene',''],
    
    ['Vinter/P4301204.jpg','Påske',''],
    ['Vinter/P3010550.jpg','','01/03-23'],

    ['Vinter/P2280127.jpg','Påfyll','28/02-23'],
    
    ['Vinter/P2280449.jpg','',''],
    
    ['Vinter/DSC_0064.jpg','Skoleveien hjem',''],

    ['Vinter/P5191344.jpg','Over Alpene',''],
    ['Vinter/P1200407.jpg','Sørhellinga','20/01-23'],
    ['Vinter/DSC_0066.jpg','Skoleveien hjem',''],

    ['Vinter/P1200411.jpg','Sørhellinga - far og sønn','20/01-23'],
    ['Vinter/P3010535.jpg','','01/03-23'],
    ['Vinter/IMG_2917.jpg','fart','28/02-23'],

    ['Vinter/DSC_0008.jpg','Skoleveien hjem',''],
    ['Vinter/P3010493.jpg','','01/03-23'],
    ['Vinter/IMG_2916.jpg','vitamin D','28/02-23']

    
];

const Vår = [];

const Sommer = [

    ['Sommer/P3230515.jpg','Le Havre',''],
    ['Sommer/P7172590.jpg','Vannliljer','Paris'],
    ['Portugal/P6010003.jpg','Gatelangs','01/06-23'],
    ['Sommer/P7192903.jpg','Paris',''],

    ['Portugal/P6040383.jpg','Quinta de Regaleira','04/06-23, Sintra'],

    ['Portugal/P6020131.jpg','Fikenkaktus','02/06-23, Jardim Botânico de Lisboa'],
    ['Portugal/P6020162.jpg','Påfugler','02/06-23, Jardim Botânico de Lisboa'],

    ['Sommer/P5312456.jpg','På vannet',''],
    ['Sommer/P7232941.jpg','Amsterdam',''], 
    ['Sommer/P7232952.jpg','Amsterdam',''],
    ['Sommer/P5312473.jpg','På vannet',''],
    ['Portugal/P6040445.jpg','Quinta de Regaleira','04/06-23, Sintra'],
    ['Sommer/P5292274.jpg','Hetebølge',''],
    ['Sommer/P5292317.jpg','Første blikk av Napoli',''],
    ['Sommer/P5292245.jpg','Hetebølge',''],
    ['Sommer/P5221821.jpg','',''], 
    ['Sommer/P7172598.jpg','Musée de Montmartre',''],
    ['Sommer/P5211548.jpg','',''],
    ['Portugal/P6040420.jpg','Quinta de Regaleira','04/06-23, Sintra'],
    ['Sommer/P8120040.jpg','Sørenga',''],
    ['Sommer/P5251986.jpg','Santa Maria del Fiore',''],
];

const Høst = [
    //['Høst/PA300161.jpg','Eika','24/06-23'],
    //['Søgne/DSC_0017.jpg','','23/06-23'],
    //['Søgne/DSC_0034.jpg','Bie på blomst',''],
    //['Søgne/DSC05783.jpg','',''],
    //['Søgne/DSC05781.jpg','',''],
    //['Høst/DSC05966.jpg', '','08/10-23'],
    
    ['Høst/DSC05941.jpg', '','08/10-23'],
    ['Høst/DSC05989.jpg', '','08/10-23'],
    ['Høst/DSC05963.jpg', '','08/10-23'],
    ['Høst/DSC05976.jpg', '','08/10-23'],
    ['Høst/DSC05970.jpg', '','08/10-23'],
    ['Høst/DSC05958.jpg', '','08/10-23'],
];



const Portretter = [
   

    ['Portugal/P6050974.jpg','Palace Fronteira','02/06-23'], //Nora

    ['Portugal/IMG_5850.jpg','Palace Fronteira','02/06-23'], //Nora
    ['Portugal/IMG_5847.jpg','Jardim Botânico de Lisboa','02/06-23'], //Nora

    ['Portretter/DSC_0327.jpg','Topdalselva','04/07-23, Live Bore Svela'],
    ['Portretter/DSC_0316.jpg','Topdalselva','04/07-23, Live Bore Svela'],

    ['Portugal/P6020097.jpg','Jardim Botânico de Lisboa','02/06-23'], //Nora
    ['Portugal/P6050978.jpg','Palace Fronteira','02/06-23'], //Nora

    ['Portugal/P6020343.jpg','',''], //Alex
    ['Portugal/P6050581.jpg','Palace Fronteira','02/06-23'], //Nora


];

const Homepage = [
    ['Forside/P3230501.jpg','Le Havre',''],
    ['Forside/Ikke komprimerte filer/DSC_0244.jpg','Ingrid & Markus','09/02-23'],
    
    ['Forside/P5201464.jpg','Uffizi',''],
    ['Forside/P5201508.jpg','Uffizi',''],
    ['Forside/DSC_1115.jpg','Søm'],
    ['Forside/P7243106.jpg','Amersterdam Lovers',''],

    ['Forside/P8013636.jpg','',''],
    ['Forside/P1220418.jpg','Kinto, Ås'],
    ['Forside/PC300151.jpg','Nysnø',''],

    ['Forside/P7303580.jpg','Praha',''],
    ['Forside/PC300127.jpg','Nysnø',''],
    ['Forside/PC310199.jpg','Nyttår'],
    
    ['Ravnedalen/DSC05546.jpg','Rocket Man','13/07-23'],
    ['Forside/P1220406.jpg','Kinto, Ås'],
    ['Ravnedalen/DSC05545.jpg','Rocket Man','13/07-23'],

    ['Forside/PC310281.jpg','Nyttår',''],
    ['Ravnedalen/DSC05299.jpg','','13/07-23'],
    ['Forside/DSC_0440.jpg','Supermånen i Søgne, dobbeleksponering','03/07-23'],
    
];





// HOMEPAGE MASONRY GRID - 'image' array is used

// This block of code is creating an array of posts (posts) from the H 
// array. Each post is an object with an id, title, image, and potentially a 
// subtitle. The posts are created in reverse order from the H array, 
// wrapping back to the last item once all items have been processed.


// Set imageIndex to the last index of the H array. This indicates that we're starting from the last image
let imageIndex = Homepage.length - 1;

// A for loop that runs as many times as the length of the H array. 
// The goal is to process each element of the H array.
for (let i = 1; i <= Homepage.length; i++) {
    // Create a new object for each iteration which represents a post. 
    // The post contains id, title, and image properties.
    let item = {
        title: '',
        id: i,
        image: '',
    };

    // Check if the element at the imageIndex of the H array is an array. 
    // If true, this means the image has additional details.
    if (Array.isArray(Homepage[imageIndex])) {
        // Assign the second element of the sub-array to the title of the post
        item.title = Homepage[imageIndex][1];
        
        // Assign the first element of the sub-array to the image of the post
        item.image = Homepage[imageIndex][0];
        
        // Assign the third element of the sub-array to the subtitle of the post. 
        // If the third element does not exist, an empty string will be assigned.
        item.subtitle = Homepage[imageIndex][2] || '';
    } else {
        // If the element at the imageIndex is not an array, then it's assumed to be a string containing an image URL
        // Assign the element to the image of the post
        item.image = Homepage[imageIndex];
    }

    // Add the newly created item (post) to the posts array
    posts.push(item);
    
    // Decrease the imageIndex by 1 to move to the previous element in the H array
    imageIndex--;
    
    // Check if the imageIndex is less than 0, which means we have processed all elements in the H array
    if (imageIndex < 0)
        // If all elements have been processed, reset imageIndex to the last index of the H array
        imageIndex = H.length - 1;
}


