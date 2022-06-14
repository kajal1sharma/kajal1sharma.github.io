import Photo from "./getPhoto";

function SearchPhotoinArray(key){
    const match=[];
        
          Photo.PhotoArray.map(ele=>{
            if(ele.includes(key)){
                match.push(ele);
            }
          })

          return match;
}


export default SearchPhotoinArray;