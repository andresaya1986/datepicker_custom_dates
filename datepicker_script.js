/* CON ESTE SCRIPT PODEMOS INDICARLE A DATEPICKER CUALES FECHAS QUEREMOS MOSTRAR EN EL CALENDARIO, YA SEA POR LOOP O FECHAS CONSTANTES */
$('document').ready(function(){
//indicamos las fechas a habilitar
var enableDays = ["2021-03-15","2021-03-03"];
	
	
	//llamamos librería datepicker y le cargamos la validación beforeshowday
	$('#fecha_inicio').datepicker({
		language: "es",
		calendarWeeks: true,
		autoclose: true,
		todayHighlight: true,
		format: 'yy-mm-dd',	
		
        beforeShowDay: function (date){
			var dia = date.getDate();
			var mes = date.getMonth() + 1;
			var ayo = date.getFullYear();
			if(dia < 10) dia = '0'+ dia;
			if(mes < 10) mes = '0'+ mes;
			var allDates =  ayo + '-' + mes + '-' + dia;
			if(enableDays.indexOf(allDates) != -1){
				console.log(allDates);
				return true;
			}else{
				return false ;
			}	
		}
	});
});
