import { useState } from 'react';

const images = [
  { id: 1, url: 'https://th.bing.com/th/id/R.4a10cc5456ddb0170e461fc60b002a98?rik=E49HgzWnOvklZw&riu=http%3a%2f%2fbeddingnewsnow.com%2fwp-content%2fuploads%2f2024%2f06%2fphotos.png&ehk=Ko4PmfmN7jF%2baqhjYS9ihVYeD80x8yXuvld9vSOUIo8%3d&risl=&pid=ImgRaw&r=0' },
  { id: 2, url: 'https://live.staticflickr.com/8458/8068280950_7008c1db3a.jpg' },
  { id: 3, url: 'https://th.bing.com/th/id/R.c6474327b81ab5a89492e2eb9aeef264?rik=Kn5X7%2bNJXrbWhg&riu=http%3a%2f%2fpic.qianye88.com%2fpic%2f6254bf0bfb6c9d23da7e4883b35f927b.jpg%3fimageMogr2%2fthumbnail%2fx380%2fquality%2f90!&ehk=i07fHqsyDQOQtpvYG4DrH%2fm5NIiMKbI%2feOu0QXg7B84%3d&risl=&pid=ImgRaw&r=0' },
  { id: 4, url: 'https://th.bing.com/th/id/OIP.Gfd_T-U4ArTskDgWRZerLwHaFL?w=767&h=537&rs=1&pid=ImgDetMain' },
  { id: 5, url: 'https://img.freepik.com/premium-photo/majestic-nature-landscape-with-sunset-sky-ai-generated_991150-1305.jpg' }
];

export const Random = () => {
  const [image, setImage] = useState(null);
  const changeImage = () => setImage(images[Math.floor(Math.random() * images.length)]);
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <button onClick={changeImage} className="mb-4 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      {image && <img src={image.url} alt="Random" className="w-full h-auto rounded" />}
    </div>
  );
};
