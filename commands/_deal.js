/*CMD
  command: /deal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send email

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 6547961721){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}
