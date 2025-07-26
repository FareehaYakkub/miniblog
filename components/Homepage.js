const Homepage = ({ quote }) => {
  return (
    <div
      className="h-120 bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/homeimg.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center max-w-xl">
        <p className="text-2xl italic text-gray-800 mb-2">{quote.content}</p>
        <p className="text-lg font-semibold text-gray-900">— {quote.author || 'Unknown'}</p>
      </div>
    </div>
  );
};

export default Homepage;
