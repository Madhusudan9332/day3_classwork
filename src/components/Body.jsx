
const Body = () => {
  return (
    <div className="relative h-screen">
      {/* Image taking 100% of viewport width */}
      <img
        src="Body-top.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content on the right side */}
      <div className="absolute right-0 top-48 p-8 text-black">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">Food For Foodies</h1>
        {/* Paragraphs */}
        <p className="text-4xl">
          Are you a gourmet delight, or a culinary muse?
        </p>
        <p className="text-3xl">
          With every bite, my hunger for you I'll never lose.
        </p>
        {/* Buttons */}
        <div className="mt-8">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md mr-4">
            Search now
          </button>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
