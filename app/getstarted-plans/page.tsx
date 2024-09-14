import Footer from "../components/footer";
import PlanCards from "../components/getStartedPlans/plancards";


export default function GetStartedPlans() {
    const plans = [
        {
            name: 'Basic',
            price: 500,
            duration: 'monthly',
            discount: 10,
            description: 'Basic monthly subscription for individual users',
            field1: 'For personal use',
            field2: 'Unlimited enqueries',
            field3: '50 files',
            field4: 'Health insurence',
            field5: '100 site visits'
        },
        {
            name: 'Premium',
            price: 1000,
            duration: 'monthly',
            discount: 15,
            description: 'Premium monthly subscription for individual users',
            field1: 'For personal use',
            field2: 'Unlimited enqueries',
            field3: '75 files',
            field4: 'Health insurence',
            field5: '250 site visits'
        },
        {
            name: 'Enterprice',
            price: 5000,
            duration: 'monthly',
            discount: 15,
            description: 'monthly subscription for enterprices',
            field1: 'For enterprise uses',
            field2: 'Unlimited enqueries',
            field3: 'Unlimited files',
            field4: 'Health insurence',
            field5: 'Unlimited site visits'
        },
        {
            name: 'Pro',
            price: 10000,
            duration: 'yearly',
            discount: 10,
            description: 'Pro yearly subscription for individual users',
            field1: 'For personal use',
            field2: 'Unlimited enqueries',
            field3: 'Unlimited files',
            field4: 'Health insurence',
            field5: '1000 site visits'
        },
    ]
  return (
    <>
        <div className="flex flex-col justify-center items-center w-full py-5">
            <h1 className="font-bold text-5xl my-2">Purchase a plan</h1>
            <p className="text-gray-500">Purchase any plan to continue with us</p>
        </div>
      <div className="flex justify-center items-center p-10 w-full h-[70svh] mb-[10rem]">
        <div className="flex flex-wrap justify-between items-center w-[85%] h-[50svh]">
            {
                plans.map((plan, i)=>{
                    return <PlanCards plan={plan} key={i}/>
                })
            }
        </div>
      </div>
      <Footer/>
    </>
  );
}
