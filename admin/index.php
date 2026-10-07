<?php
require_once __DIR__ . '/auth.php';
require_admin_login();

$csvFiles = [
    'riders' => [
        'title' => 'Rider Signups',
        'file' => __DIR__ . '/../forms/data/rider-signups.csv',
        'download' => 'rider-signups.csv'
    ],
    'volunteers' => [
        'title' => 'Volunteer Signups',
        'file' => __DIR__ . '/../forms/data/volunteer-signups.csv',
        'download' => 'volunteer-signups.csv'
    ],
    'sponsors' => [
        'title' => 'Sponsor Applications',
        'file' => __DIR__ . '/../forms/data/sponsor-applications.csv',
        'download' => 'sponsor-applications.csv'
    ],
    'contacts' => [
        'title' => 'Contact Messages',
        'file' => __DIR__ . '/../forms/data/contact-messages.csv',
        'download' => 'contact-messages.csv'
    ],
    'subscribers' => [
        'title' => 'Subscribers',
        'file' => __DIR__ . '/../forms/data/subscribers.csv',
        'download' => 'subscribers.csv'
    ],
];

function read_csv_table($path) {
    if (!file_exists($path)) {
        return ['headers' => [], 'rows' => []];
    }
    $fp = fopen($path, 'r');
    if (!$fp) {
        return ['headers' => [], 'rows' => []];
    }
    $headers = fgetcsv($fp) ?: [];
    $rows = [];
    while (($row = fgetcsv($fp)) !== false) {
        $rows[] = $row;
    }
    fclose($fp);
    $rows = array_reverse($rows); // newest first
    return ['headers' => $headers, 'rows' => $rows];
}

function count_csv_rows($path) {
    $data = read_csv_table($path);
    return count($data['rows']);
}

$active = $_GET['type'] ?? 'riders';
if (!isset($csvFiles[$active])) {
    $active = 'riders';
}
$current = $csvFiles[$active];
$table = read_csv_table($current['file']);
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CMWC Admin Dashboard</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body class="admin-body">
  <header class="admin-header">
    <div>
      <p class="eyebrow">CMWC Bogotá 2027</p>
      <h1>Form Submissions</h1>
    </div>
    <nav>
      <a href="../index.html">View site</a>
      <a href="logout.php">Log out</a>
    </nav>
  </header>

  <main class="dashboard-wrap">
    <section class="stat-grid">
      <?php foreach ($csvFiles as $key => $info): ?>
        <a class="stat-card <?= $key === $active ? 'active' : '' ?>" href="?type=<?= h($key) ?>">
          <span><?= h($info['title']) ?></span>
          <strong><?= count_csv_rows($info['file']) ?></strong>
        </a>
      <?php endforeach; ?>
    </section>

    <section class="table-card">
      <div class="table-card-head">
        <div>
          <h2><?= h($current['title']) ?></h2>
          <p class="muted">Newest submissions are shown first.</p>
        </div>
        <a class="download-btn" href="download.php?type=<?= h($active) ?>">Download CSV</a>
      </div>

      <?php if (empty($table['rows'])): ?>
        <div class="empty-state">No submissions yet for this form.</div>
      <?php else: ?>
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <?php foreach ($table['headers'] as $header): ?>
                  <th><?= h(str_replace('_', ' ', $header)) ?></th>
                <?php endforeach; ?>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($table['rows'] as $row): ?>
                <tr>
                  <?php foreach ($table['headers'] as $i => $header): ?>
                    <td><?= h($row[$i] ?? '') ?></td>
                  <?php endforeach; ?>
                </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
      <?php endif; ?>
    </section>
  </main>
</body>
</html>
