$("#select-area").on "change", "input", ->
	spanText = $(this).siblings('span').text()
	spanMain = $(this).parents('label').siblings()

	if 	spanMain.is('ul')
		spanMain.parent().addClass 'is-main-disrtict'

	if $(this).prop('checked')
		$(this).parents('label').addClass 'is-active'
		$(this).siblings('span').attr 'data-place', spanText
		$('.js-btn-text').text('Добавьте район')

	
	else
		$(this).parents('label').removeClass 'is-active'
		$('.js-btn-text').text('Выберете район')

$(".alternative-block__enter-text").each ->
	$(@).val ''

# clone
$("#select-area").on "click", ".js-btn-clone", ->
	item = $('.is-active').children('span')
	itemParent = item.parent('.is-active')

	$(".alternative-btn__district").empty() 

 if item.siblings("input:checkbox:checked")
 	item.clone().appendTo(".alternative-btn__district")
 	$(".alternative-btn__district").find("span").append('<i class="icon-close js-remove"></i>')
 	
# reset
$("#select-area [data-action='reset']").on "click", ->
	$("#select-area").find('.pill').removeClass 'is-active'
	$('.js-btn-text').text('Выберете район')

# remove item
$(".alternative-btn__district").on "click", ".js-remove", ->
	inputAlternative = $(this).parents('span')
	data1 = inputAlternative.data("place")
	$item = $("#select-area").find('.is-active').children('span[data-place=\'' + data1 + '\']')
	$itemParent = $item.closest('.pill-group')
	

	inputAlternative.remove()

	$item.siblings('input').prop("checked", false).parents('.pill').removeClass('is-active')

	if $itemParent.hasClass 'is-main-disrtict'
		$itemParent.find(".pill :checked").prop("checked", false)

	if !$("#select-area").find('.is-active').hasClass 'is-active'
		$('.js-btn-text').text('Выберете район')

# Clone specialization
$("#select-specialization").on "click", "li a", ->
	item = $(@)

	$('.alternative-btn__specialization span').empty()
	$('.alternative-btn__specialization span').text(item.text())
	$('.js-remove' ).addClass 'is-active'
	$('.js-btn-special').text('Выбрана специальность')
	# return $("#select-specialization").modal "hide"

$(".js-remove").on "click", ->
	$(this).siblings("span").empty()
	$(this).removeClass 'is-active'
	$('.js-btn-special').text('Выберите специальность')
	return false
	




	

# data-picker
$(".js-btn-picker").on "click",  ->
	picker = $(this).siblings(".date-wrap")
	


	picker.toggleClass 'is-open'	




$ ->
	



	$('.js-datepicker').daterangepicker
		initialText: 'Select period...',
		verticalOffset: 20,
		applyOnMenuSelect: false,
		clearButtonText: 'Отменить',
		applyButtonText: 'Подтвердить',
		dateFormat: "d MM",
		altFormat: 
			start: ".js-input",
			# end: ".js-input",
		datepickerOptions:
			numberOfMonths : 2,
			maxDate: null,
			showOtherMonths: true,
			selectOtherMonths: true,
			firstDay: 1

		presetRanges: [
			{
				text: 'Последние: '
				
			}
			{
				text: '7 дней'
				dateStart: ->
					moment()
				dateEnd: ->
					moment().add 'days', 6
			}
			{
				text: '14 дней'
				dateStart: ->
					moment()
				dateEnd: ->
					moment().add 'days', 13
			}
			{
				text: '30 дней'
				dateStart: ->
					moment()
				dateEnd: ->
					moment().add 'days', 29
			}
		]
	return 
	





	# dateFormat: 'd MM'
	# rangeSelect: true
	# monthsToShow: [
	# 	1
	# 	2
	# ]
	# showTrigger: '#calImg'
	# showOtherMonths: true
	# selectOtherMonths: true
	# changeMonth: false
	# altField: '.date-footer__text'
	# altFormat: 'd MM'
	# onShow: ->
	# 	setTimeout (-> 
	# 		$(document).find('.js-datepicker .datepick-today').addClass 'today-active'
	# 	), 1000
	


# # close window
# $(".js-date-close").on "click",  ->	
# 	value = $('.date-footer__text').val()
# 	$(".date-wrap").removeClass "is-open"
# 	$('.js-clone-date').text(value)
	

# # clear 
# # $(".js-date-clear").on "click",  ->	
# # 	$('.js-datepicker').DatePickerClear()
# # 	$('.date-footer__text').empty()

# #change days
# $(".date-header__item").on "click",  ->	
# 	Picker =  $('.js-datepicker').datepick()
# 	today = Picker.find('.datepick-today').text()
# 	day = 7
# 	today7 = parseInt(today) + day


# 	$(@).addClass 'active'

# 	# alert(today7)



