/*CMD
  command: adminmessage
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Adminpanel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid!="6547961721"){
Bot.sendMessage('u r not a admin')
return}
var msg = options.msg

Bot.sendMessage("*🚧🚧ADMIN BROADCAST🚧🚧\n🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥*\n\n "+msg+"")
