<?php
$dir = strtolower($_REQUEST['dir']);
header("Access-Control-Allow-Origin: *");
$result = array();
$path = '../result'.($dir ? '/' . $dir : '');
$files = getDirContents($path);

if ($files) {
    foreach ($files as $key => $f) {
        $result[] = array("image", $f);
    }
}
$json = json_encode($result);
echo $json;

/*
 * Get all the files and folders in a directory
 */
function getDirContents($dir, &$results = array()) {
    $files = scandir($dir);
    foreach($files as $key => $value){
        $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
        if(!is_dir($path)) {
            if (in_array(path_parts($path, 'extension'), array('jpg', 'jpeg', 'png'))) {
                $results[] = $path;
            }
        } else if($value != "." && $value != "..") {
            getDirContents($path, $results);
            //$results[] = $path;
        }
    }
    return $results;
}

// filter only images
function path_parts($path, $parts = '') {
    $path_parts = pathinfo($path);
    return $path_parts[$parts];
}