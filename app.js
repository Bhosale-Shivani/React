// const heading = React.createElement("h1",{id: "heading", xyz: "abc"},"hello world Fron React");
// console.log(heading);

//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);


const parent =  React.createElement("div",
                        {id: "parent"},
                        React.createElement("div",{id:"child"},[
                        React.createElement("h1",{}, "i am h1 tag"),
                        React.createElement("h2",{}, "i am h3 tag")
]), 
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{}, "i am h1 tag"),
    React.createElement("h2",{}, "i am h3 tag")]));
                         

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);