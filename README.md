# Web-Form-Automation
To fill form in web page (particularly GoToWebinar website) automatically when they appear.\
It will wait for a form to appear on screen and then fill, submit it.\
It uses JavaScript MutationObserver. So, it dosen't use loops to wait for form to appear.\
It is specifically made to automate feedback form filling in GoToWebinar website ( https://www.gotomeeting.com/en-in/webinar/join-webinar ).\
I took extensive help from StackOverflow to do this. Here, I mention those link for reference.\
https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom \
https://stackoverflow.com/questions/7791507/how-can-i-select-all-checkboxes-from-a-form-using-pure-javascript-without-js-fr \

How to use it:\
1. Enter into the meeting conducted in GoToWebinar.\
2. Open Browser Console. (for Chrome: ctrl + shift + I shortcut key). (for Firefox: ctrl + shift + K).\
3. Go to Console tab.\
4. Paste the code after (>>) symbol and click Enter.\
5. That's it. It will wait for feedback form to appear, check (tick) the first input checkbox or radio button and then submit it.
