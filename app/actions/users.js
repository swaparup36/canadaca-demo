"use server"

import { sql } from '@vercel/postgres';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'crampusgaming@gmail.com',
      pass: process.env.USER_EMAIL_PASS,
    },
});

// Function to user signup
export async function userSignup(formdata) {
    try {
        const hashedPassword = await bcrypt.hash(formdata.password, 10);

        const checkresult = await sql`SELECT * FROM users WHERE email = ${formdata.email}`;
        if(checkresult.rowCount > 0){
            return {
                message: "user already exists",
                success: false
            }
        }

        const result = await sql`INSERT INTO users (full_name, email, password, qualification, utr, nationality, state, job, passportfront, passportback, image, resume, job_experience_letter, plan, price) VALUES (${formdata.full_name}, ${formdata.email}, ${hashedPassword}, ${formdata.qualification}, ${formdata.utr}, ${formdata.nationality}, ${formdata.state}, ${formdata.job}, ${formdata.passportfront}, ${formdata.passportback}, ${formdata.image}, ${formdata.resume}, ${formdata.job_experience_letter}, ${formdata.plan}, ${formdata.price});`;

        const user = await sql`SELECT * FROM users WHERE email = ${formdata.email}`;
        const jwtPayload = {
            id: user.rows[0].id,
          };
          const token = await jwt.sign(jwtPayload, process.env.JWT_SECRET);
          cookies().set("canadaca_secret", token);
    
        return {
            result: result.rows,
            message: "Account created successfully",
            success: true,
        };
    } catch (error) {
        console.log(error);
        return {
            message: "something wrong happend",
            error: error,
            success: false
        }
    }
}

// Function to user plan purchase
export async function userPurchasePlan(formdata) {
    try {
        const token = cookies().get("canadaca_secret").value;
        const id = await jwt.verify(token, process.env.JWT_SECRET).id;
        const checkresult = await sql`SELECT * FROM users WHERE id = ${id};`;

        const user = checkresult.rows[0];
        if(!user){
            return {
                message: "user does not exists",
                success: false
            }
        }

        const result = await sql`UPDATE users SET plan = ${formdata.plan}, price = ${formdata.price}, utr = ${formdata.plan} WHERE id = ${user.id};`;

        return {
            result: result.rowCount,
            message: "Plan purchased successfully",
            success: true,
        };
    } catch (error) {
        console.log(error);
        return {
            message: "something wrong happend",
            error: error,
            success: false
        }
    }
}

// Function to check if any user with same email exists or not
export async function userEmailCheck(email) {
    try {
        const result = await sql`SELECT * FROM users WHERE email = ${email}`;
        if(result.rowCount > 0){
            return {
                message: "user already exists",
                success: true
            }
        }else{
            return {
                message: "user does not exists",
                success: false,
            };
        }
        
    } catch (error) {
        console.log(error);
        return {
            message: "something wrong happend",
            error: error,
            success: false
        }
    }
}

export async function sendUserJoiningMail(){
    try {

        const info = await transporter.sendMail(
            {
              from: 'info@wedeazzy.com', // sender address
              to: 'ca.broadwayimmigration@gmail.com', // list of receivers
              subject: 'New User Registered', // Subject line
              text: `Hi, Admin. A new user just joined.`
            },
            (err) => {
              if (err) {
                console.log("IT has error ", err);
              } else {
                console.log("email has been send");
              }
              console.log(info);
            }
        );

        return { message: 'Email sent to admin', success: true };
    } catch (error) {
        return { error: error, success: false };
    }
}

// Function to logout user
export async function userLogout() {
    cookies().delete("canadaca_secret");
  }