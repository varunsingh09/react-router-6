#!/bin/bash
source /home/ec2-user/sourcevars
cd /home/ec2-user/kenbox/prajjo_ui
pm2 start npm --name "prajjo_ui" -- start
