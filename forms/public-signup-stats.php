<?php
// Public, privacy-safe rider signup statistics for the front-end map.
// Returns country counts only. It does NOT expose names, emails, cities, IPs, or notes.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$path = __DIR__ . '/data/rider-signups.csv';
$result = [
    'ok' => true,
    'total' => 0,
    'countries' => new stdClass()
];

if (!file_exists($path) || !is_readable($path)) {
    echo json_encode($result);
    exit;
}

$fp = fopen($path, 'r');
if (!$fp) {
    echo json_encode($result);
    exit;
}

$headers = fgetcsv($fp);
if (!$headers) {
    fclose($fp);
    echo json_encode($result);
    exit;
}

$countryIndex = array_search('Country', $headers, true);
if ($countryIndex === false) {
    fclose($fp);
    echo json_encode($result);
    exit;
}

$counts = [];
$total = 0;
while (($row = fgetcsv($fp)) !== false) {
    $country = isset($row[$countryIndex]) ? trim((string)$row[$countryIndex]) : '';
    if ($country === '') continue;
    if (!isset($counts[$country])) $counts[$country] = 0;
    $counts[$country]++;
    $total++;
}
fclose($fp);
ksort($counts, SORT_NATURAL | SORT_FLAG_CASE);

$result['total'] = $total;
$result['countries'] = $counts;
echo json_encode($result);
?>
