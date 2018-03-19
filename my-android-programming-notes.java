
// Below program is created by Google & Udacity.

// Toy App
//     Link: https://github.com/udacity/ud851-Exercises
//     This are sample excercises that will help to the main project

// Sunshine Code
//     https://github.com/udacity/ud851-Sunshine
//     This is the main project


// Activity
//    Simple GUI/ graphical interface similar to Watsapp, etc.
//    

/*
// ================================================
MANIFEST FILE
  \app\src\main\AndroidManifest.xml
  This is manifest file, has below:
    uses-permission tells that permission android app requires to run, like INTERNET, to connect to a URL to get data from it
    application (this is the application, it has icon, theme, label/applciation name like Watsapp that display on top of app)
      activity (This is the our GUI, we can have our controls in this, like Button, Text box, etc.)

RESOURCE FOLDER:
  \app\src\main\res
  This is the resource folder, it has other folders
  Like layout folder, menu folder, values folder, etc.

RES - VALUES
  \app\src\main\res\values
  It can have below xmls 
    strings.xml
    - this has string resources
    - it has constants that you can use in the applciation
    -   application name that is dispayed on top, like WatsApp
    -   messages like greetings_messsage as "Hello there, welcome!"
    -   various enumerations of your app, like a gender can take 2 or more values like male as Male, female as Female
    -   others
    colors.xml
    dimens.xml
    styles.xml

RES - LAYOUTS
  res\layout
    This has xmls that are layouts
  res\layout\activity_main.xml
    This is a layout file. (tough it says activity)
  There are many layouts like FrameLayout, which is simple a simple one, it occupies the whole area of activity(?)
  it generally is given layout_width & layout_height as "match_parent"

  Each Layout can contain other controls like TextView

CONTROLS
  TextView - this is to view text that you have like a status of something happening or done, to notify user
    generally has layout_width & layout_height as "wrap_content"
    and other attributes like padding say as "16dp" & textSize say as "20sp"
  

*/
