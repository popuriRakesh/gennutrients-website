import CountUpImport from "react-countup";
const CountUp = CountUpImport && (CountUpImport.default || CountUpImport);
import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stat">
        <h2>
          <CountUp end={100} suffix="+" />
        </h2>
        <p>Premium Ingredients</p>
      </div>

      <div className="stat">
        <h2>
          <CountUp end={25} suffix="+" />
        </h2>
        <p>Countries Served</p>
      </div>

      <div className="stat">
        <h2>
          <CountUp end={1000} suffix="+" />
        </h2>
        <p>Documents Delivered</p>
      </div>

      <div className="stat">
        <h2>
          <CountUp end={99} suffix="%" />
        </h2>
        <p>Customer Satisfaction</p>
      </div>
    </section>
  );
}

export default Stats;
