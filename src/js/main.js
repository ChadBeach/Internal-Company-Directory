import $ from 'jquery';

$.ajax({
  url: 'http://api.randomuser.me/',
  dataType: 'json',
  data: {
    results: "12",
    nat: "US",
    inc: "name, location, email, cell, id, picture"
  },
  success: function(data){
  console.log(data)
data.results.map(create_user)
  }
});


var create_user = function (info) {
  $( ".container" ).append(`
    <div class="grid">
      <img class="large" src="${info.picture.large}">
      <div class="name">${info.name.first},${info.name.last}</div>
      <div class="location">
        ${info.location.street}<br>
        ${info.location.city},${info.location.state}.${info.location.postcode}
        <div class="cell">${info.cell}</div>
      </div>
      <div class="email">${info.email}</div>
      <div class="id">${info.id.value}</div>
    </div>`);
  console.log(info);

}
