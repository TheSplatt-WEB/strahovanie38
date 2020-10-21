<?php
if (isset ($_POST['email'])) {
  $to = "strahovanie.38.irkutsk@gmail.com";
  $from = "support@strahovanie38.ru";
  $subject = "Заявка с сайта ".$_SERVER['HTTP_REFERER'];
  $message = "\n------------Имя клиента:    ".$_POST['name']."\n----------Email клиента:    ".$_POST['email']."\n-----Телефон клиента:     ".$_POST['phone']."\nНаименование банка:    ".$_POST['bank']."\n--------------------Сумма:    ".$_POST['summ']."\n------------Виды спорта:    ".$_POST['sport']."\n-------------------Диагноз:    ".$_POST['diagnoz']."\n-Страна назаначения:    ".$_POST['countryFF']."\n-Период пребывания:    ".$_POST['dateFF']."\n-----------Комментарий:    ".$_POST['projectFF']."\n\nСтраница отправки: ".$_SERVER['HTTP_REFERER'];

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
    if(is_uploaded_file($_FILES['image']['tmp_name'])) {
      $attachment = chunk_split(base64_encode(file_get_contents($_FILES['image']['tmp_name'])));
      $filename = $_FILES['image']['name'];
      $filetype = $_FILES['image']['type'];
      $filesize = $_FILES['image']['size'];
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
    echo $_POST['name'].', Ваше сообщение отправлено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
  }
}
?>
