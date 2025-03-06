<?php
header('Content-Type: application/json');

require_once __DIR__ . '/classes/TestClas.php';
require_once __DIR__ . '/classes/Responder.php';

$testClass = new TestClas();
$time = $testClass->getCurrentTime();

$responder = new Responder();
echo $responder->createResponse(200, ['time' => $time]);