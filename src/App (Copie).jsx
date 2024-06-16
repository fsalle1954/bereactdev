 import Navbar from "./components/Navbar";
 import Hero from './components/Hero';
 import HomeCards from './components/HomeCards';
 import Titlejobs from './components/Titlejobs';
 import SeniorReact from './components/SeniorReact';
 import FrontEndReact from './components/FrontEndReact';

 
 const App = () => {
  return (  
  <>
  <Navbar />
  <Hero />
  <HomeCards />
  <Titlejobs />
  <SeniorReact />
  <FrontEndReact />
   
       
<section>
{/* <!--> Job Listing 3 --> --> */}
<div className="bg-white rounded-xl shadow-md relative">	
<div className="p-4">
<div className="mb-6">
<div className="text-gray-600 my-2">Remote</div>
<h3  className="text-xl font-bold">React.js Developer</h3>
</div>

<div className="mb-5">
Are you: passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
</div>

<h3 className="text-indigo-500 mb-2">$70K — $80K:/-Year</h3>

<div className="border:border-gray-100-mb-5"></div>

<div className="flex: flex—col: 1g: flex—row justify—between mb-4">
<div className="text-orange-700 mb-3">
<i className="fa-solid fa—location—dot text-lg"></i>
Brooklyn, NY
</div>
<a
href="job.html"
className="h-[36px] bg-indigo-500 hover:bg—indigo-600-text-white px-4 py-2 rounded-lg text-center text-sm"
>
Read More
</a>
</div>
</div>
</div>

{/* <!--- </div> --> */}
{/* <!--- </div> --> */}
</section>

<section className="m-auto max-w-lg my-10 px-6">
<a
href="jobs.html"
className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
>View ALL Jobs</a
>
</section>
  
 </>

  )
  }
  export default App 
