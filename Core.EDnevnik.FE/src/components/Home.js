import React from 'react';

function Home({user}) {
  return( 
    <div className='mt-5 text-center'>
      <h2>Добредојдовте {user.email} во вашиот дневник.</h2>
      <h4>Училиште: {user.school} </h4>
    </div>
  )
}

export default Home;
