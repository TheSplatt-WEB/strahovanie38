<?php
if (isset ($_POST['contactFF'])) {
  $to = "strahovanie.38.irkutsk@gmail.com";
  $from = "support@strahovanie38.ru";
  $subject = "Заявка с сайта ".$_SERVER['HTTP_REFERER'];
  $message = "\n------------Имя клиента:    ".$_POST['nameFF']."\n----------Email клиента:    ".$_POST['contactFF']."\n-----Телефон клиента:     ".$_POST['telFF']."\nНаименование банка:    ".$_POST['bankFF']."\n--------------------Сумма:    ".$_POST['sumFF']."\n------------Виды спорта:    ".$_POST['sportFF']."\n-------------------Диагноз:    ".$_POST['diagnozFF']."\n-Страна назаначения:    ".$_POST['countryFF']."\n-Период пребывания:    ".$_POST['dateFF']."\n-----------Комментарий:    ".$_POST['projectFF']."\n\nСтраница отправки: ".$_SERVER['HTTP_REFERER'];

  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
if(is_uploaded_file($_FILES['passport-1']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['passport-1']['tmp_name'])));
  $filename = $_FILES['passport-1']['name'];
  $filetype = $_FILES['passport-1']['type'];
  $filesize = $_FILES['passport-1']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['passport-2']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['passport-2']['tmp_name'])));
  $filename = $_FILES['passport-2']['name'];
  $filetype = $_FILES['passport-2']['type'];
  $filesize = $_FILES['passport-2']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['reg-1']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['reg-1']['tmp_name'])));
  $filename = $_FILES['reg-1']['name'];
  $filetype = $_FILES['reg-1']['type'];
  $filesize = $_FILES['reg-1']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['reg-2']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['reg-2']['tmp_name'])));
  $filename = $_FILES['reg-2']['name'];
  $filetype = $_FILES['reg-2']['type'];
  $filesize = $_FILES['reg-2']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['photo-1']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['photo-1']['tmp_name'])));
  $filename = $_FILES['photo-1']['name'];
  $filetype = $_FILES['photo-1']['type'];
  $filesize = $_FILES['photo-1']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['driver-1']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['driver-1']['tmp_name'])));
  $filename = $_FILES['driver-1']['name'];
  $filetype = $_FILES['driver-1']['type'];
  $filesize = $_FILES['driver-1']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['driver-2']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['driver-2']['tmp_name'])));
  $filename = $_FILES['driver-2']['name'];
  $filetype = $_FILES['driver-2']['type'];
  $filesize = $_FILES['driver-2']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['inspect-1']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['inspect-1']['tmp_name'])));
  $filename = $_FILES['inspect-1']['name'];
  $filetype = $_FILES['inspect-1']['type'];
  $filesize = $_FILES['inspect-1']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}
if(is_uploaded_file($_FILES['inspect-2']['tmp_name'])) {
  $attachment = chunk_split(base64_encode(file_get_contents($_FILES['inspect-2']['tmp_name'])));
  $filename = $_FILES['inspect-2']['name'];
  $filetype = $_FILES['inspect-2']['type'];
  $filesize = $_FILES['inspect-2']['size'];
  $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
}

   $message.="
--$boundary--";
 
  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    echo $_POST['nameFF'].', Ваше сообщение отправлено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
  }
}
?>
