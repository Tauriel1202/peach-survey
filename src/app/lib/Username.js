import data from "@/app/survey/data.json";

function createSection(key) {
  return (
    <div className={`${key} scroll`}>
      {data[key].map((value, index) => {
        return (
          <label key={value + index}>
            {value},
            <input type="radio" name={key} value={value} />
          </label>
        );
      })}
    </div>
  );
}

export default function Username() {
  return (
    <div className="userDiv">
      {createSection("adjs")}
      {createSection("objs")}
      {createSection("animals")}
    </div>
  );
}
