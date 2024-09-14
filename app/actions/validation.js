"use server"

import { sql } from '@vercel/postgres';
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

// Function to validate user
export async function validateAccount() {
    let token = '';

    if(cookies().get("canadaca_secret")){
        token = cookies().get("canadaca_secret").value;
    }
  
    try {
      const id = await jwt.verify(token, process.env.JWT_SECRET).id;
    
      
      const result = await sql`SELECT * FROM users WHERE id = ${id};`;
      const user = result.rows[0];
  
      if (!user) {
        return { error: "User not found", success: false };
      }
  
      return {
        success: true,
        user: user
      };
    } catch (error) {
      console.log(error);
      return { error: "User not loggedin", success: false };
    }
}