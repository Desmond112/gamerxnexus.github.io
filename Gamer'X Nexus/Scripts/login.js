(function(val){
     "use strict";
     
     /* validation */
     var input = val('.validate-input .input100');

     val('.validate-form').on('submit',function(){
         var check = true;
         
         for(var i=0; i<input.length; i++){
             if(validate(input[i]) == false){
                 showValidate(input[i]);
                check=false;
             }

             return check;
         };
     }
}