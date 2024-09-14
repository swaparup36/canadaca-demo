"use server"

import { Client } from 'pg';
// import { cookies } from "next/headers";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

const client = new Client({
  connectionString: 'postgresql://canadaca_owner:UtRzb7yYM8qI@ep-summer-mouse-a4zh9kvn.us-east-1.aws.neon.tech/canadaca?sslmode=require',
});


export async function userSignup(formdata) {
    try {
        client.connect();
        const hashedPassword = await bcrypt.hash(formdata.password, 10);
  
        const queryText =
        "INSERT INTO users (full_name, email, password, qualification, utr, nationality, state, job, passport, image, resume, job_experience_letter, plan, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
        formdata.full_name,
        formdata.email,
        hashedPassword,
        formdata.qualification,
        formdata.utr,
        formdata.nationality,
        formdata.state,
        formdata.job,
        formdata.passport,
        formdata.image,
        formdata.resume,
        formdata.job_experience_letter,
        formdata.plan,
        formdata.price
        ];
    
        const result = await client.query(queryText, values);
    
        return {
            result: result,
            message: "Account created successfully",
            success: true,
        };
    } catch (error) {
        console.log(error);
    }
}