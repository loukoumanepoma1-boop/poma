<?php
// Configuration de la base de données
$host = 'localhost';
$dbname = 'mi_parcourts';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Récupérer tous les certificats
    $stmt = $pdo->query("SELECT * FROM certificat ORDER BY date_obtention DESC");
    $certificats = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-Type: application/json');
    echo json_encode($certificats);
    
} catch(PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>