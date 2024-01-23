
import Account from './Account';
import AccountNavbar from './AcoountNav';
import Notification from './Notification';

function Accountpage() {
   

  return (
   


     <main>
     

<div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
  <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
  <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
     
  <div className="col-span-2 hidden sm:block">
     <AccountNavbar/>
    </div>

    <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">

   <Account/>
   {/* <Notification/> */}
    </div>

   
  </div>
</div>

     </main>
   
  )
}

export default Accountpage