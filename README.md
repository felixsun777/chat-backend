This is a online chatting demo program backend.
By using node.js + express + mongodb framework, to implement RESTful api to response the frontend (both web and mobile by angular2).
The program can response GET requests for getting historical chatting records, POST requests for inserting new chatting records and uplocading files.
It stores chatting records into mongodb and save uploaded files into a specific directory called "upload".

The web frontend is at 			github.com/felixsun777/chat 		for your reference.
The mobile frontend  is at 		github.com/felixsun777/chat-app 	for your reference.


这是一个在线聊天小程序的服务器后端。
通过运用 node.js + express + mongodb 框架实现 RESTful 接口来响应前端（angular2开发的web端和移动端）的请求。
可以响应GET请求来获取历史聊天记录，响应POST请求来插入新的聊天记录和获取用户上传的文件。
程序会把聊天记录保存到mongodb数据库，并把上传的文件保存在名为"upload"的文件夹。

网页版前端程序位于 	github.com/felixsun777/chat 		可供参考
移动版前端程序位于 	github.com/felixsun777/chat-app 	可供参考