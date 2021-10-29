let myApp = angular.module("myApp", [])

myApp.controller("myController", function($scope) {
    $scope.products = [
        {
            bookName:"Nasip Niyete Vurgundur",
            author:"Ethem Emin Nemutlu",
            stock:75,
            price:10
        },
        {
            bookName:"Kaktüsler de Çiçek Açar",
            author:"Songül Ünsal",
            stock:96,
            price:25.50
        },
        {
            bookName:"Dert İnsana Yol Gösterir",
            author:"Aytaç Ayna",
            stock:45,
            price:28.50
        },
        {
            bookName:"Son 48 Saat",
            author:"Sımon Kernic",
            stock:35,
            price:16.75
        },
        {
            bookName:"10 İçimdeki Katil",
            author:"Mario Mazzanti",
            stock:66,
            price:24.75
        }          
            
        
    ];

    $scope.deleteProduct = function(id){
        $scope.products.splice(id, 1)
        alert("Ürün Silindi")
    }

    $scope.addProduct = function(name, author, stock, price){
        $scope.products.push({bookname:name, author:author, stock:stock, price:price})
        alert("ürün eklendi")
    }
    


})