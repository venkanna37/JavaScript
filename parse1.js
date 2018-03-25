
//Prints the number of features with “lit” property yes
var file= require('./combined.json');
var count=0;
for (var i=0;i<file.features.length;i++)
{
  if(file.features[i].properties.lit === 'yes'){
    count++;
  }
}
console.log('number of lit=',count);

//Prints the number of points, linestrings and polygons in this geojson
var count=0,count1=0,count2=0;
for (var i=0;i<file.features.length;i++)
{
  if(file.features[i].geometry.type === 'Point'){
    count++;
  }
}
console.log('number of points=',count);
for (var i=0;i<file.features.length;i++){
if(file.features[i].geometry.type === 'Polygon'){
  count1++;
}
}
console.log('number of polygons=',count1);
for (var i=0;i<file.features.length;i++){
  if(file.features[i].geometry.type === 'LineString'){
    count2++;
  }
}
console.log('number of linestrings=',count2);


//Prints all the features whose names are longer than 20 characters
var count=0;
for (var i=0;i<file.features.length;i++)
{
  if(file.features[i].properties.name){
 if(file.features[i].properties.name.length>20){
    count++;
  }
}
}
console.log('number of names which had >20 letters=',count);

//Prints the number of features which are in the city Roma
var count=0;
for (var i=0;i<file.features.length;i++)
{
  if(file["features"][i]["properties"]["is_in:city"] === 'Roma'){

    count++;
}
}
console.log('number of properties in roma city=',count);


//Prints the features and the number of features created by JOSM
var count=0;
for (var i=0;i<file.features.length;i++)
{
  if(file.features[i].properties.created_by === 'JOSM'){

    count++;
}
}
console.log('number of properties created by JOSM=',count);


//Find the number of highways having at most 4 lanes
var count=0;
for (var i=0;i<file.features.length;i++)
{
  if(file.features[i].properties.lanes<=4){
  count++;
}
}
console.log('number of properties which had <=4 lanes=',count);


//Find the number of highways having 4 or more lanes.
var count=0;
for (var i=0;i<file.features.length;i++)
{
  if(file.features[i].properties.lanes>=4){
  count++;
}
}
console.log('number of properties which had >=4 lanes=',count);
