#!bin/bash

#---------------
# Server Stats
#--------------

echo "============================"
echo "Server Performance Stats"
echo "============================"

# ---------- OS & UPTIME INFO ----------

echo "\n OS and Uptime Info"
echo "============================"
echo "Version:  $(lsb_release -d | cut -f2)"
echo "Kernel : $(uname -r)"
echo "Uptime : $(uptime -p)"
echo "Logged IN - Users : $(who|wc -l)"



# ---------- CPU USAGE ----------

echo -e "\n🔥 Total CPU Usage:"
echo "--------------------------------------"
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print 100 - $8 "%"}')
echo "CPU Usage: $CPU_USAGE"

