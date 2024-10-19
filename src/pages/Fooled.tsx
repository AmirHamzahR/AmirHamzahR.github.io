export default function FoolPage() {
  // Create an array with 10 elements to map over
  const gifArray = Array(10).fill(0);
  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://images4.alphacoders.com/135/thumb-1920-1353868.jpeg')] bg-cover text-white text-center font-comic p-6 w-full">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-6xl font-bold">
          🤣😂 You have been fooled! 😂🤣
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          {gifArray.map((_, index) => (
            <img
              key={index}
              src="https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif" // Replace with any weird GIF URL
              alt="weird gif"
              className="m-2 w-32 h-32" // Adjust size and spacing
            />
          ))}
        </div>
        <div className="text-5xl font-bold">There's no sign-in page here!</div>
        <div className="text-6xl">🎉💥🎊🙃🥳🤡</div>
        <div className="text-5xl font-bold">
          Enjoy the fun! <br /> <span className="text-6xl">🕺💃🦸‍♂️🦸‍♀️😎</span>
        </div>
      </div>
    </div>
  );
}
