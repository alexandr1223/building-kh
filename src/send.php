<?php /* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$token = "1664084955:AAFb1dncQ_odzEoujNcJaAltWObcBJHsIjY";
$chat_id = "-554208195";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Сообщение:' => $message
);
foreach ($arr as $key => $value)
{
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
?>
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <head>
        <meta charset="utf-8">
    <title>Поздравляем! Ваш заказ принят!</title>
    <style type="text/css">
        body {
        line-height: 1;
        height: 100%;
        font-family: Arial;
        font-size: 15px;
        color: #313e47;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        }
        h2 {
        margin: 0;
        padding: 0;
        font-size: 36px;
        line-height: 44px;
        color: #313e47;
        text-align: center;
        font-weight: bold;
        }
        a {
        color: #69B9FF;
        }
        .list_info li span {
        width: 150px;
        display: inline-block;
        font-weight: bold;
        font-style: normal;
        }
        .list_info {
        text-align: left;
        display: inline-block;
        list-style: none;
        margin-top: -10px;
        margin-bottom: -11px;
        }
        .list_info li {
            margin: 11px 0px;
        }
        .fail {
        margin: 10px 0 20px 0px;
        text-align: center;
        }
        .email {
        position: relative;
        text-align: center;
        margin-top: 40px;
        }
        .email input {
        height: 30px;
        width: 200px;
        font-size: 14px;
        padding-right: 10px;
        padding-left: 10px;
        outline: none;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #B6B6B6;
        margin-bottom: 10px;
        }
        .block_success {
        max-width: 960px;
        padding: 70px 30px 70px 30px;
        margin: -50px auto;
        }
        .success {
        text-align: center;
        }
    </style>
    </head>
    <body>

    <div class="block_success">
    <h2>Поздравляем! Ваш заказ принят!</h2>
    <p class="success">
        В ближайшее время с вами свяжется оператор для подтверждения заказа. Пожалуйста, включите ваш контактный телефон.
    </p>
    <h3 class="success">
        Пожалуйста, проверьте правильность введенной Вами информации.
    </h3>
    <div class="success">
        <ul class="list_info">
        <li><span>Ф.И.O.:  </span><span id="client"><?=$_POST['name']?></span></li>
            <li><span>Телефон: </span><span id="tel"><?=$_POST['phone']?></span></li>
            <li><span>Ваше сообщение: </span><span id="mail"><?=$_POST['message']?></span></li>
    </ul>
    <br/><span id="submit"></span>
    </div>
    <p class="fail success">Если вы ошиблись при заполнени формы, то, пожалуйста, <a href="javascript: history.back(-1);">заполните заявку еще раз</a></p>
    <p class="fail success"><a href="/">На главную</a></p>
    </body>
    </html>