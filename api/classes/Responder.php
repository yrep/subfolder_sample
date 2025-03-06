<?php
class Responder {
    public function createResponse(int $status, mixed $data): string {
        return json_encode([
            'status' => $status,
            'data' => $data
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
}