/*CMD
  command: depoapprove
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the currency

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid!="6547961721"){
Bot.sendMessage('u r not a admin')
return}
Bot.setProperty("curr", message, "string")
Bot.runCommand("Depocryp")
