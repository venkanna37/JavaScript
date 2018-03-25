//Find all the types of highways present in this file, and extract the number of features classified under each.
var file= require('./combined.json');
var count=0,count1=0,count2=0,count3=0,count4=0,count5=0,count6=0,count7=0,count8=0,count9=0,a=0,count10=0,count11=0,count12=0;
for (var i=0;i<file.features.length;i++)
{
  if(file.features[i].properties.highway){
    a++;
    console.log(file.features[i].properties.highway);
  }
}
console.log('number of highway=',a);
for (var i=0;i<file.features.length;i++)
{
if(file.features[i].properties.highway=='pedestrian')
    {
      count++;
    }
  }
  console.log('pedestrian=',count);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='service'){
      count1++;

    }
  }console.log('service=',count1);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway==='secondary'){
      count2++;

    }
  }console.log('secondary=',count2);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='bus_stop'){
      count3++;

    }
  }console.log('bus_stop',count3);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='unclassified'){
      count4++;
    }
  }console.log('unclassified=',count4);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway==='path'){
      count5++;

    }
  }console.log('path=',count5);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway==='crossing'){
      count6++;

    }
  }console.log('crossing=',count6);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='trunk'){
      count7++;

    }
  }
  console.log('trunk=',count7);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='footway'){
      count8++;

    }
  }console.log('footway=',count8);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='residential'){
      count9++;

    }
  }console.log('residential=',count9);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='cycleway'){
      count10++;
    }
  }console.log('cycleway=',count10);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='traffic_signals'){
      count11++;
    }
  }console.log('traffic_signals=',count11);
  for (var i=0;i<file.features.length;i++){
    if(file.features[i].properties.highway=='steps'){
      count12++;
    }
  }console.log('steps=',count12);
  var mastercount=count+count1+count2+count3+count4+count5+count6+count7+count8+count9+count10+count11+count12;
  console.log('total=',mastercount);
