
  import { redirect } from "react-router-dom";

  export async function requireAuth() {
    const isLoggedIn = false;
  
    if (!isLoggedIn) {
      console.log("hi");
      throw redirect("/login");
    }
  
    // ...
  }


  

  // import { redirect } from "react-router-dom"

  // export async function requireAuth(request) {
  //     const pathname = new URL(request.url).pathname
  //     const isLoggedIn = localStorage.getItem("loggedin")
  
  //     if (!isLoggedIn) {
  //         throw redirect(
  //             `/login?message=You must log in first.&redirectTo=${pathname}`
  //         )
  //     }
  // }
  