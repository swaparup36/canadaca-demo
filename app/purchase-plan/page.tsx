"use client"

import { MoveRight } from "lucide-react";
import Footer from "../components/footer";
import { GetContext } from "../context/planProvider";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userPurchasePlan } from '../actions/users';

export default function GetStartedPlans() {
    const notify = (msg: string) => toast(msg);
    const { chosenPlan } = GetContext();
    const router = useRouter();
    
    const [userPaymentDetails, setUserPaymentDetails] = useState({
        utr: '',
        plan: '',
        price: 0
    });

    const userPaymentDetailsOnchange = (e) => {
        setUserPaymentDetails({...userPaymentDetails, [e.target.name]: e.target.value })
    }

    const handleSubmitPaymentForm = async(e) => {
        e.preventDefault();

        try {
            const response = await userPurchasePlan(userPaymentDetails);

            if(response.success){
                console.log("Payment successfull");
                notify('Payment successfull');
                router.push('/');
            }else{
                console.log(response);
                notify(response.message);
            }
        } catch (error) {
            console.log(error);
            notify('Something went wrong');
        }
    }

    useEffect(()=>{
        if(chosenPlan.name === '') {
            router.push('/getstarted-plans');
        }

        setUserPaymentDetails({
            utr: '',
            plan: chosenPlan.name,
            price: chosenPlan.price
        })
    }, []);
    
  return (
    <>
        <ToastContainer />
        <div className="flex justify-center items-center p-5 w-full h-[95svh]">
            <div className="p-10 w-[40%] min-h-[50svh] flex flex-col justify-between items-start" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' }}>
                <div className="rounded-lg w-full border-2 border-gray-200 px-4 py-2 flex flex-col items-start justify-center">
                    <p className="font-semibold">{chosenPlan.name}</p>
                    <p>₹{chosenPlan.price}</p>
                </div>
                <form className="w-full" onSubmit={handleSubmitPaymentForm}>
                    <h3 className="text-xl my-4 font-medium flex items-center">Scan the QR-Code to make payment <MoveRight className="ml-2" /></h3>
                    <div className="flex flex-col justify-center items-center my-2">
                        <Image className="p-4 border-2 border-gray-300" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=b5800351091@icici%26am=${chosenPlan.price}%26cu=INR`} alt="upi-qr-code" width={180} height={180} />
                        <div className="flex justify-around items-center my-3">
                            <div className="flex justify-between items-center mx-2">
                                <Image src="/images/googlepay-logo.jpg" alt="googlepay-logo" width={35} height={35} />
                                <p className="text-sm">Google Pay</p>
                            </div>
                            <div className="flex justify-between items-center mx-2">
                                <Image src="/images/paytm-logo.png" alt="paytm-logo" width={35} height={35} />
                                <p className="text-sm">Paytm</p>
                            </div>
                            <div className="flex justify-between items-center mx-2">
                                <Image src="/images/phonpe-logo.png" alt="phonepe-logo" width={25} height={25} />
                                <p className="text-sm">PhonePe</p>
                            </div>
                            <div className="flex justify-between items-center mx-2">
                                <Image src="/images/otherpay-logo.jpg" alt="otherpay-logo" width={30} height={30} />
                                <p className="text-sm">Other UPI Apps</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <label htmlFor="useremail" className="text-sm my-2">UTR (Unique Transaction Reference)</label>
                        <input type="text" id="useremail" placeholder="Enter the utr" name="utr" value={userPaymentDetails.utr} onChange={userPaymentDetailsOnchange} className="w-full border-2 border-gray-200 p-2 rounded-md" />
                    </div>
                    <div className="flex flex-col justify-around items-start w-full my-2">
                        <button className="text-white w-full py-2 bg-black rounded-md my-2">Complete</button>
                    </div>
                </form>
            </div>
        </div>
      <Footer/>
    </>
  );
}
