// var app = angular.module('drag',[]);
// app.directive('myDrag',function(){
//    return{
//       restrict:'A',
//       //template: 'fdfdfd',
//       link: function(t,e,a){      
//          t.$('.cart li') = function(t){
//             $(t).draggable();
//          }
         
//       }
      
//    }
// })

















$(function(){
   var count = 0;
   $('.cart li').draggable({
      helper:'clone'
   })
   $('.drop-con').droppable({
      accept:'.cart li',
      drop: function(ev,ui){
         count = count+1;
         var droppedItem = $(ui.draggable).clone();
         $(this).append(droppedItem);
         $('#count').text(count);
         
         droppedItem.addClass('closeBtn')
         $('.closeBtn').on('click',function(ev){ 
            for(i=0; i <= droppedItem.length; i++ ){
               $(this).fadeOut(300,function(){
                  $(this).remove();
                  count = count-1;
                  $('#count').text(count);
               });
            }
           
           
      })
      }
   })
 
}) 