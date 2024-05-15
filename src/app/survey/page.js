import ClientButton from "@/app/lib/clientButton";
import data from "@/app/survey/data.json";
import Username from "@/app/lib/Username";
// import handleSubmit from "@/app/survey/submit";

export default function Page() {
  return (
    <>
      <h2>About You Survey</h2>
      <p>
        Tell us a little about your favorites! We are looking to make birthdays
        and other young women related things more meaningful and special. These
        answers will help us with that.
      </p>
      {/* <form action={handleSubmit}> */}
      <form method="POST" action="/api/mongo-post">
        <>
          <div>
            Username (choose a value from each category):
            <Username />
          </div>

          <div className="colorDiv">
            Color:
            <ClientButton classes="off" type="button">
              <img
                src="/images/arrow_xsmall.webp"
                alt="arrow btn"
                height={100}
                width={100}
              />
            </ClientButton>
            <div className="colors">
              {data.colors.map((color) => {
                return (
                  <label
                    key={color}
                    className="color"
                    style={{ backgroundColor: color, color: color }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      style={{ backgroundColor: color, color: color }}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <label>
            Character: <input type="text" name="char" />
          </label>
          <label>
            Book/Movie: <input type="text" name="media" />
          </label>
          <label>
            Scripture/Scripture Story: <input type="text" name="scrip" />
          </label>
          <label>
            Hymn / Church Song: <input type="text" name="song" />
          </label>
          <label>
            Season: <input type="text" name="season" />
          </label>
          <label>
            Hobbies: <input type="text" name="hobbies" />
          </label>
          <label>
            Candy: <input type="text" name="candy" />
          </label>
          <label>
            Dessert: <input type="text" name="dessert" />
          </label>
          <label>
            Food: <input type="text" name="food" />
          </label>
          <label>
            Dislikes: (limit 3) <input type="text" name="dis" />
          </label>
          <div id="bow">
            <img
              src="/images/bow_xsmall.webp"
              alt="bow"
              width={100}
              height={100}
            />
          </div>
          <button
            className="btn"
            type="submit"
            //   onClick={(e) => {
            //     this.add(e);
            //   }}
          >
            Finish Survey
          </button>
        </>
      </form>
    </>
  );
}
