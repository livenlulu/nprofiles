      var selectedLayer;
      // create layer selector
      function createSelector(layers) {
        var sql = new cartodb.SQL({ user: 'documentation' });
 

  $("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
    });




        var $options = $('#layer_selector li');
        $options.click(function(e) {
          // get the area of the selected layer
          var $li = $(e.target);
          var layer = $li.attr('id');
          if(selectedLayer != layer ){
            // definitely more elegant ways to do this, but went for
            // ease of understanding
            if (layer == 'a1'){
              layers.getSubLayer(0).hide(); // countries
              layers.getSubLayer(1).show(); // cables
              layers.getSubLayer(2).hide(); // populated places
              layers.getSubLayer(3).hide();
              layers.getSubLayer(4).hide();
              layers.getSubLayer(5).show();
              layers.getSubLayer(6).hide();
              layers.getSubLayer(7).hide();
            }
            else if (layer == 'a2') {
              layers.getSubLayer(0).show();
              layers.getSubLayer(1).hide();
              layers.getSubLayer(2).hide();
              layers.getSubLayer(3).hide();
              layers.getSubLayer(4).hide();
              layers.getSubLayer(5).show();
              layers.getSubLayer(6).hide();
              layers.getSubLayer(7).hide();
            }
            else if (layer == 'a3') {
              layers.getSubLayer(0).hide();
              layers.getSubLayer(1).hide();
              layers.getSubLayer(2).show();
              layers.getSubLayer(3).hide();
              layers.getSubLayer(4).hide();
              layers.getSubLayer(5).hide();
              layers.getSubLayer(6).show();
              layers.getSubLayer(7).hide();
            }
            else if (layer == 'a4') {
              layers.getSubLayer(0).hide();
              layers.getSubLayer(1).hide();
              layers.getSubLayer(2).hide();
              layers.getSubLayer(3).show();
              layers.getSubLayer(4).hide();
              layers.getSubLayer(5).hide();
              layers.getSubLayer(6).hide();
              layers.getSubLayer(7).show();
            }
            else if (layer == 'a5') {
              layers.getSubLayer(0).hide();
              layers.getSubLayer(1).hide();
              layers.getSubLayer(2).hide();
              layers.getSubLayer(3).hide();
              layers.getSubLayer(4).show();
              layers.getSubLayer(5).hide();
              layers.getSubLayer(6).hide();
              layers.getSubLayer(7).hide();
            }
            else if (layer == 'a6') {
              layers.getSubLayer(0).hide();
              layers.getSubLayer(1).hide();
              layers.getSubLayer(2).show();
              layers.getSubLayer(3).hide();
              layers.getSubLayer(4).hide();
              layers.getSubLayer(5).show();
              layers.getSubLayer(6).hide();
              layers.getSubLayer(7).hide();
            }
            else if (layer == 'a7') {
              layers.getSubLayer(0).hide();
              layers.getSubLayer(1).hide();
              layers.getSubLayer(2).hide();
              layers.getSubLayer(3).hide();
              layers.getSubLayer(4).hide();
              layers.getSubLayer(5).hide();
              layers.getSubLayer(6).show();
              layers.getSubLayer(7).hide();
            }
            else {
              layers.getSubLayer(0).hide();
              layers.getSubLayer(1).hide();
              layers.getSubLayer(2).show();
              layers.getSubLayer(3).hide();
              layers.getSubLayer(4).hide();
              layers.getSubLayer(5).hide();
              layers.getSubLayer(6).hide();
              layers.getSubLayer(7).show();
            }
          }
        });
      }
 
      var layerN = {};
      function main() {
        var map = L.map('map', { 
          zoomControl: true,
          center: [40.712915,-73.954296],
          zoom: 13
        });

      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    att: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',

      }).addTo(map);



        // get the currently selected style
        selectedStyle = $('li.selected').attr('id');
        var layerUrl = 'https://nyu.carto.com/u/yuan/api/v2/viz/9f509a82-3d37-11e6-94fb-0ecfd53eb7d3/viz.json';


        cartodb.createLayer(map, layerUrl, { https: true })
        .addTo(map)
        .done(function(layers) {
          createSelector(layers);
        })
        .error(function(err) {
          console.log(err);
        });
      }
 
      window.onload = main;


      $('#age').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })

      $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
      $('#myTabs a:first').tab('show') // Select first tab
      $('#myTabs a:last').tab('show') // Select last tab
      $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)

