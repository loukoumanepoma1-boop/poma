<?php
// Configuration de la base de données
$host = 'localhost';
$dbname = 'mi_parcourts';
$username = 'root';
$password = '';

header('Content-Type: application/json');

if (!isset($_GET['id'])) {
    echo json_encode(['error' => 'ID manquant']);
    exit;
}

$id = intval($_GET['id']);

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT * FROM certificat WHERE id_certificat = ?");
    $stmt->execute([$id]);
    $certificat = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($certificat) {
        echo json_encode($certificat);
    } else {
        echo json_encode(['error' => 'Certificat non trouvé']);
    }
    
} catch(PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>