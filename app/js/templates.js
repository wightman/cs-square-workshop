<<<<<<< 287d5a1a5d75a5825ab57f34be5658a65225a37f
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('details.html','<style>\n  .flex-container{\n    display: flex;\n    justify-content: center;\n  }\n  .flex-item{\n    padding: 5px;\n    margin: 10px;\n  }\n\n  p{\n    text-align: left;\n    color: black;\n  }\n\n</style>\n<div class = "flex-container">\n <div class="flex-item">\n   <p><image src={{details.photo.image_url}}/></p>\n </div>\n <div class="flex-item">\n   <h1>{{details.photo.name}} - {{details.photo.rating}}</h1>\n   <p>{{details.photo.description}}</p>\n   <br>\n   <p>{{details.photo.user.firstname}} {{details.photo.user.lastname}}</p>\n   <p>{{details.photo.user.city}}, {{details.photo.user.country}}</p>\n\n   <p ng-repeat="(key, value) in details.photo|filter: details.filter">{{key}}</p>\n </div>\n</div>\n');
=======
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('details.html','<style>\n  .flex-container{\n    display: flex;\n    background-color: lightgrey;\n    justify-content: center;\n  }\n  .flex-item{\n    background-color: cornflowerblue;\n    padding: 5px;\n    margin: 10px;\n  }\n  h1{\n  text-align: center;\n  }\n  .author{\n    color: black;\n  }\n  p{\n    text-align: center;\n    color: white;\n    font-weight: lighter;\n  }\n  .boxed {\n    border: 1px solid white ;\n    padding: 15px;\n\n  }\n\n</style>\n<div>\n <div class="flex-item">\n   <p><image src={{details.photo.image_url}}/></p>\n </div>\n <div class="flex-item">\n   <h1>{{details.photo.name}}</h1>\n   <p class="author">{{details.photo.user.fullname}}</p>\n   <p class="boxed" ng-bind-html="details.photo.description | parseUrlFilter"></p>\n </div>\n</div>\n');
>>>>>>> make anchor tags for bare urls, tidied css for details view
$templateCache.put('home.html','<div class="image-grid">\n    <div ng-repeat="photo in home.photos">\n        <a ui-sref=\'Details({imageId: photo.id})\'>\n          <img class="tile" src="{{photo.images[0].url}}"/>\n        </a>\n    </div>\n</div>\n');
$templateCache.put('search.html','');
$templateCache.put('directives/example.html','<div class="example-directive">\n  <h1>Directive title: {{title}}</h1>\n  <p>This is an example of a directive, click me!</p>\n</div>\n');}]);