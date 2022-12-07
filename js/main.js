class Map{
    constructor() {
        this.randomMarkers = [];
        this.renderMarkers = [];
        this.map = null;
        this.center = null;

        this.Init();
    }

    Init(){
        this.randomMarkers = [
            ['0', 'Офіс 1', 48.608104344692094, 22.311373304926835, 'office'],
            ['1', 'Склад 1', 48.60361810328239, 22.31068665487, 'warehouse'],
            ['2', 'Офіс 2', 48.60952311836806, 22.290688110664462, 'office'],
            ['3', 'Склад 2', 48.623819477531676, 22.313089913954425, 'warehouse']
        ]

        this.center = new google.maps.LatLng(48.621348760989356, 22.28645449801332);
        this.teprain = google.maps.MapTypeId.TERRAIN;

        this.mapContainer = document.getElementById('map');
        this.filter = document.getElementById('map-filter');

        this.filter.onchange = (e) => {
            this.filterMarkers(e.target.value);
        }

        this.buildMap();
    }

    buildMap(){
        this.map = new google.maps.Map(this.mapContainer, {
            zoom: 12,
            center: this.center,
            mapTypeId: this.teprain
        });

        for(const marker of this.randomMarkers){
            this.addMarker(marker);
        }
    }

    addMarker(marker){
        const [id, title, pos1, pos2, category] = marker;
        const position = new google.maps.LatLng(pos1, pos2);

        const newMarker = new google.maps.Marker({
            title,
            position,
            category,
            map: this.map
        });

        this.renderMarkers.push(newMarker);
    }

    filterMarkers(category) {
        for(const marker of this.renderMarkers){
            if (marker.category == category || category.length === 0) {
                marker.setVisible(true);
                continue;
            }

            marker.setVisible(false);
        }
    }
}

const initMap = new Map();