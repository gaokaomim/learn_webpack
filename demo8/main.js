document.write('<h1>Hello World</h1>');

if (__DEV__) {
    document.write(new Date());
}
// var A; //全局作用域
// function B(){    var C;
//     //C位于B函数的作用域    
//     function D()    {        var E;
//         //E位于D函数的作用域        
//         alert(A)   
//      }}