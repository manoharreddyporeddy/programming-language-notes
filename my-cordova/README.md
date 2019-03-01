
This is a cordova + reactjs app
---

You can remove reactjs app by deleting react-src & react-dist folders easily later, once everything is running.

`my-app` folder has the project
---


Same app works on android, browser, windows, etc.
---

Usage:

1.install npm modules

    cmd  
    cd C:\code\my-programming-language-notes\my-cordova\my-app\      
    npm install  

2.preprocess jsx, run below

    cmd  
    ppjsx  

3.run anyone of these:

    cmd  
    cordova run browser  
    cordova run windows  
    cordova run android  


More details:
---

https://cordova.apache.org/

npm install -g cordova
cordova create my-app
// cordova create hello com.example.hello HelloWorld

cd my-app


cordova platform add browser
cordova platform add android
cordova platform add ios
cordova platform add windows
cordova platform add osx

cordova platform ls

cordova emulate android

cordova run browser
cordova run windows
cordova run android

cordova clean

--

minify js - https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3
npm init -y

jsx preprocessor
    npx babel --watch my-app/www/js/react-src --out-dir my-app/www/js --presets react-app/prod

--

npx create-react-app my-app
cd my-app
npm start

npm start
npm run build
npm test

--

    JAVA_HOME = C:\Program Files\Java\jdk1.8.0_192
    ANDROID_HOME = C:\Program Files (x86)\Android\android-sdk

Android
    > Settings > About phone > Build number
    > Settings > About device > Build number
    > Settings > About > Software information > More > Build number
    > About phone > Software info > Build number
    Tap Build number 7 times, unlocks the developer options.

    Developer options > Enable USB debugging = ON


$ cordova requirements
    Requirements check results for android:
        Java JDK: installed .
        Android SDK: installed
        Android target: installed android-19,android-21,android-22,android-23,Google Inc.:Google APIs:19,Google Inc.:Google APIs (x86 System Image):19,Google Inc.:Google APIs:23
        Gradle: installed

    Requirements check results for ios:
        Apple OS X: not installed
        Cordova tooling for iOS requires Apple OS X
    Error: Some of requirements check failed

--

https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html
admin cmd
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco install gradle
    where gradle
        C:\ProgramData\chocolatey\bin\gradle.exe

?
    setx -m JAVA_HOME "C:\Program Files\Java\jdk1.8.0"
    setx -m PATH "%PATH%;%JAVA_HOME%\bin";
ANDROID_HOME
    C:\Users\user1\AppData\Local\android-sdk\
PATH
    C:\Users\user1\AppData\Local\android-sdk\tools
    C:\Users\user1\AppData\Local\android-sdk\platform-tools

--

    https://cordova.apache.org/docs/en/latest/config_ref/images.html
    <platform name="android">
        <!--
            ldpi    : 36x36 px
            mdpi    : 48x48 px
            hdpi    : 72x72 px
            xhdpi   : 96x96 px
            xxhdpi  : 144x144 px
            xxxhdpi : 192x192 px
        -->
        <icon src="res/android/ldpi.png" density="ldpi" />
        <icon src="res/android/mdpi.png" density="mdpi" />
        <icon src="res/android/hdpi.png" density="hdpi" />
        <icon src="res/android/xhdpi.png" density="xhdpi" />
        <icon src="res/android/xxhdpi.png" density="xxhdpi" />
        <icon src="res/android/xxxhdpi.png" density="xxxhdpi" />
    </platform>

--
