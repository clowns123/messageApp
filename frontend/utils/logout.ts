const onLogoutSuccess = () => {
  console.log(onLogoutSuccess);
  
  sessionStorage.removeItem('login_session');
}

export const onLogout = async () => {
  console.log("onLogout");
  
  if (window.gapi) {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.then(
        async () => {
          await auth2.signOut();
        },
        (err) => console.log(err),
      );
      onLogoutSuccess();
      console.log("disconnect");
      await auth2.disconnect();
    }
  }
};
