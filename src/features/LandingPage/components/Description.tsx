

export function Description() {
  
  return (
    <div className="description">
      <div className="intro">
        <header className="inline-block font-bold text-[2rem] drop-shadow-2xl">
          Meet
          <span className="text-[rgba(119,65,170,1)]"> {" "}ConnectiveMinds</span>{" "}
        </header>
        <div className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          reprehenderit sit beatae ducimus, consectetur dignissimos nisi. Ipsum
          culpa delectus magni in quisquam quia ut sed vel blanditiis fugit!
          Temporibus, iure.
        </div>
        <button className="colored">Explore</button>
      </div>
      <div className="inline-block">
        <img
          className="inline-block absolute z-[2] opacity-80  h-[70vh] "
          src="src\Data\Ellipse 1.png"
          alt=""
        />
        <img className="inline-block absolute" src="src\Data\Connective Minds (3) 1.png" alt="" />
      </div>
    </div>
  );
}
