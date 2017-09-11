<?php

$name  = htmlspecialchars($_POST['name'], ENT_QUOTES);
$phone = htmlspecialchars($_POST['phone'], ENT_QUOTES);
$address = htmlspecialchars($_POST['address'], ENT_QUOTES);
$time = htmlspecialchars($_POST['time'], ENT_QUOTES);
$days = htmlspecialchars($_POST['days'], ENT_QUOTES);
$people = htmlspecialchars($_POST['people'], ENT_QUOTES);

$email_to  = 'sofoko0605@icloud.com';
$headers   = 'From: Good Evening';
$subject   = 'Заявка';

$message  = "Порции: $days\r\nКоличество человек: $people\r\nИмя: $name\r\nТелефон: $phone\r\nАдрес: $address\r\nВремя: $time";
mail($email_to, $subject, $message, $headers);