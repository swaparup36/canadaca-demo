"use client"

import { MoveRight, UploadCloud } from "lucide-react";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { userSignup, sendUserJoiningMail } from "../actions/users";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";


export default function UserSignup() {   
    const notify = (msg: string) => toast(msg); 
    const indianStates = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
      ];
    const router = useRouter();
      
    const [userSignupDetails, setUserSignupDetails] = useState({
        email: '',
        full_name: '',
        password: '',
        qualification: '',
        utr: '',
        nationality: '',
        state: '',
        job: '',
        passport: '',
        image: '',
        resume: '',
        job_experience_letter: '',
        plan: '',
        price: 0
    });

    const [passportFileName, setPassportFileName] = useState('');
    const [resumeFileName, setResumeFileName] = useState('');
    const [jobexpletterFileName, setJobexpletterFileName] = useState('');

    const userSignnupDetailsOnchange = (e) => {
        const {name, value, files} = e.target;
        if(name === 'image'){
            if(!files[0]) return;
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setUserSignupDetails({ ...userSignupDetails, [name]: reader.result });
            };
            
        }else if(name === 'resume'){
            if(!files[0]) return;
            setResumeFileName(files[0].name);
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setUserSignupDetails({ ...userSignupDetails, [name]: reader.result });
            };
        }else if(name === 'passport'){
            if(!files[0]) return;
            setPassportFileName(files[0].name);
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setUserSignupDetails({ ...userSignupDetails, [name]: reader.result });
            };
        }else if(name === 'job_experience_letter'){
            if(!files[0]) return;
            setJobexpletterFileName(files[0].name);
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setUserSignupDetails({ ...userSignupDetails, [name]: reader.result });
            };
        }else{
            setUserSignupDetails({...userSignupDetails, [name]: value });
        }
    }

    const handleSubmitSignupForm = async(e) => {
        e.preventDefault();

        try {
            const response = await userSignup(userSignupDetails);
            console.log(response);

            if(response.success){
                notify(response.message);
                const sendMailResult = await sendUserJoiningMail();
                console.log(sendMailResult);
                sessionStorage.removeItem('payment_details');
                router.push('/');
            }else{
                notify(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        const userPaymentDetails = sessionStorage.getItem('payment_details');
        if(!userPaymentDetails) return;
        const userPaymentDetailsObj = JSON.parse(userPaymentDetails);
        setUserSignupDetails({ ...userSignupDetails,
            email: userPaymentDetailsObj.email,
            utr: userPaymentDetailsObj.utr,
            plan: userPaymentDetailsObj.plan,
            price: userPaymentDetailsObj.plan_Price
        })
    }, []);

    useEffect(()=>{
        if(!sessionStorage.getItem('payment_details')) {
            router.push('/getstarted-plans');
        }
    }, []);

  return (
    <>
        <ToastContainer />
        <div className="flex flex-col justify-center items-center w-full py-5">
            <h1 className="font-bold text-5xl my-2">Sign up</h1>
            <p className="text-gray-500">Fill the details to join us</p>
        </div>
        <div className="flex justify-center items-center p-5 w-full">
            <div className="p-10 w-[40%] min-h-[50svh] flex flex-col justify-between items-start" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' }}>
                <form className="w-full" onSubmit={handleSubmitSignupForm}>
                    <h3 className="text-2xl my-4 font-medium flex items-center">Fill the details <MoveRight className="ml-2" /></h3>
                    <p className="font-semibold my-4 text-lg">Personal Details</p>
                    <div className="flex justify-start items-center w-full my-2">
                        <Image className="rounded-full" src={userSignupDetails.image === '' ? '/images/blank-dp.png' : userSignupDetails.image} alt="user-profile-img" width={110} height={110} />
                        <div className="flex flex-col justify-around items-start ml-10">
                            <div className="flex items-center justify-around">
                                <label htmlFor="userimage" className="text-sm my-2 cursor-pointer bg-black text-white px-3 py-2 rounded-md mr-1">Upload</label>
                                <span className="text-sm my-2 bg-black text-white px-3 py-2 rounded-md ml-1 cursor-pointer" onClick={()=>setUserSignupDetails({...userSignupDetails, image: ''})} >Remove</span>
                            </div>
                            <p className="text-sm">Upload Profile Picture (only .png, .jpg or .jpeg formats)</p>
                        </div>
                        <input type="file" accept=".png, .jpg, .jpeg" id="userimage" name="image" onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" hidden required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="userfullname" className="text-sm my-2">Full Name</label>
                        <input type="text" id="userfullname" placeholder="Enter your full name" name="full_name" value={userSignupDetails.full_name} onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="useremail" className="text-sm my-2">Email</label>
                        <input type="email" id="useremail" placeholder="Enter your email" name="email" value={userSignupDetails.email} onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="userpass" className="text-sm my-2">Password</label>
                        <input type="password" id="userpass" placeholder="Enter your password" name="password" value={userSignupDetails.password} onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="userqualification" className="text-sm my-2">Quallification</label>
                        <input type="text" id="userqualification" placeholder="Enter your qualification" name="qualification" value={userSignupDetails.qualification} onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="usernationality" className="text-sm my-2">Nationality</label>
                        <input type="text" id="usernationality" placeholder="Enter your nationality" name="nationality" value={userSignupDetails.nationality} onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="userestate" className="text-sm my-2">State</label>
                        <select id="userestate" name="state" value={userSignupDetails.state} onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" required>
                            <option value="">Choose your state</option>
                            {
                                indianStates.map((state, i)=>{
                                    return <option key={i} value={state}>{state}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="userjob" className="text-sm my-2">Job</label>
                        <input type="text" id="userjob" placeholder="Enter your job" name="job" value={userSignupDetails.job} onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" required/>
                    </div>

                    <p className="font-semibold my-4 text-lg">Documents</p>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <p className="text-sm">Passport</p>
                        <p className="text-sm text-center w-full">{passportFileName}</p>
                        <label htmlFor="userpassport" className="cursor-pointer text-sm flex-col my-2 border-dashed rounded-lg border-2 border-gray-400 h-[15svh] w-full flex justify-center items-center">
                            <UploadCloud size={40} color="gray" />
                            <p className="text-sm my-1">Upload Your Passport (only .png, .jpg, .jpeg and .pdf formats)</p>
                        </label>
                        <input type="file" accept=".png, .jpg, .jpeg, .pdf" id="userpassport" name="passport" onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" hidden required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <p className="text-sm">Resume</p>
                        <p className="text-sm text-center w-full">{resumeFileName}</p>
                        <label htmlFor="userresume" className="cursor-pointer text-sm flex-col my-2 border-dashed rounded-lg border-2 border-gray-400 h-[15svh] w-full flex justify-center items-center">
                            <UploadCloud size={40} color="gray" />
                            <p className="text-sm my-1">Upload Your Resume (only .png, .jpg, .jpeg and .pdf formats)</p>
                        </label>
                        <input type="file" accept=".png, .jpg, .jpeg, .pdf" id="userresume" name="resume" onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" hidden required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <p className="text-sm">Job experience letter</p>
                        <p className="text-sm text-center w-full">{jobexpletterFileName}</p>
                        <label htmlFor="userjobexpletter" className="cursor-pointer text-sm flex-col my-2 border-dashed rounded-lg border-2 border-gray-400 h-[15svh] w-full flex justify-center items-center">
                            <UploadCloud size={40} color="gray" />
                            <p className="text-sm my-1">Upload Your Job Experience Letter (only .png, .jpg, .jpeg and .pdf formats)</p>
                        </label>
                        <input type="file" accept=".png, .jpg, .jpeg, .pdf" id="userjobexpletter" name="job_experience_letter" onChange={userSignnupDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" hidden required/>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <button className="text-white w-full py-2 bg-black rounded-md my-2">Proceed</button>
                    </div>
                </form>
            </div>
        </div>
      <Footer/>
    </>
  );
}
