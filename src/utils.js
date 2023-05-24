
//   import { Request } from "miragejs";
// import { redirect } from "react-router-dom";

//   export async function requireAuth() {
//     const isLoggedIn = false;
  
//     if (!isLoggedIn) {
//       // if Request.path == "./pages/Login";
//       console.log("hi");
//       throw redirect("./pages/Login");
//     }
  
//     // ...
//   }


  

  import { redirect } from "react-router-dom"

  export async function requireAuth(request) {
      const pathname = new URL(request.url).pathname
      const isLoggedIn = localStorage.getItem("loggedin")
  
      if (!isLoggedIn) {
          throw redirect(
              `/login?message=You must log in first.&redirectTo=${pathname}`
          )
      }
  }
  