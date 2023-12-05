# Jersey City Bitcoin Website

## Getting Started
Make sure you have node installed, i used 20.9.0
```
npm install
npm run start
```

### add / edit blogs and events
This uses the netlify decap cms to allow you to create / edit blogs + meetups via the /admin/ endpoint in simple markdown,  
or 
you can simply create a new markdown in file in src\blog or src\events make sure published: false is published: true if you want it to show. but the page is still visible for testing purposes if you navigate to it directly

### add / edit pages
Create a .md markdown or .html file inside src\pages

### emojis
Use {% include "bitcoinemoji.html" %} and / or  {% include "bitcoinlogo.html" %} to include bitcoin emojis

### Testing
you can use src\blog\test.md for testing, it is currently set to published: false but if you go do http://<yourdomain>:8080/blog/test you can see this test page

### Known issues
When running locally date is off by -1 but when deploying to netlify the date is correct. not sure whats up with this, if you think you can figure it out please take a shot via a pull request.