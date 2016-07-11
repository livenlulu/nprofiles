      function createSelector(layer) {
        var sql = new cartodb.SQL({ user: 'documentation' });
        var $options = $('#layer_selector li');
        $options.click(function(e) {
          // get the area of the selected layer
          var $li = $(e.target);
          var num_facility = $li.attr('data');
          // deselect all and select the clicked one
          $options.removeClass('selected');
          $li.addClass('selected');
          // create query based on data from the layer
          var query = "select * Acc_Daycare";
          if(num_facility !== 'all') {
            query = "select * from Acc_Daycare where num_facility > " + num_facility;
          }
          // change the query in the layer to update the map
          layer.setSQL(query);
        });
      }
      window.onload = main;

      function main() {
        cartodb.createVis('map', 'https://nyu.carto.com/u/yuan/api/v2/viz/9f509a82-3d37-11e6-94fb-0ecfd53eb7d3/viz.json', {
          center: [40.755840,-73.897476],
          zoom: 13
        })
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          var subLayer = layers[1].getSubLayer(0);
          createSelector(subLayer);
        })
        .error(function(err) {
          console.log(err);
        });
      }

      

    