function popup(url,windowName) {
  newWindow=window.open(url,windowName,'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=250, top=100, left=100');
  if (window.focus) {newWindow.focus()}
  return false;
}

popup("https://news-push.netlify.app/","notificaciones Cliente1");