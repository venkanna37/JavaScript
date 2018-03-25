
// Stores the value of the JSON in `file`
    var file = require('./combined.json');

    //Prints the valus of the type key
    console.log(file.type);

    //prints the value of the generator key
    console.log(file.generator);

    //Prints the number of features
    console.log(file.features.length);

    //Prints the value of the first feature
    console.log(file.features[0]);

    //prints the type of first feature
    console.log(file.features[0].type);

    //prints the properties of the first feature
    console.log(file.features[0].properties);

    //prints the type of the geometry of first feature
    console.log(file.features[0].geometry.type);

    //prints the length of coordinates in geometry of first feature
    console.log(file.features[0].geometry.coordinates.length);

    //prints the id of the first feature
    console.log(file.features[0].id);

    //Prints the timestamp
    console.log(file.timestamp);

    //Prints the copyright
    console.log(file.copyright);

console.log(object.keys(file.features[0].lit).length);

    //prints the number of lit=yes attribute
    Object.prototype.count = function () {
    var count = 0;

    for(var lit in features) {
        if(features.hasOwnProperty(lit))
            count = count + 1;
    }
    return count;
}
