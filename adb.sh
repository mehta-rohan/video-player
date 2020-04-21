adb kill-server
sudo adb start-server
adb reverse tcp:8081 tcp:8081
adb devices