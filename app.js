$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box-ect');
  });
  
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box-ect');
  });
});