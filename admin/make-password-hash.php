<?php
// Optional helper. Use this once to create a new password hash, paste it into admin/config.php,
// then delete this file from the server.
$hash = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = (string)($_POST['password'] ?? '');
    if (strlen($password) >= 10) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
    }
}
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Create Admin Password Hash</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body class="admin-body">
  <main class="login-wrap">
    <form class="login-card" method="post">
      <p class="eyebrow">Optional helper</p>
      <h1>Create Password Hash</h1>
      <p class="muted">Enter a new admin password, copy the generated hash into <code>admin/config.php</code>, then delete this helper file from the server.</p>
      <label>New password
        <input type="password" name="password" minlength="10" required>
      </label>
      <button type="submit">Generate Hash</button>
      <?php if ($hash): ?>
        <textarea readonly onclick="this.select()" rows="5"><?= htmlspecialchars($hash, ENT_QUOTES, 'UTF-8') ?></textarea>
      <?php elseif ($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
        <div class="alert">Use at least 10 characters.</div>
      <?php endif; ?>
      <a class="back-link" href="login.php">← Back to login</a>
    </form>
  </main>
</body>
</html>
