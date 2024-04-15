<?php
// The message
$message = "Новая заявка на сумму ".$_POST["price_value"].", от пользователя: ".
$_POST["name"]."\r\nНомер телефона^ ".$_POST["phone"]."\r\n"."e-mail: ".$_POST["email"]."\r\n".
"Суть проблемы: ".$_POST["problem"];

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Send
mail('de.chupin@gmail.com', 'Новая заявка на услугу', $message);
header("url=index.html");