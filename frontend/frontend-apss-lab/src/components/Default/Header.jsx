import "./styles.css";

export default function Header()
{
    return (
        <div className="nav-container">
        <nav id = "navbar" className="default-navbar">
            <ul class = "nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About the Project</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Research & Data</a></li>
                <li><a href="#">Outreach</a>
                    <ul>
                       <li>Summer Camp (primary)</li> 
                       <li>Other Outreach Activities</li>
                    </ul>
                </li>
                <li><a href="#">News & Gallery</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Resources</a></li>
            </ul>

        </nav>
        </div>
    );
}