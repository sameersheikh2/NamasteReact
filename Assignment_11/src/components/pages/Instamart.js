import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-1 border-[1px] border-black m-1">
      <h1 className="font-bold text-lg">{title}</h1>
      {console.log(setIsVisible)}
      <button className="mr-1" onClick={() => setIsVisible()}>
        Show
      </button>
      {isVisible && (
        <div>
          <button>Hide</button>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState("about");
  console.log(sectionVisible);
  return (
    <div>
      <Section
        title={"About"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quam modi exercitationem dolor aliquid. Odio consectetur aliquid est tempore eveniet, porro at eum iste saepe aspernatur, nemo voluptate quas qui magni! Reiciendis deleniti laborum earum suscipit doloribus quisquam exercitationem numquam amet maiores, quos pariatur vero sunt voluptas magnam ipsam nesciunt."
        }
        isVisible={sectionVisible === "about"}
        setIsVisible={() => setSectionVisible("about")}
      />
      <Section
        title={"Team"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quam modi exercitationem dolor aliquid. Odio consectetur aliquid est tempore eveniet, porro at eum iste saepe aspernatur, nemo voluptate quas qui magni! Reiciendis deleniti laborum earum suscipit doloribus quisquam exercitationem numquam amet maiores, quos pariatur vero sunt voluptas magnam ipsam nesciunt."
        }
        isVisible={sectionVisible === "team"}
        setIsVisible={() => setSectionVisible("team")}
      />
      <Section
        title={"Production"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quam modi exercitationem dolor aliquid. Odio consectetur aliquid est tempore eveniet, porro at eum iste saepe aspernatur, nemo voluptate quas qui magni! Reiciendis deleniti laborum earum suscipit doloribus quisquam exercitationem numquam amet maiores, quos pariatur vero sunt voluptas magnam ipsam nesciunt."
        }
        isVisible={sectionVisible === "production"}
        setIsVisible={() => setSectionVisible("production")}
      />
    </div>
  );
};

export default Instamart;
