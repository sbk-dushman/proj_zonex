
  let purchasedAlert = document.querySelector('.purchased-alert');

  function closePurchasedAlert() {
    purchasedAlert.classList.remove('purchased-alert_visible')
  }

 try {
  purchasedAlert.addEventListener('click',(e) =>{
    if (e.target.classList.contains('purchased-alert__close-btn')) {
      closePurchasedAlert()
    }
  });
 } catch (error) {
   console.log('нету всплывашки '+error);
 }
$(document).ready(function(){
    $('.hero-secton__slider').slick({
      dots: true,
      // autoplay: true,
     });// второй слайдер
      $('.catalog-hero__slider').slick({
        // autoplay: true,
          nextArrow:$('.catalog-slider__next-btn'),
          prevArrow:$('.catalog-slider__prev-btn'),


    });

  });
      // cкрытие конкретного фильтра  на странице каталога
  try {
    const catalogFilters = document.querySelectorAll('.catalog-filter__top');
     catalogFilters.forEach(el => {
      console.log(el)
       el.addEventListener('click',(e)=>{
        e.currentTarget.closest('.catalog-filter').classList.toggle('filter-open')
       })
     });
    
  } catch (error) {
    console.log('нету филтров '+error);
  }
    // cкрытие всех  фильтров  на странице каталога
    try {
    const hiedFiltersBtn = document.querySelector('.hide-filters-btn');
    const catalogFilters = document.querySelectorAll('.catalog-filter');
    hiedFiltersBtn.addEventListener('click',(e)=>{
      catalogFilters.forEach(el => {
        el.classList.remove('filter-open');
        
      });
     });
   
 } catch (error) {
   console.log('нету кнопки скрыьтя  филтров '+error);
 }