/*CMD
  command: /loginme
  help: 
  need_reply: false
  auto_retry_time: 
  folder: support

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 6547961721) {
  Bot.setProperty("admin_chat", user.telegramid, "string")
  Bot.sendMessage("You are now admin with " + user.telegramid + " id")
} else {
  return
  Bot.sendMessage("Ooops it seems we already has an admins")
}

