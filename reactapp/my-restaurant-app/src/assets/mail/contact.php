<?php

if(!$_POST) exit;

// Email address verification function
function isEmail($email) {
    return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$phone       = $_POST['phone'];
$email       = $_POST['email'];
$persons     = $_POST['persons'];
$extra_persons = isset($_POST['extra_persons']) ? intval($_POST['extra_persons']) : 0;
$date        = $_POST['date'];
$time        = $_POST['time'];

// Validate input fields
if(trim($phone) == '') {
    echo '<div class="alert alert-error">Please enter your phone number.</div>';
    exit();
} else if(trim($email) == '') {
    echo '<div class="alert alert-error">Please enter your email address.</div>';
    exit();
} else if(!isEmail($email)) {
    echo '<div class="alert alert-error">Please enter a valid email address.</div>';
    exit();
} else if(trim($persons) == '') {
    echo '<div class="alert alert-error">Please select the number of persons.</div>';
    exit();
} else if($persons == '8+' && ($extra_persons < 9 || !is_int($extra_persons))) {
    echo '<div class="alert alert-error">Please enter a valid number of persons for groups larger than 8.</div>';
    exit();
} else if(trim($date) == '') {
    echo '<div class="alert alert-error">Please select a date.</div>';
    exit();
} else if(trim($time) == '') {
    echo '<div class="alert alert-error">Please select a time.</div>';
    exit();
}

// Configuration option
$address = "Info@yourdomain.com";
$subject = "Table Booking Confirmation";

$total_persons = $persons == '8+' ? $extra_persons : $persons;

$e_body = "You have been contacted by a customer for table booking." . PHP_EOL . PHP_EOL;
$e_content = "Details are as follows:" . PHP_EOL;
$e_content .= "Phone: $phone" . PHP_EOL;
$e_content .= "Email: $email" . PHP_EOL;
$e_content .= "Persons: $total_persons" . PHP_EOL;
$e_content .= "Date: $date" . PHP_EOL;
$e_content .= "Time: $time" . PHP_EOL;
$e_reply = "You can contact the customer via email, $email";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $subject, $msg, $headers)) {
    echo "<div class='alert alert-success'>";
    echo "<h3>Booking Confirmed</h3>";
    echo "<p>Thank you <strong>$phone</strong>, your booking has been confirmed. An email has been sent to <strong>$email</strong>.</p>";
    echo "</div>";
} else {
    echo 'ERROR!';
}
?>
