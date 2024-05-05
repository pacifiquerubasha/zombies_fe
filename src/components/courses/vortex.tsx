
function VortexDemo() {
  const handleClick = () => {
    const element = document.getElementById("Social");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const cards = [
    { title: 'Social connections for dummies', url: 'https://www.youtube.com/watch?v=RijQpsWEdrE', imageUrl: 'https://i3.ytimg.com/vi/RijQpsWEdrE/maxresdefault.jpg' },
    { title: 'Emotions for zombies', url: 'https://www.youtube.com/watch?v=V0Sdgn0_kFM', imageUrl: 'https://i3.ytimg.com/vi/V0Sdgn0_kFM/maxresdefault.jpg' },
    { title: 'How to greet someone?', url: 'https://www.youtube.com/watch?v=USqcMSHkSPY', imageUrl: 'https://i3.ytimg.com/vi/USqcMSHkSPY/maxresdefault.jpg' },
    { title: 'How to talk to someone?', url: 'https://www.youtube.com/watch?v=lvgM39UgHbA', imageUrl: 'https://i3.ytimg.com/vi/lvgM39UgHbA/maxresdefault.jpg' },
    { title: 'How to not walk like a zombie?', url: 'https://www.youtube.com/watch?v=786B8jCL4lw', imageUrl: 'https://i3.ytimg.com/vi/786B8jCL4lw/maxresdefault.jpg' },
    { title: 'How to not eat people', url: 'https://www.youtube.com/watch?v=dLairfd8bZU', imageUrl: 'https://i3.ytimg.com/vi/dLairfd8bZU/maxresdefault.jpg' },
    { title: 'How to sit properly?', url: 'https://www.youtube.com/watch?v=jS-6ywIZI1w', imageUrl: 'https://i3.ytimg.com/vi/jS-6ywIZI1w/maxresdefault.jpg' },
    { title: 'How to stand properly?', url: 'https://www.youtube.com/watch?v=kNFsdGsaB2s', imageUrl: 'https://i3.ytimg.com/vi/kNFsdGsaB2s/hqdefault.jpg' },
    { title: 'How to run?', url: 'https://www.youtube.com/watch?v=_kGESn8ArrU', imageUrl: 'https://i3.ytimg.com/vi/_kGESn8ArrU/maxresdefault.jpg' },
    { title: 'How to sleep', url: 'https://www.youtube.com/watch?v=cHKs2aVxOmQ', imageUrl: 'https://i3.ytimg.com/vi/cHKs2aVxOmQ/maxresdefault.jpg' },
    { title: 'How to learn?', url: 'https://www.youtube.com/watch?v=Z2N5a7XZWg8', imageUrl: 'https://i3.ytimg.com/vi/Z2N5a7XZWg8/maxresdefault.jpg' },
    { title: 'How to dress like a human', url: 'https://www.youtube.com/watch?v=5Z5qKBLjvjI', imageUrl: 'https://i3.ytimg.com/vi/5Z5qKBLjvjI/maxresdefault.jpg' },
  ];

  return (
    <>
      <div className="w-full mx-auto h-screen overflow-hidden">
        <div
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            HUMANIZE BEHAVIOUR COURSE
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Decoding Humanity: Essential Insights for the Zombie Mind
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded-full text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
              onClick={handleClick}
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>
      <section className="bg-black py-16" id="Social">
        <div className="container mx-auto px-4">
          <h2 className="text-purple-600 font-serif text-3xl font-semibold mb-8 text-center">HUMANIZE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <a key={index} href={card.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="bg-gray-500 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 h-full"
                >
                  <img className="w-full h-40 sm:h-48 object-fit" src={card.imageUrl} alt={card.title} />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center">{card.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default VortexDemo;
