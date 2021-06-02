function convertToCastString(casts,cut){
  let castsjoin = [];
  for(let index in casts){
    // console.log(casts[index].name)
    castsjoin.push(casts[index].name)
    // console.log(castsjoin)
  }
  return castsjoin.join(cut);
}
function convertToCastInfos(casts){
  let castsArray = []
  for(let index in casts){
    console.log(casts[index].avatars.large,casts[index].name)
    let cast = {
      img: casts[index].avatars ? casts[index].avatars.large:'',
      name:casts[index].name
    }
    castsArray.push(cast)
  }
  return castsArray;
}
export {
  convertToCastString,
  convertToCastInfos
}