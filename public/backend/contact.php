<?php
/*=======================================
* お問い合せフォーム
* URL:public/backend/contact.php
* Referenced in: /page.tsx,
* Created: 2025-11-08
* Last updated: 2025-11-08
* ======================================= */

header("Access-Control-Allow-Origin: *"); // CORS対策
header("Content-Type: application/json");

// フォームデータを受け取る
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	// TSXから送信される全項目を受け取り
	$companyName = isset($_POST["CompanyName"]) ? trim($_POST["CompanyName"]) : "";
	$industry = isset($_POST["industry"]) ? trim($_POST["industry"]) : "";
	$name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
	$post = isset($_POST["post"]) ? trim($_POST["post"]) : "";
	$city = isset($_POST["city"]) ? trim($_POST["city"]) : "";
	$address = isset($_POST["address"]) ? trim($_POST["address"]) : "";
	$building = isset($_POST["building"]) ? trim($_POST["building"]) : "";
	$email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
	$phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
	$message = isset($_POST["message"]) ? trim($_POST["message"]) : "";
	$reply = isset($_POST["reply"]) ? trim($_POST["reply"]) : "";

	// 必須項目のバリデーション（TSXの必須項目に合わせる）
	if (empty($name) || empty($email) || empty($phone) || empty($message) || empty($reply)) {
		echo json_encode(["success" => false, "error" => "必須項目を入力してください"]);
		exit;
	}

	// 📩 **メールの設定**
	$to = "ken.atnek@gmail.com";
	$to_name = "RITA-WORK";
	$send_date = date("Y/n/j-H:i", time());
	$from_name = "リタワーク お問い合わせ";
	$from_email = "contact@rita-work.jp";

	// **エンコーディング設定**
	$orgEncoding = mb_internal_encoding();
	mb_language("uni");
	mb_internal_encoding('UTF-8');

	$header_from = 'From: "' . mb_encode_mimeheader($from_name, 'ISO-2022-JP') . '" <' . $from_email . '>' . "\r\n";
	$header_from .= 'Reply-To: ' . $email;

	// **メール本文（全項目を含める）**
	$subject = 'お問い合せがありました';
	$mail_body = "お問い合わせフォームより\n";
	$mail_body .= "--------------------\n";

	// 事業所名（任意項目なので空でない場合のみ表示）
	if (!empty($companyName)) {
		$mail_body .= "■事業所名\n{$companyName}\n";
		$mail_body .= "--------------------\n";
	}

	// 業種（任意項目なので空でない場合のみ表示）
	if (!empty($industry)) {
		$mail_body .= "■業種\n{$industry}\n";
		$mail_body .= "--------------------\n";
	}

	$mail_body .= "■お名前\n{$name} 様\n";
	$mail_body .= "--------------------\n";

	// 住所情報をまとめて表示
	$fullAddress = "";
	if (!empty($post)) $fullAddress .= "〒" . $post . "\n";
	if (!empty($city)) $fullAddress .= $city;
	if (!empty($address)) $fullAddress .= $address;
	if (!empty($building)) $fullAddress .= " " . $building;

	if (!empty($fullAddress)) {
		$mail_body .= "■住所\n{$fullAddress}\n";
		$mail_body .= "--------------------\n";
	}

	$mail_body .= "■メールアドレス\n{$email}\n";
	$mail_body .= "--------------------\n";
	$mail_body .= "■電話番号\n{$phone}\n";
	$mail_body .= "--------------------\n";
	$mail_body .= "■折り返し連絡方法\n{$reply}\n";
	$mail_body .= "--------------------\n";
	$mail_body .= "■お問い合わせ内容\n{$message}\n";
	$mail_body .= "--------------------\n";
	$mail_body .= $send_date . "\n";

	$mail_body = str_replace("\r\n", "\n", $mail_body);

	// **宛先**
	$to_name = mb_encode_mimeheader($to_name, 'ISO-2022-JP');
	$send_target = $to_name . ' <' . $to . '>';

	// **送信**
	$rslt = mb_send_mail($send_target, $subject, $mail_body, $header_from, "-f$from_email");

	// **エンコーディングを元に戻す**
	mb_internal_encoding($orgEncoding);

	// **送信結果を適切に出力**
	if ($rslt) {
		echo json_encode(["success" => true, "message" => "メール送信成功！"]);
	} else {
		echo json_encode(["success" => false, "error" => "メール送信に失敗しました"]);
	}
} else {
	echo json_encode(["success" => false, "error" => "無効なリクエスト"]);
}
