angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function($q, $http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      var dfd = $q.defer();
      $http.get('http://www.touro.edu/media/touro-college/style-assets/search-includes/searchp_v2.php?collection=all&default_operator=AND&from=0&index=www&q=touro&size=10')
        .success(function(result)  {
          dfd.resolve(result);
        });
      
      return dfd.promise;
      //return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
