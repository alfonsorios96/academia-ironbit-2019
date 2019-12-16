<?php    
/*
 * PHP QR Code encoder
 *
 * Exemplatory usage
 *
 * PHP QR Code is distributed under LGPL 3
 * Copyright (C) 2010 Dominik Dzienia <deltalab at poczta dot fm>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */

    
    echo "<h1>Generador de QR</h1><hr/>";
    
    //set it to writable location, a place for temp generated PNG files
    $PNG_TEMP_DIR = dirname(__FILE__).DIRECTORY_SEPARATOR.'temp'.DIRECTORY_SEPARATOR;
    
    //html PNG location prefix
    $PNG_WEB_DIR = 'temp/';

    include "qrlib.php";    
    
    //ofcourse we need rights to create temp dir
    if (!file_exists($PNG_TEMP_DIR))
        mkdir($PNG_TEMP_DIR);
    $filename = $PNG_TEMP_DIR.'dicss.png';
    
    //processing form input
    //remember to sanitize user input in real-life solution !!!
    $errorCorrectionLevel = 'L';
    if (isset($_REQUEST['level']) && in_array($_REQUEST['level'], array('Pequeño','Mediano','Grande','Más grande')))
        $errorCorrectionLevel = $_REQUEST['level'];    

    $matrixPointSize = 4;
    if (isset($_REQUEST['size']))
        $matrixPointSize = min(max((int)$_REQUEST['size'], 1), 10);


    if (isset($_REQUEST['data'])) { 
    
        //it's very important!
        if (trim($_REQUEST['data']) == '')
            die('Debe escribir un texto para generar la imagen <a href="?">back</a>');
            
        // user data
        $nombrearchivo = 'dicss'.md5($_REQUEST['data'].'|'.$errorCorrectionLevel.'|'.$matrixPointSize).'.png';
        $filename = $PNG_TEMP_DIR.$nombrearchivo;
        QRcode::png($_REQUEST['data'], $filename, $errorCorrectionLevel, $matrixPointSize, 2);
        echo "<br><h2>".$_REQUEST['data']."
            <a href='temp/".$nombrearchivo."' target='_blank' download>Descargar</a>
            </h2>";
    } else {    
        //default data
        echo '<hr>Puedes generar el QR escribiendo un texto o Url: <a href="?data=Ejemplo de texto generado">Ejemplo de texto generado</a><hr/>';    
        QRcode::png('https://dicss.com.mx/', $filename, $errorCorrectionLevel, $matrixPointSize, 2);
        echo "<br><h2>https://dicss.com.mx/</h2>";
    }    
        
    //display generated file
    echo '<img src="'.$PNG_WEB_DIR.basename($filename).'" /><hr/>';  
    
    //config form
    echo '<form action="index.php" method="post">
        Escribe el texto para generar:<br>&nbsp;<input name="data" value="'.(isset($_REQUEST['data'])?htmlspecialchars($_REQUEST['data']):'https://dicss.com.mx/').'" />&nbsp;<br><br>
        Selecciona la calidad de la imagen:&nbsp;<br><select name="level">
            <option value="L"'.(($errorCorrectionLevel=='L')?' selected':'').'>Baja - pequeña</option>
            <option value="M"'.(($errorCorrectionLevel=='M')?' selected':'').'>Media</option>
            <option value="Q"'.(($errorCorrectionLevel=='Q')?' selected':'').'>Alta</option>
            <option value="H"'.(($errorCorrectionLevel=='H')?' selected':'').'>Alta - mejor</option>
        </select>&nbsp;<br><br>
        Tamaño:&nbsp;<br><select name="size">';
        
    for($i=1;$i<=10;$i++)
        echo '<option value="'.$i.'"'.(($matrixPointSize==$i)?' selected':'').'>'.$i.'</option>';
        
    echo '</select>&nbsp;<br><br><br>
        <input type="submit" value="Generar"></form><hr/>';
        
    // benchmark
    //QRtools::timeBenchmark();    

    