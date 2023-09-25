import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Cell, Pie, PieChart } from "recharts";

import * as Styled from "./Result.styled";
import { useNavigate } from "react-router";

const Result = () => {
  const Naviagte = useNavigate();
  const Condition = useSelector((state: any) => state.Condition);

  const { start_time, end_time, conditionList } = Condition;

  const totalTime = moment(end_time).diff(moment(start_time), "seconds");

  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const data = [
    { name: "right", value: rightAnswer },
    { name: "wrong", value: wrongAnswer },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  useEffect(() => {
    if (!conditionList) return;

    const right = conditionList.filter((item: any) => {
      return item === "correct";
    }).length;
    setRightAnswer(right);
    setWrongAnswer(conditionList.length - right);
  }, [conditionList]);

  const reviewNote = () => {
    Naviagte("/reivew_note");
  };

  return (
    <>
      <div>
        <h1>Result</h1>
        <p>total time: {totalTime} sec</p>
        <p>correct answer: {rightAnswer}</p>
        <p>wrong answer: {wrongAnswer}</p>

        <PieChart width={400} height={400}>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            fill="#8884d8"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              percent,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              // eslint-disable-next-line
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              // eslint-disable-next-line
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              // eslint-disable-next-line
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill={COLORS[index % COLORS.length]}
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {data[index].name} ({value}){" "}
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Styled.NoteButton onClick={reviewNote}>
          Review Notes for worng Answer
        </Styled.NoteButton>
      </div>
    </>
  );
};

export default Result;
