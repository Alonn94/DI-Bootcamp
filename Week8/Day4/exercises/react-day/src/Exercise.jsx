function Exercise () {

const headerStyle ={
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};


return (
    <div>
        <h1 style={headerStyle}>This is a header</h1>
        <p> This is a paragraph</p>
        <a href="https://www.google.com">This is a link</a>
        <form>
            <label for ="name">Name:</label>
            <input type="text" id="name"/>
            <button type="submit">Submit</button>
        </form>
        <img 
        src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        style ={{width: '500px', height: '200px'}}
        alt="google logo"
        />

        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>

        </ul>

    </div>
);
}

export default Exercise;