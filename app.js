
if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registrado!");
        console.log(registration)
      }).catch(error => {
        console.log("SW registracion fallida!");
        console.log(error);
      })
  }

