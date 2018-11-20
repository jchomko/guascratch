//2. Pass sensors data to visualization managers
heading.onChange(function(data, err){
  if (!err){

    //heading in deg
    heading = data.heading
    // console.log(heading)
    updateGameHeading(heading)

  }else{
    $("#info").text(err)
  }
})
