const hostName = window.location.hostname.toLowerCase();

const basicLink = process.env.NODE_ENV === "development" ? "http://localhost:8034/" : "/"

const devLinks = {
    vision : basicLink + "vision",

    file_receiver : basicLink + "file_receiver",
}




const links = process.env.NODE_ENV === "development" ? devLinks : devLinks;

export default links