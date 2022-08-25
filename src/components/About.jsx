import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                    </p>
            </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem nostrum reiciendis recusandae consequuntur repellendus consectetur perferendis minima? Provident in laboriosam inventore unde ad, necessitatibus rerum aspernatur nemo soluta placeat consequuntur, minima eius enim eaque cumque nostrum, modi cum? Nemo non veritatis voluptatem ut provident asperiores voluptates necessitatibus vero cumque.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae aut alias necessitatibus fuga iste, ipsam eligendi consectetur exercitationem, debitis delectus dolorem quibusdam libero atque doloremque reiciendis! Voluptates quos ad in labore debitis eum rem adipisci, officiis, vero sint quo reiciendis eaque corporis, enim doloribus? Eligendi culpa porro exercitationem laboriosam?
                </p>
        </div>
    </div>
  )
}

export default About