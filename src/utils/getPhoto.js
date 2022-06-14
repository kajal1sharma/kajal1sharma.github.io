const Photoobj={
  SmallPhotoArray:[
    'andy-omvik-314673-unsplash.jpg',
    'anthony-delanoix-14637-unsplash.jpg',
    'artem-sapegin-328056-unsplash.jpg',
    'cristian-newman-277738-unsplash.jpg',
    'jon-tyson-112003-unsplash.jpg',
    'julia-caesar-70387-unsplash.jpg',
    'kevin-hou-40210-unsplash.jpg',
    'marcus-zymmer-189539-unsplash.jpg',
    'stefano-zocca-562752-unsplash.jpg',
    'sven-read-623804-unsplash.jpg'
  ],
  PhotoArray :[
 
    'andy-omvik-314673-unsplash2.jpg',
    'anthony-delanoix-14637-unsplash (1).jpg',
    'artem-sapegin-328056-unsplash2.jpg',
    'cristian-newman-277738-unsplash2.jpg',
    'folderimage.jpg',
    'jon-tyson-112003-unsplash (1).jpg',
    'julia-caesar-70387-unsplash (1).jpg',
    'kevin-hou-40210-unsplash (1).jpg',
    'marcus-zymmer-189539-unsplash (1).jpg',
    'stefano-zocca-562752-unsplash (1).jpg',
    'sven-read-623804-unsplash (1).jpg'
  ]
}

 export default Photoobj;


//code for backend
// const fs = require('fs')

// const dir = '../photos'
// const files = fs.readdirSync(dir)
// let arrayFile =[];
// for (const file of files) {
//   console.log(file);
//   const sizeOf = require('image-size')
// const dimensions = sizeOf("../photos/"+file)
// console.log(dimensions.width, dimensions.height);
// if(dimensions.width<=90 && dimensions.height<=90){
//     arrayFile.push(file);

// }
// }
// console.log( arrayFile)