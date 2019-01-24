
let sprite =
[
 "../images/sample_mapping.jpg"
];

sprite.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object


let colours =
{
  "green":"#fe6f88",
  "blue":"#020e84"
};

export {sprite, colours};
