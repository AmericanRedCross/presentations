var robertData;
var displayed;
var notdisplayed;
var redLayer;
var greyLayer;
var center = new L.LatLng(18.9411, -72.7034);

var highlight;

var redStyle = {
    color: '#fff',
    weight: 1,
    fillColor: 'red',
    fillOpacity: 0.7
}

Number.prototype.formatNumber = function(c, d, t) {
    var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "," : d,
    t = t == undefined ? "." : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var bounds = new L.LatLngBounds([90, 200], [-80, -200]);


var map = L.map('map', {
    center: center,
    zoom: 8,
    attributionControl: false,
    maxBounds: bounds,
    layers: new L.TileLayer('http://a.tiles.mapbox.com/v3/americanredcross.map-tbpca13i/{z}/{x}/{y}.png')
});

var attrib = new L.Control.Attribution({
    position: 'bottomleft'
});
attrib.addAttribution('Map Data &copy; <a href="http://redcross.org">Red Cross</a>');
map.addControl(attrib);

function getWorld() {
    $.ajax({
        type: 'GET',
        url: 'data/robertsform.json',
        contentType: 'application/json',
        dataType: 'json',
        timeout: 10000,
        success: function(json) {
            robertData = json;
        },
        error: function(e) {
            console.log(e);
        }
    });
}

function showWorld () {
    robertLayer = L.geoJson(robertData, {
    }).addTo(map);
}

//fire function to for initial page load
getWorld();

//disclaimer text

function showDisclaimer() {
    $('#disclaimerText').show();
}

function closeDisclaimer() {
    $('#disclaimerText').hide();
}

function showAll(){
    map.removeLayer(redLayer);
    map.removeLayer(greyLayer);
    parseWorld(worldcountries, iroc_response);
    buildStuff();
}