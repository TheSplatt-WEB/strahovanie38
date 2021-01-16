<?php
if (isset($_POST['email'])) {
  $to = "strahovanie.38.irkutsk@gmail.com";
  $from = "support@strahovanie38.ru";
  $subject = "Заявка с сайта " . $_SERVER['HTTP_REFERER'];

  $c = true;
  $message = "<table style='width: 100%;'>";
  foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "") {
      $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
    }
  }
  $message .= "</table>";

  $boundary = md5(date('r', time()));

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

  $body = "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
  $body .= "--$boundary\n";
  $body .= "Content-Type: text/html; charset=\"utf-8\"\n";
  $body .= "Content-Transfer-Encoding: quoted-printable\n\n";
  $body .= "$message\n\n";

  $filesize = 0;
  $count = 0;
  foreach ($_FILES['attach']['name'] as $file) {
    if (is_uploaded_file($_FILES['attach']['tmp_name'][$count])) {
      $attachment = chunk_split(base64_encode(file_get_contents($_FILES['attach']['tmp_name'][$count])));
      $filename = $_FILES['attach']['name'][$count];
      $filetype = $_FILES['attach']['type'][$count];
      $filesize += $_FILES['attach']['size'][$count];
      $body .= "--$boundary\n";
      $body .= "Content-Type: \"$filetype\"; name=\"$filename\"\n";
      $body .= "Content-Transfer-Encoding: base64\n";
      $body .= "Content-Disposition: attachment; filename=\"$filename\"\n\n";
      $body .= $attachment . "\n";
    }
    $count++;
  }
  $body .= "--$boundary--\n";

  if ($filesize < 50000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $body, $headers);
    echo $_POST['name'] . ', Ваше сообщение отправлено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. Размер всех файлов превышает 50 МБ.';
  }
}
