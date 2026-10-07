<?php
require_once __DIR__ . '/auth.php';
$error = '';

if (admin_is_logged_in()) {
    header('Location: index.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = (string)($_POST['password'] ?? '');

    if (hash_equals($ADMIN_USERNAME, $username) && password_verify($password, $ADMIN_PASSWORD_HASH)) {
        session_regenerate_id(true);
        $_SESSION[$ADMIN_SESSION_KEY] = true;
        header('Location: index.php');
        exit;
    }

    $error = 'Invalid username or password.';
}
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CMWC Admin Login</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body class="admin-body">
  <main class="login-wrap">
    <form class="login-card" method="post" action="login.php">
      <p class="eyebrow">CMWC Bogotá 2027</p>
      <h1>Admin Login</h1>
      <p class="muted">View rider, volunteer, and sponsor form submissions.</p>
      <?php if ($error): ?><div class="alert"><?= h($error) ?></div><?php endif; ?>
      <label>Username
        <input type="text" name="username" autocomplete="username" required>
      </label>
      <label>Password
        <input type="password" name="password" autocomplete="current-password" required>
      </label>
      <button type="submit">Log In</button>
      <a class="back-link" href="../index.html">← Back to site</a>
    </form>
  </main>
</body>
</html>
