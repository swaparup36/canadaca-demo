export default function Focuson() {
    return (
      <>
        <div className="w-full flex flex-col justify-center items-center my-4">
            <div className="w-[75%] flex items-center justify-start flex-wrap">
                <h2 className="text-2xl font-bold">Focus on</h2>
            </div>
            <div className="w-[75%] flex items-center justify-between flex-wrap py-4">
                <div className="flex flex-col justify-center items-start w-[30%] my-4">
                    <h3 className="underline text-xl font-semibold my-1">Indigenous peoples</h3>
                    <p className="text-[1.1rem]">Programs and services for First Nations, Inuit and Métis</p>
                </div>
                <div className="flex flex-col justify-center items-start w-[30%] my-4">
                    <h3 className="underline text-xl font-semibold my-1">Veterans and military</h3>
                    <p className="text-[1.1rem]">Services for current and former military, RCMP and their families</p>
                </div>
                <div className="flex flex-col justify-center items-start w-[30%] my-4">
                    <h3 className="underline text-xl font-semibold my-1">Youth</h3>
                    <p className="text-[1.1rem]">Programs and services for teenagers and young adults</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  