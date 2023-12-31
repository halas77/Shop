import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#00cf9a] text-white'> Contact </p>
          <p className='text-white py-4'>Submit the form below </p> 
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white bg-black font-bold bg-border-2 rounded-xl px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        
      </form>

    </div>
  )
}

export default Contact