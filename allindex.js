// --------------for animation-------------------
ScrollReveal().reveal('.search', { origin:'top',distance:'10%',delay:200,reset:'true' });
ScrollReveal().reveal('#banner .col-md-5', { origin:'bottom',distance:'8%',delay:400,reset:'true' });

ScrollReveal().reveal('#design-every img', {interval:'200',reset:'true' });
ScrollReveal().reveal('#list h3', {origin:'top',distance:'5%',delay:200,reset:'true' });
ScrollReveal().reveal('#list h4', {origin:'left',distance:'5%',delay:200,reset:'true' });
ScrollReveal().reveal('#list h3', {origin:'right',distance:'5%',delay:200,reset:'true' });
ScrollReveal().reveal('#list button', {origin:'bottom',distance:'5%',delay:200,reset:'true' });
ScrollReveal().reveal('#enquire .enquire-detail', {origin:'left',distance:'5%',delay:200,reset:'true' });
ScrollReveal().reveal('#enquire img', {origin:'right',distance:'5%',delay:200,reset:'true' });
ScrollReveal().reveal('footer', { origin:'top',distance:'5%',delay:200,reset:'true' });
 // ---------swiper script
 var swiper = new Swiper(".mySwiper", {
    slidesPerView:'auto',
    spaceBetween: 10,
    grabCursor:true,
    // slidesPerGroup: 2,
    // loop: true,
    autoplay: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// ----------city dropdown-------------
function change_city_data(current_city){
    let city_data=[
    [
    {city_name:'City center',properties:20},
    {city_name:'Lashkar',properties:20},
    {city_name:'Morar',properties:20},
    {city_name:'Thatipur',properties:20},
    {city_name:'D.D. Nagar',properties:20},
    {city_name:'Kila Gate',properties:20},
    {city_name:'Hajira',properties:20},
    {city_name:'Alkapuri',properties:20},
    {city_name:'Govindpuri',properties:20},
   ],
   [
    {city_name:'Basavanagudi',properties:20},
    {city_name:'Jayanagar',properties:20},
    {city_name:'Koramangala',properties:20},
    {city_name:'Malleshwaram',properties:20},
    {city_name:'Rajaji Nagar',properties:20},
    {city_name:'Frazer town',properties:20},
    {city_name:'Sadashiva Nagar',properties:20},
    {city_name:'Bellandur',properties:20},
    {city_name:'Benson Tower',properties:20},
   ],
   [
    {city_name:'Sohna City',properties:20},
    {city_name:'Palam Vihar',properties:20},
    {city_name:'MG Road',properties:20},
    {city_name:'Sushant Lok',properties:20},
    {city_name:'Nirvana Country',properties:20},
    {city_name:'Sector 43',properties:20},
    {city_name:'DLF city',properties:20},
    {city_name:'Mehrauli',properties:20},
    {city_name:'Basai Road',properties:20},
   ],
   [
    {city_name:'Sohna City',properties:20},
    {city_name:'Palam Vihar',properties:20},
    {city_name:'MG Road',properties:20},
    {city_name:'Sushant Lok',properties:20},
    {city_name:'Nirvana Country',properties:20},
    {city_name:'Sector 43',properties:20},
    {city_name:'DLF city',properties:20},
    {city_name:'Mehrauli',properties:20},
    {city_name:'Basai Road',properties:20},
   ],
   
   

  ]
  ////objected
  let arr_curr=['Gwalior','Benglore','Gurgaon'];
  let position=0;
  for(let i=0;i<arr_curr.length;i++){
    if(current_city==arr_curr[i]){
      position=i;
    }
  }
  let city_name=document.querySelectorAll('.card h4');
  let search_city=document.querySelectorAll('.search-city a');
  for(let i=0;i<city_name.length;i++){
    city_name[i].textContent=city_data[position][i].city_name;
    search_city[i].textContent=city_data[position][i].city_name;

  }

    

  }
  function changecity(event) {
    let city = document.getElementById("city");
    let search2 = document.getElementById("search-2");

    let locality = document.getElementById("locality");
    city.textContent = event.target.textContent;
    search2.textContent = event.target.textContent;
    locality.textContent = event.target.textContent;
    document.getElementById("dropdown-links").style.display = "none";
    change_city_data(city.textContent);

  }
//   ---------------close and open function
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("transition").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("transition").style.display = "none";
    document.getElementById("dropdown-links").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("prop-modal").style.display = "none";
  }
  function showlink() {
    if (
      document.getElementById("dropdown-links").style.display == "block"
    ) {
      document.getElementById("dropdown-links").style.display = "none";
    } else {
      document.getElementById("dropdown-links").style.display = "block";
    }
  }
  function show_profile_link() {
    if (
      document.getElementById("profile-links").style.display == "block"
    ) {
      document.getElementById("profile-links").style.display = "none";
    } else {
      document.getElementById("profile-links").style.display = "block";
    }
  }
  function show_notification() {
    if (
      document.getElementById("notification").style.display == "block"
    ) {
      document.getElementById("notification").style.display = "none";
    } else {
      document.getElementById("notification").style.display = "block";
    }
  }
  function show_prop() {
    if (
      document.getElementById("prop-modal").style.display == "block"
    ) {
      document.getElementById("prop-modal").style.display = "none";
    } else {
      document.getElementById("prop-modal").style.display = "block";
    }
  }
  function show_search(){
    document.getElementById("search").style.display = "block"
    document.getElementById("transition").style.display = "block";

  }
  function scrollToTop(){
    document.body.scrollTop=0;
    
  }