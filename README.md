# RESTful-API-BLOG


Here is the lines to put on your console and make the GET,POST,PUT and DELETE request with curl.
(The program is build on node.js making for node javascript introduction course)

if you want this program work in your system you have to install expresss and body-parser dependicies with npm ( on console : npm -i express body-parser -E), first is the framwork and the second is to manage the payload.

the file data.json and data1.json is in main folder. This file are to curl json file's , other way you are not be able to POST or PUT json file.


"FOR POSTS"

curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d @data.json "localhost:3000/posts"
REM DELAY 1
curl -H "Accept: application/json" -H "Content-Type: application/json" -X PUT -d @data1.json "localhost:3000/posts/1"
REM DELAY 1
curl -X DELETE "localhost:3000/posts/1"
REM DELAY 1
curl localhost:3000/posts

"FOR COMMENTS"

curl localhost:3000/posts/0/comments

curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d @data.json "localhost:3000/posts/0/comments"

curl -H "Accept: application/json" -H "Content-Type: application/json" -X PUT -d @data1.json "localhost:3000/posts/0/comments/0"

curl -X DELETE localhost:3000/posts/0/comments/0
