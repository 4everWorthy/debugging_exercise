const storeOwners = [
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "AZ",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
];

const listNumberOfStores = function() {
  let totalLocations = 0; 
  for (let i = 0; i < storeOwners.length; i++) {
    totalLocations += storeOwners[i].stores; // added 't' to location :: added '(i)' to the end of the function to make it work properly. We need to iterate there the stores in the array
  }
  return totalLocations; // added totalLocations;
};

let locations = listNumberOfStores();

function tellMeMyStores() {
  console.log('Hey, can you tell me how many stores you have?');
  if (locations > 0) {
    console.log('Of course, we have ' + locations + ' stores');
  }
}

function hasStore() {
  for (let i = 0; i < storeOwners.length; i++) {
    let person = storeOwners[i].name; // added '[i]'
    let location = storeOwners[i].location;
    console.log(`Yes, ${person} has one in ${location}`); // added ` at the beginning and the end :: added ${person} and ${location}
  }

}

tellMeMyStores();
hasStore();