import React from 'react';


import { redirect } from "react-router-dom"

export async function requireAuth() {

    
    const isLoggedIn = false;
    
    if (!isLoggedIn) {
        console.log("hi")
        throw redirect("/login")
       debugger 
    }
    
   
  }
  
