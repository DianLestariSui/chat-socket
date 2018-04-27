/**
 * Created by Dian on 27/04/2018.
 */
// function BukuController($scope){
//
//     $scope.bukus={
//         "java":{
//             "kode":"java",
//             "judul":"Java EE Programming",
//             "penulis":"Rahman dkk"
//         },
//         "javascript":{
//             "kode":"javascript",
//             "judul":"Javascript 2014",
//             "penulis":"Rully"
//         },
//         "net":{
//             "kode":"net",
//             "judul":"Advanced .Net platform",
//             "penulis":"Rloio"
//         },
//         "php":{
//             "kode":"php",
//             "judul":"Php legacy code",
//             "penulis":"Ruzman"
//         }
//     }
//
// }
var app=angular.module('MyApp',[]);
app.controller('MainController', ['$scope', function($scope){
    $scope.judul='Demo Penggunaan AngularJs Directive';
    $scope.books=[
        {
            'judul':'Ayah',
            'penulis':'Andrea Hirata',
            'images':'http://fotato.net/assets/new_fotato/images/about-img.jpg',
            'rating':4
        },
        {
            'judul':'Eragon',
            'penulis':'Christoper Paolini',
            'images':'http://fotato.net/assets/new_fotato/images/about-img.jpg',
            'rating':3
        },
        {
            'judul':'Blink',
            'penulis':'Malcolm Gladwell',
            'images':'http://fotato.net/assets/new_fotato/images/about-img.jpg',
            'rating':3
        },
    ];
}]);