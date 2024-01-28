import React, { useState } from "react";
// 
import { FaArrowUp,FaArrowDown } from "react-icons/fa6";

function CustomerService() {

    const [showAnswer, setShowAnswer] = useState(0)
   
  const QuestionAnswers = [
    {
      id: 1,
      Question: "Why do I see Different prices for the same product ? ",
      Answers:
        "We are a market place and give multiple brand/sellers a platform to list their products. This is why you will see different prices for the same product. To see the best price available, click the Buy Now button.",
    },
    {
      id: 2,
      Question: "What does the term pre-order mean?",
      Answers: "At times, we're able to give you the chance to buy a much-wanted product before it is available in the maket. This is when we list the product for pre-order—so you can pre-booked and pay for it in advance. The product will be shipped by the brand/seller/brand soon after the official launch.",
    },
    {
      id: 3,
      Question: "Can I cancel a pre-ordered item?",
      Answers: "You can cancel your order until the seller process it. To cancel your order, visit Order History in the My Account section. However, please check for specific terms and conditions at the time of pre-ordering.",
    },
    {
      id: 4,
      Question: "How do I know if a product will fit me?",
      Answers: "Please refer to the size guide provided; you can view size specifications and select the right product for you.",
    },
    {
      id: 5,
      Question: "Can you notify me once a product is back in stock ?",
      Answers: "As the the inventory is refreshed at intervals, we would suggest that you add the product you want to purchase to your wish list and check in on it from time to time.",
    },
    {
      id: 6,
      Question: "My shipping address and billing address may be different. Will that be a problem ?",
      Answers: "Not at all. You can choose to have separate shipping and billing addresses. Our team will deliver the order to your shipping address.",
    },
    {
      id: 7,
      Question: "How do I find out about delivery charges ?",
      Answers: "We offer 3 delivery modes:Standard Delivery: Delivered in 3-6 business days.Express Delivery: Delivered in 1-2 business days.QUiQ PiQ: Order online & collect from store in 1-2 business days. The delivery options available to you will depend on your PIN code, as well as the product you choose to buy and the brand/brand/seller's policies.",
    },
  ];

  return (
    <div className=" w-full flex justify-center items-center bg-gray-100 ">

   
    <div className="  bg-white w-11/12 md:w-10/12 md:m-10 lg:m-20  ">
      {
        QuestionAnswers.map((item)=>(
            <div className={showAnswer === item.id ? "bg-zinc-50 pt-10 px-4 md:px-20":"pt-10 px-4 md:px-20"}>
                <div className="flex justify-between gap-x-5">

          <div>

                <h2 className = {  showAnswer === item.id ?"md:text-lg font-bold ":"cursor-pointer"} onClick={()=>setShowAnswer(item.id)}>{item.Question}</h2>
                {
                    showAnswer === item.id ? ( <p className="mt-2 ">{item.Answers}</p>):(null)
                }
               
            </div>
{/*  */}
               <button className="text-2xl " >
                {
                    showAnswer === item.id ? (<FaArrowUp  onClick={()=>setShowAnswer(0)} />):(<FaArrowDown  onClick={()=>setShowAnswer(item.id)}/>)
                }
              
               </button>
                </div>
               
               <hr className="mt-5" />
            </div>

        ))
      }
      
    </div>
    </div>
  );
}

export default CustomerService;
