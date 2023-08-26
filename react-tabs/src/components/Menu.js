import Admin from "../components/img/Admin.png"
import React, { Component } from 'react'

class Menu extends Component {

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  state = {
    openDropwDown: "dropdown",
  };

  render() {
    return (
      <>
      <div class="relative inline-block text-left" data-te-dropdown-position="dropstart">
      <div class="dropdown pr-[80px]" >
      <div className={this.state.openDropwDown}>
        <button
        onClick={this.myFunction}
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600 w-9 h-9"
          class="dropbtn"
          type="button"
          data-toggle="dropdown">
          <img class="w-8 h-8 rounded-full" src={Admin} alt="user photo"/>

        </button>

        <div id="myDropdown" class="dropdown-content float-right text-base list-none rounded shadow bg-gray-100 divide-gray-600">
        <div class="absolute right-[0] z-10 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg focus:outline-none" role="menu">
    <div class="py-1" role="none">
        <ul>
              <div class="px-4 py-3" role="none">
                <p class="text-sm  text-black" role="none">
                Manager's Name: Roqaya
                </p>
              </div>
            <a href="#" class="block px-4 py-2 text-sm text-black hover:bg-slate-200 hover:text-black">Help</a>
            <a href="#" class="block px-4 py-2 text-sm  text-black hover:bg-slate-200 hover:text-black">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-black hover:bg-slate-200 hover:text-black">LogOut</a>
  
            </ul>
            </div>
            </div>
          </div>
          </div>
          </div>

         
</div>

</>


       
        
    
 
);
    
}
openDropwDown = () => {
  let value = "dropdown open";
  if (this.state.openDropwDown === "dropdown open") {
    value = "dropdown";
  }
  console.log(value);
  this.setState({ openDropwDown: value });
};




}





export default Menu