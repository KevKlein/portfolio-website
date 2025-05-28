import { HiOutlineDesktopComputer } from "react-icons/hi";

function TopicsPage(){
    return (
        <>
            <h2><HiOutlineDesktopComputer /> Web Dev Concepts</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#images">Images</a>
                <a href="#favicons">Favicons</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>The <strong>designated homepage</strong> of a web server is the default webpage served to users when they enter the <strong>URL</strong> of the website without providing a path to a specific resource after the <strong>host domain</strong> name, like https://example.com. The designated homepage is typically named index.html, though different default names are used by some servers and languages. For example, servers using PHP might use index.php, and <strong>Microsoft's</strong> .NET platform allows default.html.</p>
                <p>A browser <strong>Inspector</strong>’s <strong>Network</strong> tab shows information about the <strong>request</strong> and <strong>response</strong> for the page being inspected. In the case of inspecting this index.html file, we see the request method is GET, the URL and <strong>IP address</strong> show the unique location of this webpage, and the status code reads 200 OK, since the file was successfully read. When the same file is viewed locally on a computer, the GET method and OK status show the same, but the URL is a local file path and there is no IP address.</p>
                <p>Three files besides index.html are visible in the inspector: favicon.ico, main.css, and main.js. None of them are present, but favicon.ico has a status 200, while main.css and main.js have a status 404. Error codes in the 400 series are <strong>client errors</strong>, which mean that the client requested a file which doesn’t exist or is otherwise invalid. Even though no favicon.ico is present here, this web server is configured to supply one by default, thus it gets a status 200, and we can see the OSU symbol on the browser tab.</p>
                <p>This web server URL, https://web.engr.oregonstate.edu/~kleikevi/M4/a4-kleikevi/index.html, can be divided into several parts: the <strong>scheme</strong>, the <strong>subdomains</strong>, the host domain, and the resource path. The scheme, HTTPS, is the type of data transfer protocol used to access this resource. The subdomains, web and engr, are divisions of the server being accessed. The host domain, oregonstate.edu, is the main website of the server being accessed. The resource path, ~kleikevi/M9/a8-kleikevi/index.html, is the specific location on the web server where this file is stored.</p>
            </article>
            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> is the aspect of software engineering that deals with the visual design of webpages and web applications, including their appearance, organization, and the overall experience of interacting with them. It encapsulates the navigational structures of websites, how they present information and functionality, their color schemes, imagery, typography, and how they change with respect to different devices and screen sizes. HTML, CSS, JavaScript, and elements of other technologies may be involved in frontend design.</p>
                <p>The quality of a user’s experience on a website is often referred to as its <strong>usability</strong>. Usability can be described by <strong>the five "E"s of usability</strong> as follows:</p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>An effective website allows users to successfully accomplish what they came to do.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>An efficient website is speedy and responsive, and allows users to complete their tasks without unnecessary steps or perceived delay.</dd>
                    <dt><strong>Easy to learn</strong></dt>
                    <dd>An easy-to-learn website can be used effectively by new users without much learning curve. The website’s layout is arranged sensibly, navigation between its various parts is intuitive, and the right quantity of information is on display.</dd>
                    <dt><strong>Error-tolerant</strong></dt>
                    <dd>An error-tolerant website does not throw errors or have incorrect or missing information, no matter what users do on the website. The user is guided to interact with the webpage correctly, and they can easily and gracefully go back or recover from mistakes.</dd>
                    <dt><strong>Engaging</strong></dt>
                    <dd>An engaging website has a pleasant appearance befitting its audience, provides satisfying feedback during interactions with its elements, and makes for an overall positive experience. </dd>
                </dl>
                <p>In HTML, <strong>page layout tags</strong> give structure to the parts of a webpage, visually and semantically, for both human users and robots, and allow the parts of a webpage to be styled or managed as blocks. The header tag denotes the banner of the page, which is typically at the top of the page and includes the site’s name and main navigational menu. The nav tag is used to create a list or menu of navigational links, either internal or external to the site. The main tag denotes the element that contains the primary content of the page, which might include articles, videos, or any number of things. The section tag is used to group related elements together, often with a common heading. The article tag is for a single, specific topic. The footer tag typically just contains a copyright, legal links, and contact information.</p>
                <p><strong>Anchors</strong> create hyperlinks for navigation within a page, to other pages on a website, and to other websites.</p>
                <ol>
                    <li>Internal anchors navigate within a webpage by moving the <strong>viewport</strong> of the browser up or down to the destination element with a reference to its internal ID.</li>
                    <li>Page-to-page anchors navigate to other pages of a website by using a <strong>relative</strong> URL pointing to the appropriate file in the server’s directory structure.</li>
                    <li>External anchors take users to outside websites or their resources via <strong>absolute</strong> URLs.</li>
                </ol>
            </article>
            <article id="images">
                <h3>Images</h3>
                <p>There are six major specifications for optimizing online images: <strong>descriptive file names</strong>, <strong>small file sizes</strong>, <strong>exact dimensions</strong>, <strong>reduced resolution</strong>, <strong>color modes</strong>, and <strong>correct file formats</strong>. Descriptive file names improve <strong>search engine optimization (SEO)</strong> by telling robots who, what, when, and where the file is about. Using small file sizes, often accomplished by shrinking image sizes via compression, is important for enabling a page to load faster. Resizing images to use the exact dimensions viewable on the webpage similarly saves time, as it avoids loading overly large images that end up getting shrunk to fit anyway. Offering reduced resolution versions of the images allows devices with smaller screens to automatically select a smaller file to load. Images destined for webpages should be saved with appropriate color modes for their content—generally RGB is used for everything digital except simple graphics with limited colors, like <strong>GIF</strong>s or some <strong>PNG</strong>s, which should use Indexed to save space. Images should have the correct file formats for their content to get the best mix of fidelity and small file size.</p>
                <p>Images should have the correct file formats for their content to get the best mix of fidelity and small file size. Photos should use <strong>.JPG</strong> or <strong>.WebP</strong>, while graphics such as line-art should use .PNG, .GIF, or <strong>.SVG</strong> formats. JPG and WebP formats are good at representing images with millions of colors and have good compressibility, which makes them the most suitable for photographs. WebP also offers transparency, but is not supported by some browsers. PNG allows transparency and uses <strong>lossless</strong> compression, but has large files sizes when there are many colors present, making it most appropriate for digital graphics. GIFs can be animated and allow all-or-nothing transparency, but are limited to a 256-color palette, making them best-suited for short, simple videos or photo sequences. SVGs are vector based, meaning they can efficiently represent simple graphics with infinite scalability, and can even be manipulated by the webpage, but they can’t accurately represent raster images such as photos.</p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p><strong>Favicons</strong> are small, easily recognizable symbols that give users a quick way to identify websites. Browsers find them in the root directory of a website and display them in tabs, bookmarks, histories, etc. Devices also use them as the image for the shortcut created when the user saves a website to the home screen. Multiple versions or resolutions of favicons are often offered so that browsers and devices can select the one that works best for them.</p>
            </article>
        </>
    )
}
export default TopicsPage;