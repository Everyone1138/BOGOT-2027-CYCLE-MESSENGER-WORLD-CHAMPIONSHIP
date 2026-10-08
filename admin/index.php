<?php
require_once __DIR__ . '/auth.php';
require_admin_login();

$csvFiles = [
    'riders' => [
        'title' => 'Race Signups',
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
    'traffic' => [
        'title' => 'Site Traffic',
        'file' => __DIR__ . '/../forms/data/site-traffic.csv',
        'download' => 'site-traffic.csv'
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

function traffic_summary($table) {
    $headers = $table['headers'];
    $rows = $table['rows'];
    $idx = array_flip($headers);
    $sessionIndex = $idx['session_id'] ?? null;
    $pathIndex = $idx['path'] ?? null;
    $timestampIndex = $idx['timestamp'] ?? null;
    $dateIndex = $idx['date'] ?? null;

    $sessions = [];
    $pageCounts = [];
    $today = date('Y-m-d');
    $todayCount = 0;

    foreach ($rows as $row) {
        if ($sessionIndex !== null && !empty($row[$sessionIndex])) {
            $sessions[$row[$sessionIndex]] = true;
        }
        if ($pathIndex !== null) {
            $path = $row[$pathIndex] ?? '';
            if ($path !== '') {
                $pageCounts[$path] = ($pageCounts[$path] ?? 0) + 1;
            }
        }
        if ($dateIndex !== null && ($row[$dateIndex] ?? '') === $today) {
            $todayCount++;
        }
    }

    arsort($pageCounts);

    return [
        'total' => count($rows),
        'unique_sessions' => count($sessions),
        'today' => $todayCount,
        'latest' => ($timestampIndex !== null && !empty($rows[0][$timestampIndex])) ? $rows[0][$timestampIndex] : '',
        'top_pages' => array_slice($pageCounts, 0, 5, true),
    ];
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

      <?php if ($active === 'traffic'): ?>
        <?php $traffic = traffic_summary($table); ?>
        <div class="traffic-summary-grid">
          <div class="mini-stat"><span>Total page views</span><strong><?= h($traffic['total']) ?></strong></div>
          <div class="mini-stat"><span>Unique sessions</span><strong><?= h($traffic['unique_sessions']) ?></strong></div>
          <div class="mini-stat"><span>Views today</span><strong><?= h($traffic['today']) ?></strong></div>
          <div class="mini-stat"><span>Latest visit</span><strong><?= h($traffic['latest'] ?: 'None yet') ?></strong></div>
        </div>
        <?php if (!empty($traffic['top_pages'])): ?>
          <div class="top-pages-box">
            <h3>Top pages</h3>
            <ol>
              <?php foreach ($traffic['top_pages'] as $page => $count): ?>
                <li><span><?= h($page) ?></span><strong><?= h($count) ?></strong></li>
              <?php endforeach; ?>
            </ol>
          </div>
        <?php endif; ?>
      <?php endif; ?>

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
