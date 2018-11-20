var heading = (function(){

  var lastX = 0

  var onChange = function(callback){

  //Android - Chrome >50 - https://developers.google.com/web/updates/2016/03/device-orientation-changes
    if ('ondeviceorientationabsolute' in window) {
      window.addEventListener('deviceorientationabsolute', function(event){
        var data = {
          info: "received from ondeviceorientationabsolute & alpha val - Android, Chrome > 50",
          val: event.alpha
        }
        callback(data, null)
      })

    //else
    }else if ('ondeviceorientation' in window){
      window.addEventListener('deviceorientation', function(event){

        //iOS
        if ("webkitCompassHeading" in event){
          var data = {
            info: "received from deviceorientation webkitCompassHeading - iOS Safari,  Chrome, Firefox",
            heading: 360 - event.webkitCompassHeading
          }
          callback(data, null)

        // Android - Chrome <50
        }else if (event.absolute){
          var data = {
            info: "received from deviceorientation with absolute=true & alpha val",
            heading: event.alpha
          }
          callback(data, null)
        }else{
          var data = {
            info: "absolute=false, heading might not be absolute to magnetic north",
            heading: event.alpha
          }
          callback(data, null)
        }
      })
    }
    // //test
    // window.addEventListener('deviceorientation', function(event){
    //   $("#heading-alpha").text("heading alpha: "+event.alpha)
    // })
  }
  return {
    onChange: onChange
  }

})()
