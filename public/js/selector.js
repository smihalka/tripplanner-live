/* global hotels restaurants activities */

$(document).ready(function(){
    var selectHotel = "<select data-type='hotel'>";
      for (var x = 0; x < hotels.length; x++) {
        selectHotel += "<option data-id=" + hotels[x].id + " data-type='hotel'>" + hotels[x].name + "</option>";
      }
    selectHotel += "</select>";
    $('#hotel-choices').html(selectHotel);

    var selectRestaurants = "<select data-type='restaurant'>";
      for (var x = 0; x < restaurants.length; x++) {
    //    console.log(x,restaurants[x].id);
        selectRestaurants += "<option data-id=" + restaurants[x].id + " data-type='restaurant'>" + restaurants[x].name + "</option>";
      }
    selectRestaurants += "</select>";
    $('#restaurant-choices').html(selectRestaurants);

    var selectActivities = "<select data-type='activity'>";
      for (var x = 0; x < activities.length; x++) {
        selectActivities += "<option data-id=" + activities[x].id + " data-type='activity'>" + activities[x].name + "</option>";
      }
    selectActivities += "</select>";
    $('#activity-choices').html(selectActivities);

    $('#options-panel').on('click', 'button', function(){
      let $selectedItem;
      let $select = $(this).siblings('select')
      let $value = $select.find(':selected').data()
      let $type
      
      if ($value.type === 'hotel') {
        $selectedItem = hotels.find((hotel) => {
         return  hotel.id === $value.id
        })
      }
      if ($value.type === 'restaurant'){
        $selectedItem = restaurants.find((restaurant) => {
         return  restaurant.id === $value.id
        })
      }
      if ($value.type === 'activity') {
        $selectedItem = activities.find((activity) => {
        return  activity.id === $value.id
        })
      }

      mapModule.drawMarker($value.type, $selectedItem.place.location);
      $( ".list-group" ).data( "itinerary", $selectedItem);
      //$( ".title." + $value.type).text($( ".list-group" ).data( "itinerary").name);
      let itinerarySpan = "<span class='title'>" + $selectedItem.name + "</span>"
      let removeButton = "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>"
      $( ".itinerary-item." + $value.type).append(itinerarySpan + removeButton)
    });

  $('#itinerary').on('click', 'button', function(){
    let $toggleSpan = $(this).siblings('span')
    $toggleSpan.remove()
    $(this).remove()
  })
 
})
