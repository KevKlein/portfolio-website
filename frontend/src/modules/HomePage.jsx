import { FaHome } from "react-icons/fa";

function HomePage(){
    return (
        <>
            <h2><FaHome /> Welcome to my Web Dev Portfolio!</h2>
            <article>
                <h3>Career Goals</h3>
                {/* <p>I am pursuing a career in software engineering, with a focus on building reliable and efficient systems that solve real-world problems. While this portfolio demonstrates full-stack development, my interests are more in backend development or areas like application or system design, API development, or database management. I enjoy tackling challenges that require logical problem-solving and scalability, and I am excited to develop my skills in creating robust software solutions.</p>  */}
                <p>I am passionate about building effective software solutions, whether for front-end, back-end, or full-stack, as well as desktop applications. I enjoy creating clean, uncluttered user interfaces and ensuring that they are intuitive and visually appealing. On the back end, I focus on writing code that is efficient, maintainable, and easy to understand. My goal is to contribute to projects that deliver great user experiences and perform reliably at scale. I am eager to bring this combination of skills and interests to a team where I can grow and make an impact.</p>
                <h3>About this app</h3>
                <p>Below are the key technologies used to build this portfolio, showcasing a modern full-stack web development approach. They are demonstrated in each of the pages of this single page application.</p>

                <div>
                <aside><img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="MERN logo"/></aside>

                <dl className="tech-stack">

                    <dt><strong>MongoDB</strong></dt>
                    <dd>A NoSQL database used to store and retrieve data efficiently for web applications.</dd>
                    
                    <dt><strong>Express</strong></dt>
                    <dd>A web application framework that provides a server-side CRUD API for Node.js, simplifying development.</dd>
                    
                    <dt><strong>React</strong></dt>
                    <dd>A popular JavaScript library for building dynamic and interactive user interfaces.</dd>
                    
                    <dt><strong>Node.js</strong></dt>
                    <dd>A cross-platform runtime environment that allows JavaScript to be executed on the server.</dd>
                    
                    <dt><strong>HTML</strong> & <strong>CSS</strong></dt>
                    <dd>The building blocks for creating the structure, meaning, and style of web pages.</dd>
                    
                    <dt><strong>JavaScript</strong></dt>
                    <dd>A versatile, modernized programming language used for client-side and server-side scripting.</dd>

                    <dt><strong>Event-Driven Programming</strong></dt>
                    <dd>A programming paradigm that enables fully interactive webpages by registering events based on user interactions.</dd>

                    <dt><strong>Asynchronous Programming</strong></dt>
                    <dd>A technique for improving the responsiveness of web applications using non-blocking code that handles tasks like data fetching without delaying other operations.</dd>

                </dl>
                </div>
            </article>
        </>
    )
}

export default HomePage;