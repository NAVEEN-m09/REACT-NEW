import React from 'react';
import Events from './events';
import NorVa from '../HOoks/UseState/NorVa';

const trendingItems = [
  {
    title: 'Jhakaas Remakes',
    subtitle: '418.4K Fans',
    image: 'https://imgs.search.brave.com/MQshiUUCPmIcyuqyaBSdOTRDFMMoAY-cwG1kY4liYmY/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9ib2xs/eXNwaWNlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Ny9JTUdfMjI0NS02/MTJ4NzIzLTEuanBl/Zy0xMjV4MTc1Lmpw/Zw',
  },
  {
    title: 'Peddi - Hindi',
    subtitle: 'A.R. Rahman, Mohit Ch...',
    image: 'https://imgs.search.brave.com/lP1fsN8Yzvnw5s8zXDdF4op8cuJ4uDRMM13FtJXGhZg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaW5k/aS5vbmV3b3JsZG5l/d3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI2LzA2L1Bl/ZGRpLVNvbmcud2Vi/cA',
  },
  {
    title: 'Shreya Ghoshal - Love ...',
    subtitle: '37.4K Fans',
    image: 'https://imgs.search.brave.com/QrVT08WZGdVA0z2lhqoCb4ZtuHZdKTmnPB4YY6tVeiE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW5k/dWphdHQuY29tLnNl/L3VwbG9hZHMvYWxi/dW0vbWFpbi1pc2hx/LWxpa2h1LXR1amhl/LWhvLWphYXllLXZh/cmlvdXMud2VicA',
  },
  {
    title: 'Dhurandhar',
    subtitle: 'Shashwat Sachdev',
    image: 'https://imgs.search.brave.com/65qDC6ovbXVErkDwcK6TWRPya2kE8ovKjasq_917pl4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/MWUwMmYzMGRjN2Zl/OWVhNTAxMjc1ZjA0/NDE1Zg',
  },
  {
    title: 'Tere Ishk Mein',
    subtitle: 'A.R. Rahman, Irshad Ka...',
    image: 'https://imgs.search.brave.com/B2Y2IS8-b4lUJtnOqqjQ2HKV16hjtaRYRE9oBHsugWw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvMmdXYk5jZ1pG/TTAvMC5qcGc',
  },
  {
    title: 'Chand Mera Dil',
    subtitle: 'Sachin-Jigar, Amitabh ...',
    image: 'https://imgs.search.brave.com/lnjL_NqFsVE6yJiH55QDNeP1UuCuKSIkhSyul85oawA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW5k/dWphdHQuY29tLnNl/L3VwbG9hZHMvYWxi/dW0vY2hhbmQtbWVy/YS1kaWwtdGl0bGUt/dHJhY2stc2FjaGlu/LWppZ2FyLndlYnA',
  },
  {
    title: 'Ae Dil Hai Mushkil',
    subtitle: 'Pritam',
    image: 'https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg',
  },
  {
    title: 'Hare Krishnaa',
    subtitle: 'R sanju',
    image: 'https://imgs.search.brave.com/pQanIOHsaIhVHNjHhw1bD6kVNX9Y0g34-cx7erh_Qbg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zLnNh/cmVnYW1hLnRlY2gv/aW1hZ2UvYy9md180/ODUvMy8zMi80ZC9t/NDIxMDEtaGFyZS1r/cmlzaG5hLWhhcmUt/a3Jpc2huYS1uYWFt/LWtpcnRhbl8xNDUw/NzAxNzc2LmpwZw',
  },
  {
    title: 'Hanuman',
    subtitle: '267.5K Fans',
    image: 'https://imgs.search.brave.com/Zzrc0tVOmOefYSGVb3SwpNv_iV3PDDSYWhtgm90faFY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zLnNh/cmVnYW1hLnRlY2gv/aW1hZ2UvYy9md180/ODUvZS9kYS8yMS92/ZWVyYW5qYW5leWEt/YmhhamFuYWx1XzE0/NjYxODc0OTMuanBn',
  },
  {
    title: 'Dhurandhar The Reve...',
    subtitle: 'Shashwat Sachdev',
    image: 'https://imgs.search.brave.com/o9owXP_n1003F6NlFAxQpj5THtQPjXSVZBVZdkaY_Vk/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vV1JJ/cWJpZ3I3VzQ4WUVV/c0hSLVl6cG5SRi1t/Z1dqY0lNTnlGX3BD/Q0VhVS5qcGc',
  },
  {
    title: 'Krishnavataram - Part ...',
    subtitle: 'Shreya Ghoshal, Sonu ...',
    image: 'https://imgs.search.brave.com/XdvhyaRfXXtqtr32eiLee6iFz0Z1X2ixC6K7nC_lw_E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYWFn/d29ybGQuY29tL3Vw/bG9hZF9maWxlL2Zv/bGRlcnRodW1iLzQw/MHg0MDAvdGh1bWJf/NjllOWM3ODBjNjcx/ZS53ZWJw',
  },
  {
    title: 'Now Trending',
    subtitle: '60.1K Fans',
    image: 'https://imgs.search.brave.com/jFgymC2m3ieUvAvZgY17uSWCcMkA7Ru3E6KHqu8_QoA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NmL2E0/LzVkL2NmYTQ1ZDkx/NjY4ZDllYTllMmJm/YzA5ZDUyZDg2MzI1/LmpwZw',
  },
];

