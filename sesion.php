<?php
require 'setting.php';

session_start();

function microtime_float()
        {
                list($usec, $sec) = explode(" ", microtime());
                return ((float)$usec + (float)$sec);
        }


function token(){

            $time_start = $_SESSION['time_start'] ;
                 if ($time_start=='') {
            $time_start = microtime_float();
                } 


                $time_end = microtime_float();
                $time = $time_end - $time_start;

                $pass = false;
                if ($time > 90) {
                        $pass=true;
                } else {
                        $pass=false;
                }
        

                if ($pass) {
                        return "ZIZitbSW5i2PmbdTUCOkenUyEUKAEwf1tFBUY6C2sDZ";
        
                   } else {
                        return "9t025owq7kZbTFuHl5p2FyakzPCbJSVzWNa94MC4mMQ";
                }


        }

?>
