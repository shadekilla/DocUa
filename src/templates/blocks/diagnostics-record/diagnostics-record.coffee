if window.matchMedia('screen and (max-width: 767px)').matches
  $('.js-tab__mobile-d').addClass 'js-tab__header-d'

$('.js-tab__header-d').click  ->
  item = $(@).children('.js-content_hide-index')
  item.slideToggle 'fast'
  item.toggleClass 'tab-active_info-index'
  $(@).find('.btn__mobile').toggleClass 'btn__mobile_open'
  $(@).find('.diagnostics-record__item-title').toggleClass 'tab__header_open'  
  #event.stopPropagation();
  false

 
# $(document).ready ->
#   $('.js-tab__header').click ->
#     $(this).children(".js-btn__mobile").css(backgroundImage: 'url("i/icons/arrow_tab_up.png")').find('.tab-close').toggleClass 'tab-active_info'.slideToggle(200).siblings('.tab-close').slideUp 'slow'
#     $(this).siblings().children(".js-btn__mobile").css backgroundImage: 'i/icons/arrow_tab_down.png)'
#     return
#   return 