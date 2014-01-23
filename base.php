<?php
    include "config.php";
        session_start();
        
        $dbhost = MySQLHost(); // this will ususally be 'localhost', but can sometimes differ  
        $dbname = MySQLDB(); // the name of the database that you are going to use for this project  
        $dbuser = MySQLUsername(); // the username that you created, or were given, to access your database  
        $dbpass = MySQLPassword(); // the password that you created, or were given, to access your database  
  
        mysql_connect($dbhost, $dbuser, $dbpass) or die("MySQL Error: " . mysql_error());  
        mysql_select_db($dbname) or die("MySQL Error: " . mysql_error()); 
        
        class Curl
        {
          protected $info = [];
          
          public function exec($url, $setopt = array(), $post = array())
          {
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20100101 Firefox/15.0.1');
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
            if ( ! empty($post))
            {
              curl_setopt($curl, CURLOPT_POST, 1);
              curl_setopt($curl, CURLOPT_POSTFIELDS, $post);
            }
            if ( ! empty($setopt))
            {
              foreach ($setopt as $key => $value)
              {
                curl_setopt($curl, $key, $value);
              }
            }
            $data = curl_exec($curl);
            $this->info = curl_getinfo($curl);
            curl_close($curl);
            return $data;
          }
         
          public function getInfo()
          {
            return $this->info;
          }
        }
