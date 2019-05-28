$(function(){


$('[data-toggle="tooltip"]').tooltip()
})



 
    $(function() {
   $("#btn").on("click",function(){
   $( "#formulario_de_prueba" ).validate({
  
           rules: {
            Apellidos: {
                           required: true,
                           minlength: 4,
                           maxlength: 20
                   },
                   nombre: {
                           required: true,
                           minlength: 4,
                           maxlength: 20
                   },
                   edad: {
                           required: true,
                           digits:true,
                           minlength: 1,
                           maxlength: 2,
                   }
                   ,
                   tel: {
                           required: true,
                           digits:true,
                           minlength: 10,
                           maxlength: 13,
                   },
                   num: {
                           required: true,
                           number:true,
                           minlength: 1,
                           maxlength: 2,
                   }
                   , num1: {
                           required: true,
                           number:true,
                           minlength: 1,
                           maxlength: 2,
                   }
                   , num2: {
                           required: true,
                           number:true,
                           minlength: 1,
                           maxlength: 2,
                   }
                   , num3: {
                           required: true,
                           number:true,
                           minlength: 1,
                           maxlength: 2,
                   }
                   , num4: {
                           required: true,
                           number:true,
                           minlength: 1,
                           maxlength: 2,
                   }
                   , dic: {
                           required: true
                           
                   }
                   , enf: {
                           required: true
                           
                   }
                   , contr: {
                           required: true
                           
                   }


           },
           messages: {
                  Apellidos: {
                           required: "El campo es requerido",
                           minlength: $.format("Necesitamos por lo menos {0} caracteres"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   },
                   nombre: {
                           required: "El campo es requerido",
                           minlength: $.format("Necesitamos por lo menos {0} caracteres"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   },
                    edad: {
                           required: "El campos es requerido",
                           digits: "Solo se aceptan numeros",
                           minlength: $.format("Necesitamos por lo menos {0} numeros"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   }
                   ,
                    tel: {
                           required: "El campos es requerido",
                           digits: "Solo se aceptan numeros",
                           minlength: $.format("Necesitamos por lo menos {0} numeros"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   },
                   num: {
                           required: "El campos es requerido",
                           number: "Solo se aceptan numeros",
                           minlength: $.format("Necesitamos por lo menos {0} numeros"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   },
                    num1: {
                           required: "El campos es requerido",
                           number: "Solo se aceptan numeros con punto decimal",
                           minlength: $.format("Necesitamos por lo menos {0} numeros"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   }
                   ,
                    num2: {
                           required: "El campos es requerido",
                           number: "Solo se aceptan numeros con punto decimal",
                           minlength: $.format("Necesitamos por lo menos {0} numeros"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   }
                   ,
                    num3: {
                           required: "El campos es requerido",
                           number: "Solo se aceptan numeros con punto decimal",
                           minlength: $.format("Necesitamos por lo menos {0} numeros"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   },
                    num4: {
                           required: "El campos es requerido",
                           number: "Solo se aceptan numeros con punto decimal",
                           minlength: $.format("Necesitamos por lo menos {0} numeros"),
                           maxlength: $.format("{0} caracteres son demasiados!")
                   }
                   ,
                    dic: {
                           required: "El campos es requerido"
                           
                   },
                    enf: {
                           required: "El campos es requerido"
                          
                   }
                   ,
                    contr: {
                           required: "El campos es requerido"
                          
                   }
           }




   });
});
    });