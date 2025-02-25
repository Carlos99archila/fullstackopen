//Header
const Header = ({ course }) => {
    return <h1>{course}</h1>;
};

//Conter
const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <p key={index}>
                    {part.name} {part.exercise}
                </p>
            ))}
        </div>
    );
};

//total
const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercise, 0);
    return <p>Number of exercises {total}</p>;
};

//App
const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            { name: "Fundamentals of React", exercise: 10 },
            { name: "Using props to pass data", exercise: 7 },
            { name: "State of component", exercise: 14 },
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App;
