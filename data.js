module.exports = {
  lastId: 4,
  routes: [
    {
      'id': 0,
      'title': 'tokyo',
      'info': 'See interesting place in the heart of Tokyo. Tokyo tower, Disney land, ...',
      'traveller': 'pong',
      'duration': '5 days',
      'cost_est': '50,000 THB',
      'copied': 10,
      'imageUrl': 'http://www.dealozo.com/blog/wp-content/uploads/2017/02/465436474.jpg',
      'center': {lat: 35.6732619, lng: 139.5703},
      'visits': [
        {
          id: 0,
          seq: 1,
          commute: 'train',
          date: '29 June 2017',
          start: 19.00,
          end: 21.00,
          title: 'Tokyo Tower',
          info: 'Reminiscent of the Eiffel Tower, this landmark features observation areas & other attractions',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tokyo_Tower_20060211.JPG/1200px-Tokyo_Tower_20060211.JPG',
          position: {lat: 35.6585805, lng: 139.7432442}
        },
        {
          id: 1,
          seq: 2,
          commute: 'bus',
          date: '30 June 2017',
          start: 10.00,
          end: 17.00,
          title: 'Tokyo Disneyland',
          info: 'Tokyo offshoot of the iconic theme park known for its rides, live shows & costumed characters.',
          url: 'http://static5.businessinsider.com/image/58237da7dd08950b3a8b45e3-1024/1024px-tokyo_disneysea_mermaid_lagoon_exterior_20130607.jpg',
          position: {lat: 35.6271857, lng: 139.8871084}
        }]
    },
    {
      'id': 1,
      'title': 'bangkok',
      'info': 'Bangkok street food night',
      'traveller': 'pong',
      'duration': '1 night',
      'cost_est': '500 THB',
      'copied': 20,
      'imageUrl': 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/04/19/10/bangkok-street-food-crowd.jpg',
      'visits': [
        {
          position: {lat: 10.0, lng: 10.0},
          infoText: 'Marker 1'
        },
        {
          position: {lat: 11.0, lng: 11.0},
          infoText: 'Marker 2'
        }]
    },
    {
      'id': 2,
      'title': 'chiangmai',
      'info': 'Temples in Changnai',
      'traveller': 'pong',
      'duration': '2 days',
      'cost_est': '4,500 THB',
      'copied': 500,
      'imageUrl': 'http://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/homepage/attractions/2days-chiangmai/pagePropertiesImage/chiang-mai-2days.jpg',
      'visits': [
        {
          position: {lat: 10.0, lng: 10.0},
          infoText: 'Marker 1'
        },
        {
          position: {lat: 11.0, lng: 11.0},
          infoText: 'Marker 2'
        }]
    },
    {
      'id': 3,
      'title': 'thailand',
      'info': 'Thailand paradise',
      'traveller': 'pong',
      'duration': '3 days',
      'cost_est': '15,000 THB',
      'copied': 300,
      'imageUrl': 'http://thailanddiveandsail.com/wp-content/uploads/2016/01/kohtachai.jpg',
      'visits': [
        {
          position: {lat: 10.0, lng: 10.0},
          infoText: 'Marker 1'
        },
        {
          position: {lat: 11.0, lng: 11.0},
          infoText: 'Marker 2'
        }]
    },
    {
      'id': 4,
      'title': 'Bangkok',
      'info': 'Chill in Bangkok',
      'traveller': 'pong',
      'duration': 'half day',
      'cost_est': '150 THB',
      'copied': 450,
      'imageUrl': 'http://oknation.nationtv.tv/blog/home/user_data/file_data/201412/06/683401ba8.jpg',
      'visits': [
        {
          position: {lat: 10.0, lng: 10.0},
          infoText: 'Marker 1'
        },
        {
          position: {lat: 11.0, lng: 11.0},
          infoText: 'Marker 2'
        }]
    }
  ]
}