const App = () => {
  return (
    <>
    <section className='flex items-center justify-between w-full bg-gray-100 rounded-lg shadow-md px-6 py-4'>
      <div className='leftbar flex items-center gap-2 text-sm font-medium text-gray-700 bg-white/10 rounded-md'>
        <img src="https://www.jiosaavn.com/favicon.ico" alt="JioSaavn Logo" className='w-8 h-8 mr-2 h-[32px] w-[32px]' />
        <h2 className='text-lg font-bold'>JioSaavn</h2>
        <ul className='flex items-center gap-4 ml-8 text-sm font-medium text-gray-700'>
          <li>Home</li>
          <li>Podcasts</li>
          <li>Pro</li>
        </ul>
      </div>
      <input type="search" placeholder='Search for Artists, Songs, Podcasts' className='bg-gray-200 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[500px] cursor-pointer' />
      <div className='rightbar' >
        <ul className='flex items-center gap-4 text-sm font-medium text-gray-700'>
          <li classname='flex items-center gap-2 flex-row'>Music Language <h5 className='text-lg font-bold'>Hindi</h5></li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </section>

    <main className='flex items-start gap-4 w-full bg-gray-100 rounded-lg shadow-md mt-4 p-6'>
    <aside className='flex flex-col items-start justify-start gap-4 w-[170px] shrink-0'>
      <h6 className='text-lg font-bold text-gray-700'>BROWSE</h6>
      <ul className='flex flex-col items-start gap-2 text-sm font-medium text-gray-700'>
        <li>New Releases</li>
        <li>Top Charts</li>
        <li>Top Playlists</li>
        <li>Podcasts</li>
        <li>Top Artists</li>
        <li>Albums</li>
      </ul>
      <p className='text-lg font-bold text-gray-700 mt-4'>LIBRARY</p>
      <ul className='flex flex-col items-start gap-2 text-sm font-medium text-gray-700'>
        <li className='text-gray-700 '>History</li>
        <li className='text-gray-700'>liked Songs</li>
        <li className='text-gray-700'>Albums</li>
        <li className='text-gray-700'>Podcasts</li>
        <li className='text-gray-700'>Artists</li>
      </ul>
      <h2 className="text-lg font-bold text-gray-700 mt-4 border-b border-gray-300 pb-2 bg-gray-200 rounded-full h-full w-full"> +   New Playlist</h2>
    </aside>

    <section className="flex-1 overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Now</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-7 gap-y-9 onclick">
        {trendingItems.map((item) => (
          <div key={item.title} className="text-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-square object-cover rounded-md shadow-sm"
            />
            <h3 className="mt-3 font-semibold text-gray-700 truncate">{item.title}</h3>
            <p className="text-sm text-gray-600 truncate">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
    </main> 
    {/* <Events />
    <NorVa />     */}
    </>
  );
};



export default App;
